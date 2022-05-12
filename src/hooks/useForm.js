import { useState } from 'react';

const useForm = (initialStateValue) => {
    const [info, setInfo] = useState(initialStateValue);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }))
    }

    return { info, handleChange }
}

export default useForm;