import data from '../assets/data/data.json'
import scaleBuilder from '../utils/scaleBuilder'

export default function MajorScaleView(props) {
  let val = props.val
  let i = data.major.findIndex(function(item,i) {
    return item.key === val
  })
  console.log(`The Index is `+i)

  let key = data.major[i].key
  let accidentals = data.major[i].accidentals
  let accExpr = data.major[i].accExpr
  let relative = data.major[i].relativeMinor

  return (
    <>
      <h3>{key} Major Page!</h3>
      <p>Key: {key}</p>
      <p># of Accidentals: {accidentals}</p>
      <p>Scale: {scaleBuilder(key, accidentals, accExpr)}</p>
      <p>Relative Minor: {relative}</p>
    </>

  )
}