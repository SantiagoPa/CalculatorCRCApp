import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [form, setForm] = useState(initialState);

    const reset = () => {
        setForm(initialState);
    }

    const handleInputChange = (event, regex) => {
        setForm({
            ...form,
            [event.target.name]: regex ? event.target.value.replace(/[^0-1]/g, "") : event.target.value,
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