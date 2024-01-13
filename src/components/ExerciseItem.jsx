// import Buttons from "./Buttons"
// export default function ExerciseItem({ title }) {
//     // have state here
//     // use setState later to set the state so it persists
//     return (
//         <div className="elementWrap">
//             <h2>{title}</h2>
//             <div className="buttons">
//                 <div className="divReps">
//                     <h3>Reps</h3>
//                     <Buttons initialValue={"0"} />
//                 </div>
//                 <div className="divWeights">
//                     <h3>Weights</h3>
//                     <Buttons initialValue={"0"} />
//                 </div>
//             </div>
//         </div>
//     )
// }


import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";

const ExerciseItem = ({ title }) => {
  const [repsValue, setRepsValue] = useState("0");
  const [weightsValue, setWeightsValue] = useState("0");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Set initial values when the component mounts
    setRepsValue("0");
    setWeightsValue("0");
  }, [title]);

  const handleRepsChange = (newValue) => {
    if (!isEditing) {
      setRepsValue(newValue);
    }
  };

  const handleWeightsChange = (newValue) => {
    if (!isEditing) {
      setWeightsValue(newValue);
    }
  };

  const handleEditSaveSwitch = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="elementWrap" data-title={title}>
      <h2>{title}</h2>
      <div className="buttons">
        <div className="divReps">
          <h3>Reps</h3>
          <Buttons initialValue={repsValue} onValueChange={handleRepsChange} />
        </div>
        <div className="divWeights">
          <h3>Weights</h3>
          <Buttons initialValue={weightsValue} onValueChange={handleWeightsChange} />
        </div>
      </div>
      <div className="editButton">
        <button onClick={handleEditSaveSwitch}>{isEditing ? "Save" : "Edit"}</button>
      </div>
    </div>
  );
};

export default React.memo(ExerciseItem);