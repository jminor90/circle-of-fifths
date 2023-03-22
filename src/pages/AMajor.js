import data from '../assets/data/data.json'
import scaleBuilder from '../utils/scaleBuilder'

export default function AMajor() {
  let key = data.major[3].key
  let accidentals = data.major[3].accidentals



  return (
    <>
      <h3>A Major Page!</h3>
      <p>Scale: {scaleBuilder(key, accidentals)}</p>
      <p>Relative Minor: {data.major[3].relativeMinor}</p>
    </>
  )
}