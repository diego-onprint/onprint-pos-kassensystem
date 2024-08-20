/*
 * TODOs
 * Validate data
 */

"use server"

import { pool } from "@/lib/db/db"
import { revalidatePath } from "next/cache"

export async function fetchAllProducts() {

    try {
        const query = `
            SELECT
                p.id AS id,
                p.name AS name,
                p.description AS description,
                p.price AS price,
                p.color AS color,
                p.image AS image,
                COALESCE(
                    json_agg(
                        CASE
                            WHEN v.id IS NOT NULL THEN
                                jsonb_build_object(
                                    'variation_id', v.id,
                                    'variation_name', v.name,
                                    'options', (
                                        SELECT json_agg(
                                            jsonb_build_object(
                                                'option_id', option_data ->> 'id',
                                                'option_name', option_data ->> 'name',
                                                'option_price', (option_data ->> 'price')::DECIMAL
                                            )
                                        )
                                        FROM jsonb_array_elements(v.options) AS option_data
                                    )::json
                                )
                            ELSE NULL
                        END
                    ) FILTER (WHERE v.id IS NOT NULL), '[]'::json
                ) AS variations
            FROM
                products p
            LEFT JOIN
                product_variations pv ON p.id = pv.product_id
            LEFT JOIN
                variations v ON pv.variation_id = v.id
            GROUP BY
                p.id, p.name, p.description, p.price, p.color, p.image
            ORDER BY
                p.id ASC;
        `
        const { rows } = await pool.query(query)
        return rows
    } catch (err) {
        console.error("fetchAllProducts => ", err)
        throw new Error("Error creating new product")
    }
}

export async function fetchProductsByCategory(id: string) {
    try {
        const query = `
            SELECT
                p.id AS id,
                p.name AS name,
                p.description AS description,
                p.price AS price,
                p.color AS color,
                p.image AS image,
                COALESCE(
                    json_agg(
                        CASE
                            WHEN v.id IS NOT NULL THEN
                                jsonb_build_object(
                                    'variation_id', v.id,
                                    'variation_name', v.name,
                                    'options', (
                                        SELECT json_agg(
                                            jsonb_build_object(
                                                'option_id', option_data ->> 'id',
                                                'option_name', option_data ->> 'name',
                                                'option_price', (option_data ->> 'price')::DECIMAL
                                            )
                                        )
                                        FROM jsonb_array_elements(v.options) AS option_data
                                    )::json
                                )
                            ELSE NULL
                        END
                    ) FILTER (WHERE v.id IS NOT NULL), '[]'::json
                ) AS variations
            FROM
                products p
            LEFT JOIN
                product_variations pv ON p.id = pv.product_id
            LEFT JOIN
                variations v ON pv.variation_id = v.id
            WHERE
                $1 = ANY(p.parent_category_ids) -- Filter by the category ID present in parent_category_ids array
            GROUP BY
                p.id, p.name, p.description, p.price, p.color, p.image
            ORDER BY
                p.id ASC;
        `
        const { rows } = await pool.query(query, [id])
        return rows
    } catch (err) {
        console.error("fetchAllProducts => ", err)
        throw new Error("Error fetching products")
    }
}

export async function createNewProduct(data: FormData) {

    const name = data.get("name")
    const description = ""
    const price = 0
    const parent = ["pos", "shop"]

    // Validate data

    try {
        const query = "INSERT INTO products (name, description, price, parent ) VALUES ($1, $2, $3, $4) RETURNING *"
        const result = await pool.query(query, [name, description, price, parent])
        revalidatePath("/pos/products")
        return result.rows[0]
    } catch (error) {
        console.error("createNewProduct => ", error)
        throw new Error("Error creating new product")
    }
}

