import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [form, setForm] = useState(initialState);

    const reset = () => {
        setForm(initialState);
    }

    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    return {
        ...form,
        form,

        //methods
        setForm,
        reset,
        handleInputChange,
    }
}