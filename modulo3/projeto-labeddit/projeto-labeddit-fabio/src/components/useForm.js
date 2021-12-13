import React from "react";
import { useState } from "react";

 const useForm = (startState) => {
    const [form, setForm] = useState(startState)

    const changeValues = (event) => {
        const { name, value } = event.target
        setForm({...form, [name]: value})
    }

    const clear = () => {
        setForm(startState)
    }

    return { form, changeValues, clear }
} 

export default useForm;