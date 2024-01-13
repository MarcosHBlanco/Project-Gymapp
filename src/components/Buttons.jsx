import React, { useState } from "react";

export default function Buttons({ initialValue }) {

    const [value, setValue] = useState(initialValue);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditSaveSwitch = () => {
        setIsEditing(!isEditing);
    }


    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className="divButtons">
            {isEditing ? (<input type="text" value={value} onChange={handleChange} /> 
            ) : (
                <span>{value}</span>
            )}
            <button onClick={handleEditSaveSwitch}>{isEditing ? "Save" : "Edit"}
            </button>
        </div>
    );
}

