import React, {useState} from "react"

type ProfileStatusPropsType = {
    status: string
    updateStatus:(status:string)=>void
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState(props.status)


    const DoubleCLick = () => {
        setEditMode(true)
    }
debugger
    return (
        <div>
            {!editMode ?

                <span onDoubleClick={DoubleCLick}>
                {status ? status : 'hello'}
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

                />

            }


        </div>
    )
}