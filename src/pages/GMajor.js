import data from '../assets/data/data.json'
import scaleBuilder from '../utils/scaleBuilder'

export default function GMajor() {
  let key = data.major[1].key
  let accidentals = data.major[1].accidentals



  return (
    <>
      <h3>G Major Page!</h3>
      <p>Scale: {scaleBuilder(key, accidentals)}</p>
      <p>Relative Minor: {data.major[1].relativeMinor}</p>
    </>
  )
}