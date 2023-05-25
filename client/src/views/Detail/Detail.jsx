import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemon } from '../../redux/actions';

const Detail = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPokemon());
    },[dispatch]);
    return(
        <>
            <h1>Esta es la vista de Detail</h1>
            
        </>
    )
};

export default Detail;