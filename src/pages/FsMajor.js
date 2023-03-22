import data from '../assets/data/data.json'
import scaleBuilder from '../utils/scaleBuilder'

export default function FsMajor() {
  let key = data.major[6].key
  let accidentals = data.major[6].accidentals



  return (
    <>
      <h3>F# Major Page!</h3>
      <p>Scale: {scaleBuilder(key, accidentals)}</p>
      <p>Relative Minor: {data.major[6].relativeMinor}</p>
    </>
  )
}