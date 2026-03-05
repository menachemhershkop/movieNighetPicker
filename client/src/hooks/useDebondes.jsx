import React, { useState } from 'react'

function useDebondes() {


    const [deb, setDeb] = useState(value);
    let timer;
    function back(e){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            console.log(123);
            
            setDeb(e)
        }, delayMs);

}
    return  {deb, back}

};


export default useDebondes
