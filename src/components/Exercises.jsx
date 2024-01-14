// import React from "react";
// import ExerciseItem from "./ExerciseItem";

// export default function Exercises({ searchText, titles }) {
//   const filteredTitles = searchText.length >=3 ? titles.filter((exerciseItem) =>
//     exerciseItem.title.toLowerCase().includes(searchText.toLowerCase())
//   ) : titles;

//   return (
//     <div className="containerExercises">
//       <div className="divExercises">
//         {filteredTitles.map((exerciseItem) => (
//           <ExerciseItem key={exerciseItem.title} {...exerciseItem} />
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { memo } from "react";
import ExerciseItem from "./ExerciseItem";

const Exercises = ({ searchText, titles }) => {
  console.log("Exercises component rendered");

  const filteredTitles =
    searchText.length >= 3
      ? titles.filter((exerciseItem) =>
          exerciseItem.title.toLowerCase().includes(searchText.toLowerCase())
        )
      : titles;

  return (
    <div className="containerExercises">
      <div className="divExercises">
        {filteredTitles.map((exerciseItem) => (
          <ExerciseItem key={exerciseItem.title} {...exerciseItem} />
        ))}
      </div>
    </div>
  );
};

export default memo(Exercises);
