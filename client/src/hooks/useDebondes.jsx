import React, { useEffect, useState } from 'react'

function useDebondes(value, delay=500) {


    const [deb, setDeb] = useState(value);
    let timer;
    useEffect(()=>{
     timer = setTimeout(()=>{
            setDeb=(value)
        }, delay)
        return ()=> clearTimeout(timer)
    }, [value,delay])
    return deb
}




export default useDebondes
