"use client"

import { createNewProduct } from '@/lib/actions/product-actions'
import toast from 'react-hot-toast'

const NewProductForm = () => {

    const handleAction = async (formData: FormData) => {
        try {
            await createNewProduct(formData)
            toast.success("New product created")
        } catch (err) {
            console.error(err)
            toast.error("Error creating new product")
        }
    }

    return (
        <form action={handleAction}>
            <label>Name</label>
            <input 
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default NewProductForm