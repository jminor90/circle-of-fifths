import data from '../assets/data/data.json'
import scaleBuilder from '../utils/scaleBuilder'

export default function CsMajor() {
  let key = data.major[7].key
  let accidentals = data.major[7].accidentals



  return (
    <>
      <h3>C# Major Page!</h3>
      <p>Scale: {scaleBuilder(key, accidentals)}</p>
      <p>Relative Minor: {data.major[7].relativeMinor}</p>
    </>
  )
}