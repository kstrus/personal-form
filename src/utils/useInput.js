import { useState } from 'react';

const useInput = (initialValue = '') => {
    const [value, setValue] = useState(initialValue);

    const handleChange = event => {
        if (event) {
            setValue(event.target.type === "checkbox" ? event.target.checked : event.target.value)
        } else {
            setValue(initialValue);
        }
    };

    return [value, handleChange];
};

export default useInput;
