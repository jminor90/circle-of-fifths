import data from '../assets/data/data.json'
import scaleBuilder from '../utils/scaleBuilder'
import scalePlayer from '../utils/scalePlayer'
import * as Tone from 'tone'

export default function MinorScaleView(props) {
  let val = props.val
  let i = data.minor.findIndex(function(item,i) {
    return item.key === val
  })
  // console.log(`The Index is `+i)

  let key = data.minor[i].key
  let accidentals = data.minor[i].accidentals
  let accExpr = data.minor[i].accExpr
  let relative = data.minor[i].relativeMajor

  const scale = scaleBuilder(key, accidentals, accExpr)
  scale.push(scale[0])

  // scalePlayer(scale)
  function playEvent (){
    scalePlayer(scale)
  }

  function stopEvent(){
    Tone.Transport.stop()
  }


  return (
    <>
      <h3>{key} Minor Page!</h3>
      <p>Key: {key}</p>
      <p># of Accidentals: {accidentals}</p>
      <p>Scale: {scale}</p>
      <p>Relative Major: {relative}</p>

      <button onClick={playEvent} id="play-btn">Play Scale</button>
      <button onClick={stopEvent}id="stop-btn">Stop</button>
    </>

  )
}