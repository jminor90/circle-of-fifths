export default function scaleBuilder (keyVar, accNum, accExpr) {
  // Takes in the Key and removes # or b from it so we can build a scale
  let key = keyVar;
  // .replace(/[^A-Z\.]+/g, "") filters out anything that isn't a letter
  key = key.replace(/[^A-Z\.]+/g, "");

  //All scales are alphabetical; this loop will start building a scale starting with the Key given
  //and loop around to give 7 notes in scale order
  const list = ["A", "B", "C", "D", "E", "F", "G"];
  let i = list.indexOf(key);
  let newList = [];
  for (let counter = 0; counter < 7; ++counter) {
    newList.push(list[i]);
    i = (i + 1) % list.length;
  }

  //AccidentalExpression 1 = Sharp, 2 = Flat, 0 = Natural
  switch (accExpr) {
    
    // Sharps
    case 1:
      // Order of sharps will always remain the same, this takes in how many sharps given for that scale
      let sharpCount = accNum

      const sharpsOrder = ["F#", "C#", "G#", "D#", "A#", "E#", "B#"]
      // which notes are sharp in that scale; ex: 1 = [F#]; 2 = [F#, C#]
      let sharpResult = sharpsOrder.slice(0,sharpCount)

      // replaces any notes in scale with proper notes with sharps; ex F = F#, C = C#
      for (let i=0; i < sharpCount; i++) {
        newList.splice(newList.indexOf(sharpResult[i].replace(/[^A-Z\.]+/g, "")),1,sharpResult[i])
      }

      return(
        newList
      )
    
    // Flats
    case 2:
      let flatCount = accNum
      
      const flatsOrder = ["Bb","Eb","Ab","Db","Gb","Cb","Fb"]
      
      let flatResult = flatsOrder.slice(0,flatCount)
      
      for (let i=0; i < flatCount; i++) {
        newList.splice(newList.indexOf(flatResult[i].replace(/[^A-Z\.]+/g, "")),1,flatResult[i])
      }

      return(
        newList
      )
    
    // All Natural
    default:
      return(
        newList
      )
      
  }

}

// scaleBuilder("F", 1, 2)