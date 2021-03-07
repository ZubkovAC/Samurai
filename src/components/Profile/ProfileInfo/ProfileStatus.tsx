import React, {useState} from "react"

type ProfileStatusPropsType = {
    status: string
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState(props.status)


    const DoubleCLick = () => {
        setEditMode(true)
    }

    return (
        <div>
            {!editMode ?

                <span onDoubleClick={DoubleCLick}>
                {status}
                </span>

                :
                <input
                    onKeyUp={(e) => {
                        if (e.key === "Enter") {
                            setEditMode(false)
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