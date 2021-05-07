import React, {Suspense} from "react";

export  function SuspenseComponent <WCP>(WrappedComponent:React.ComponentType<WCP>)  {
    return(props:WCP)=>{
        return (
            <div>
                <Suspense fallback={<div>Loading... </div>}>
                    <WrappedComponent {...props} />
                </Suspense>
            </div>
        )
    }
}