import data from '../assets/data/data.json'
import scaleBuilder from '../utils/scaleBuilder'

export default function EMajor() {
  let key = data.major[4].key
  let accidentals = data.major[4].accidentals



  return (
    <>
      <h3>E Major Page!</h3>
      <p>Scale: {scaleBuilder(key, accidentals)}</p>
      <p>Relative Minor: {data.major[4].relativeMinor}</p>
    </>
  )
}