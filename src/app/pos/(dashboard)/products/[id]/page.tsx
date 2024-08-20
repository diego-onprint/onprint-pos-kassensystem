import { Suspense } from "react"
import ProductsList from "@/app/pos/_components/products-list/ProductsList"
import ProductsListSkeleton from "@/app/pos/_components/products-list/skeleton/ProductsListSkeleton"
import type { ProductsParams } from "@/types"

export default async function Products({ params }: ProductsParams) {
    return <div>
        <h2>Products</h2>
        <Suspense fallback={<ProductsListSkeleton />}>
            <ProductsList id={params.id} />
        </Suspense>
    </div>
}
