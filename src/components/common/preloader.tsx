import preloader from './../images/loading.svg'
import React from "react";

type PreloaderPropsType = {
    isFetching:boolean | null
}


export const Preloader = (props:any) =>{
    return(<>
                <div style={{backgroundColor:'wheat'}}>
                    <img src={preloader} width='400px'/>
                </div>
    </>)
}