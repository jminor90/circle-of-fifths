// import data from '../assets/data/data.json'
// import scaleBuilder from '../utils/scaleBuilder'


// export default function C_Page() {




//   console.log(data)

//   const isSharp = data.major[0].isSharp
//   const isFlat = data.major[0].isFlat
//   let isAcc;

//   console.log(isSharp)
//   console.log(isFlat)

//   if (isSharp === true) {
//     isAcc = "# Sharp"
//   } else if (isFlat === true) {
//     isAcc = "b Flat"
//   } else {
//     isAcc = "All Natural Baby"
//   }

//   console.log(isAcc)

//   let key = data.major[0].key
//   let accidentals = data.major[0].accidentals

//   scaleBuilder(key, accidentals)

//   return (
//     <>
//       <h3>C Page!</h3>
//       <p>Key: {data.major[0].key}</p>
//       <p>Number of Accidentals: {data.major[0].accidentals}</p>
//       <p>Accidentals: {isAcc}</p>
//       <p>Relative Minor: {data.major[0].relativeMinor}</p>
//     </>
//   )
// }