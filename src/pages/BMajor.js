import data from '../assets/data/data.json'
import scaleBuilder from '../utils/scaleBuilder'

export default function BMajor() {
  let key = data.major[5].key
  let accidentals = data.major[5].accidentals



  return (
    <>
      <h3>B Major Page!</h3>
      <p>Scale: {scaleBuilder(key, accidentals)}</p>
      <p>Relative Minor: {data.major[5].relativeMinor}</p>
    </>
  )
}