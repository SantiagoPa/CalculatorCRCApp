import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [form, setForm] = useState(initialState);

    const reset = () => {
        setForm(initialState);
    }

    const handleInputChange = (prop) => (event) => {
        setForm({
            ...form,
            [prop]: event.target.value
        });
    }

    return {
        ...form,
        form,

        //methods
        reset,
        handleInputChange,
    }
}