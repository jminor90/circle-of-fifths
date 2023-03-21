
function scaleBuilder (keyVar, accNum) {
  // Takes in the Key and removes # or b from it so we can build a scale
  var key = keyVar;
  key = key.replace(/[^A-Z\.]+/g, "");

  console.log(key)

  //All scales are alphabetical; this loop will start building a scale starting with the Key given and loop around to give 7 notes in scale order
  const list = ["A", "B", "C", "D", "E", "F", "G"];
  let i = list.indexOf(key);
  newList = [];
  for (let counter = 0; counter < 7; ++counter) {
    newList.push(list[i]);
    // console.log(`${list[i]}`);
    i = (i + 1) % list.length;
  }
  console.log("Hey")
  console.log(newList)

  // Order of sharps will always remain the same, this takes in how many sharps given for that scale
  let sharpCount = accNum
  // let sharpUsed = [];
  const sharpsOrder = ["F#", "C#", "G#", "D#", "A#", "E#", "B#"]
  // which notes are sharp in that scale; ex: 1 = F#, 2 = F#, C#
  let result = sharpsOrder.slice(0,sharpCount)

  // replaces any notes in scale with proper notes with sharps; ex F = F#, C = C#
  for (let i=0; i < sharpCount; i++) {
    newList.splice(newList.indexOf(result[i].replace(/[^A-Z\.]+/g, "")),1,result[i])
  }
  
  console.log(result)
  console.log(newList)
}

scaleBuilder("G", 1)