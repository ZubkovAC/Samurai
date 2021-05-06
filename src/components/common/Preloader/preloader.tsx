import preloader from '../../images/loading.svg'
import React from "react";


export const Preloader = () =>{
    return(<>
                <div style={{backgroundColor:'wheat',display: 'flex',justifyContent: 'center'}}>
                    <img src={preloader} alt='please - wait' width='400px'/>
                </div>
    </>)
}
