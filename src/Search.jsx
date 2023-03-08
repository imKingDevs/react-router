import React, { useState } from 'react'
import Simage from './Simage';

const Search = () => {
    
    const [input, setinput] = useState('');

    const inputIext = (event) => {
        setinput(event.target.value);
        console.log(event.target.value);
    }
    
    return (
        <>
            <div className='searchImage'>
                <input type={'text'} placeholder='Search Image' onChange={inputIext} value={input}/>
                {input !== '' ? <Simage searchvalue={input} /> : null}
                {/* <Simage searchvalue={input} /> */}
            </div>
        </>
    )
}

export default Search;