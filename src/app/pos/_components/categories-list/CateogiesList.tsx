import Link from 'next/link'
import { fetchCategories } from '@/lib/actions/categories-actions'
import type { Category, CategoryParams } from '@/types'

export default async function CateogiesList({ params } : CategoryParams) {

    const categories = await fetchCategories(params.id)

    return (
        <div className="grid grid-cols-12 gap-2 py-2">
            {
                categories.map((category: Category) => {

                    let to = ""

                    if (category.subcategories && params.id) {
                        // Navigate to nested subcategories
                        to = `/pos/categories/${params.id.join("/")}`
                    } else if (category.subcategories) {
                        to = `/pos/categories/${category.id}`
                    } else {
                        to = `/pos/products/${category.id}`
                    }

                    return (
                        <Link
                            href={to}
                            key={category.id}
                            className={`p-2 col-span-6 @xs/main:col-span-4 @md/main:col-span-3 h-24 grid place-items-center border border-zinc-200 bg-white rounded-lg`}
                        >
                            <h3 className="truncate w-11/12 text-center">{category.name}</h3>
                        </Link>
                    )
                })
            }
        </div>
    )
}
