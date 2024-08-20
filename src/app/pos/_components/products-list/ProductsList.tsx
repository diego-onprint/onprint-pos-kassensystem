import { fetchProductsByCategory } from "@/lib/actions/product-actions"
import ProductCard from "./product-card/ProductCard"
import type { Product } from "@/types"

export default async function ProductsList({ id }: { id: string }) {

    const products: Product[] = await fetchProductsByCategory(id)

    return <div className="grid grid-cols-12 gap-2 py-2">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
}