import React from 'react'
import { useState } from 'react'

export const AddCategory = ({onNewValue}) => {

    const [inputValue, setinputValue] = useState('');

    const onChangeInput = (event) => {
        setinputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        //onAddCategory( categories => [inputValue, ...categories]);
        onNewValue(inputValue.trim());
        setinputValue('');
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input
                type='text'
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={onChangeInput}
            />
        </form>
    )
}
