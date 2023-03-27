import scaleBuilder from "../utils/scaleBuilder"
export default function ScaleView(props) {

  return (
    <>
      <p>Key: {props.Key}</p>
      <p># of Accidentals: {props.accidentals}</p>
      <p>Scale:{scaleBuilder(props.Key, props.accidentals, props.accExpr)}</p>
      <p></p>
    </>
  )
}