  export default function whichColor(redArray, yellowArray, greenArray, students){

       const randomNumber = Math.floor((Math.random() * 100) + 1)

       if (randomNumber < 50 && redArray.length > 0) {
         const selected = redArray

       } else if (randomNumber < 83 && yellowArray.length > 0) {
         const selected = yellowArray

       } else if (randomNumber >= 83 && greenArray.length > 0){
         const selected = greenArray

       } else {
         const selected = students
     }
  }
