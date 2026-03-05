import React, { useEffect, useState } from 'react'

function useDebondes(value, delay =500) {


    const [deb, setDeb] = useState(value);
   
    useEffect(()=>{
        
        const timer = setTimeout(()=>{
            setDeb(value)
        }, delay);


    return ()=> clearTimeout(timer)
},[value,delay])

    return deb
};


export default useDebondes
