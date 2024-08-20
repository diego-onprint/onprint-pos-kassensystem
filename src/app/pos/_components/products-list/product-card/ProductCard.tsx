"use client"

import type { Product } from "@/types"

export default function ProductCard({ product } : { product: Product }) {
    return (
        <article
            onClick={() => console.log(product)}
            key={product.id}
            role="button"
            tabIndex={0}
            className="px-3 py-2 flex flex-col justify-between relative overflow-hidden h-24 border border-zinc-200 bg-white rounded-lg"
        >
            <h3 className="font-semibold">{product.name}</h3>
            {/* <p className="self-end">CHF {formatPrice(product.price)}</p> */}
        </article>
    )
}
