import React from 'react';

const Simage = (props) => {

    const imgSrc = `https://source.unsplash.com/400x400/?${props.searchvalue}`;
    
    return (
        <>
            <img src={imgSrc} alt='Search' title={props.searchvalue}/>
        </>
    )
}

export default Simage;