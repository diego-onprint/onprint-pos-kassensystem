export type Category = {
    id: number
    name: string
    slug: string
    description: string
    parent_category_ids: number[]
    subcategories: boolean
    image: {
        alt: string
        url: string
    }
}

export type CategoryParams = {
    params: {
        id?: string[]
    }
}

export type Product = {
    id: number
    name: string
    description: string
    price: number
    stock?: number
    parent_category_ids: number[]
    color: string
    image: {
        url: string
        alt: string
    }

}

export type ProductsParams = {
    params: {
        id: string
    }
}