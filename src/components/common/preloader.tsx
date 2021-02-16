import preloader from './../images/loading.svg'
import React from "react";


export const Preloader = () =>{
    return(<>
                <div style={{backgroundColor:'wheat'}}>
                    <img src={preloader} width='400px'/>
                </div>
    </>)
}