"use server"

import { pool } from "@/lib/db/db"

export async function fetchCategories(ids?: string[]) {
    try {
        // If no id query all the categories for the POS which is 1
        if (!ids) {
            const query = `
                SELECT *
                FROM categories
                WHERE 1 = ANY(parent_category_ids);
            `
            const { rows } = await pool.query(query)
            return rows
        }

        // Get last segment of the url
        const lastId = ids[ids.length - 1]

        const query = `
                SELECT *
                FROM categories
                WHERE $1 = ANY(parent_category_ids);
            `
        const { rows } = await pool.query(query, [lastId])
        return rows
    } catch (err) {
        console.error("fetchCategories => ", err)
        throw new Error("Error fetching categories")
    }
}