import { useState } from "react";

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const changeValues = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    const clear = () => {
        setForm(initialState)
    }

    return { form, changeValues, clear }
}

export default useForm