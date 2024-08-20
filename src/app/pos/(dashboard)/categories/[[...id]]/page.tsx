import { Suspense } from "react"
import CategoriesList from "@/app/pos/_components/categories-list/CateogiesList"
import CategoriesListSkeleton from "@/app/pos/_components/categories-list/skeleton/CategoriesListSkeleton"
import { CategoryParams } from "@/types"

export default function Categories({ params } : CategoryParams) {
    return <div>
        <h2>Categories</h2>
        <Suspense fallback={<CategoriesListSkeleton />}>
            <CategoriesList params={params} />
        </Suspense>
    </div>
}