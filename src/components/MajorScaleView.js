import data from '../assets/data/data.json'
import scaleBuilder from '../utils/scaleBuilder'
import scalePlayer from '../utils/scalePlayer'
import * as Tone from 'tone'

export default function MajorScaleView(props) {
  let val = props.val
  let i = data.major.findIndex(function(item,i) {
    return item.key === val
  })
  // console.log(`The Index is `+i)

  let key = data.major[i].key
  let accidentals = data.major[i].accidentals
  let accExpr = data.major[i].accExpr
  let relative = data.major[i].relativeMinor



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
      <h3>{key} Major Page!</h3>
      <p>Key: {key}</p>
      <p>Relative Minor: {relative}</p>
      <p># of Accidentals: {accidentals}</p>
      <p>Scale: {scale}</p>

      <button onClick={playEvent} id="play-btn">Play Scale</button>
      <button onClick={stopEvent}id="stop-btn">Stop</button>

    </>

  )
}