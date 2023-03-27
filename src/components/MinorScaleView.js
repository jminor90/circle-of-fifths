import data from '../assets/data/data.json'
import scaleBuilder from '../utils/scaleBuilder'

export default function MinorScaleView(props) {
  let val = props.val
  let i = data.minor.findIndex(function(item,i) {
    return item.key === val
  })
  console.log(`The Index is `+i)

  let key = data.minor[i].key
  let accidentals = data.minor[i].accidentals
  let accExpr = data.minor[i].accExpr
  let relative = data.minor[i].relativeMinor

  return (
    <>
      <h3>{key} Minor Page!</h3>
      <p>Key: {key}</p>
      <p># of Accidentals: {accidentals}</p>
      <p>Scale: {scaleBuilder(key, accidentals, accExpr)}</p>
      <p>Relative Major: {relative}</p>
    </>

  )
}