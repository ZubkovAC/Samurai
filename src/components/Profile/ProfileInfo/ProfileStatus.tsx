import React, {useEffect, useState} from "react"

type ProfileStatusPropsType = {
    status: string
    updateStatus:(status:string)=>void

}

export const ProfileStatus = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState(props.status)


    useEffect( ()=>{
        setStatus(props.status)
    },[props.status])

    const DoubleCLick = () => {
        setEditMode(true)
    }

    const deactivetedEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    return (
        <div>
            {!editMode ?
                <span onDoubleClick={DoubleCLick}>
                {status ? status :'hello' }
                </span>
                :
                <input
                    onKeyUp={(e) => {
                        if (e.key === "Enter") {
                            setEditMode(false)
                            props.updateStatus(status)
                        }
                    }}
                    onChange={(e) => {
                        setStatus(e.currentTarget.value)
                    }} value={status}
                    onBlur={deactivetedEditMode}
                    autoFocus={true}
                />

            }
        </div>
    )
}