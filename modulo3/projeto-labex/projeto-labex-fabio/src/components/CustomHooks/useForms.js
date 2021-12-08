import React from "react"
import { useState } from "react"

const useForms = (state) => {
    const [forms, setForm] = useState(state)
    console.log(state)
    const onChange = (event) => {
        console.log(event)
        const { name, value } = event.target
        setForm({ ...forms, [name]: value })
    }

    const clear = () => {
        setForm(state)
    }

    return { forms, onChange, clear }
}

export default useForms