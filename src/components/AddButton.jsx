import React from "react";

export default function AddButton({handleAddExercise}){
    return(
        <div className="addButton">
            <button onClick={handleAddExercise}>Add Exercise</button>
        </div>
    )
}