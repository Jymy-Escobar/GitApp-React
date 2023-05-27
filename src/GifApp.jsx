import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifApp = () => {
    const [categories, setCategories] = useState(['One Punch'])


    const addCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            return;
        }

        setCategories([newCategory, ...categories]);
        // setCategories(cat => [...cat, 'Valorant']);
    }

    return (
        <>
            <h1>GifApp</h1>

            <AddCategory
                onNewValue={(event) => addCategory(event)}
            />

            {
                categories.map((category) => (
                    <GifGrid key={ category } category={category}/>
                ))
            }
        </>
    )
}
