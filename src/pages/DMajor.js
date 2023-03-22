import data from '../assets/data/data.json'
import scaleBuilder from '../utils/scaleBuilder'

export default function DMajor() {
  let key = data.major[2].key
  let accidentals = data.major[2].accidentals



  return (
    <>
      <h3>D Major Page!</h3>
      <p>Scale: {scaleBuilder(key, accidentals)}</p>
      <p>Relative Minor: {data.major[2].relativeMinor}</p>
    </>
  )
}