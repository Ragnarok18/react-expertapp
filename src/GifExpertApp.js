import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man']);


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <div className="container">
                <div className="row">
                    <ol>
                        {
                            categories.map(category => 
                                <GifGrid
                                    key={category}
                                    category={category}
                                />
                            )
                        }
                    </ol>
                </div>
            </div>
        </>
    )

}

// api: 6YMJD5nk27D4skfeYrNkrTfg2j0raT9x