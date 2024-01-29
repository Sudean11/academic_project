import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';

function UpdateTitle(props) {

    const [typedValue, setTypedValue] = useState('');

    const handleChangeEvent =(event) =>{
        setTypedValue(event.target.value)
        console.log(event.target.value)
    }

    const updatePostTitle=()=>{
        props.updatedPost(typedValue);
    }

    return (
        <div className='update-title'>
            <div>Update Title</div>
            <div><input value={typedValue} onChange={handleChangeEvent}></input></div>
            <div><button onClick={updatePostTitle}>Update</button></div>
        </div>
    );
}

export default UpdateTitle;