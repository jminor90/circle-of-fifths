import * as Tone from 'tone'

export default function scalePlayer(scale) {

  // found this function here https://www.devbridge.com/articles/tonejs-coding-music-production-guide/
  /*
  The function takes in a scale, and an octave number then transforms it using Array.map.
  First, you get the first note in the octave that exists in the scale (it’ll either be C or a C#) 
  and then append the octave number based on where the note is corresponding to the first note in the octave. 
  Down an octave, if it’s before the first note in the scale or the same octave if it’s after the first note.
  */
  // addOctaveNumbers adds the octave numbers that are needed for ToneJS to play.
  const addOctaveNumbers = (scale, octaveNumber) => scale.map(note => {
    const firstOctaveNoteIndex = scale.indexOf('C') !== -1 ? scale.indexOf('C') : scale.indexOf('C#')
    const noteOctaveNumber = scale.indexOf(note) < firstOctaveNoteIndex ? octaveNumber - 1 : octaveNumber;
    return `${note}${noteOctaveNumber}`
  });
  
  const scaleNumbered = addOctaveNumbers(scale, 4);
  // console.log("Original Scale")
  // console.log(scale)

  if ( scaleNumbered[0] === scaleNumbered[7] ) {
    // .replace(/[^0-9\.]+/g, "") filters out anything that isn't a letter
    let octave = scaleNumbered[0].replace(/[^0-9\.]+/g, "")
    // .replace(/\d+$/, "") removes any trailing numbers so that the Key note and any accidentals aren't affected
    let keyLetter = scaleNumbered[0].replace(/\d+$/, "")

    let upOctave = parseInt(octave) +1
    toString(upOctave)
    let octaveResult = keyLetter + upOctave
    scaleNumbered.splice(7,1)
    scaleNumbered.push(octaveResult)
  }

  toneJS(scaleNumbered)
}

function toneJS(scaleNumbered) {
  console.log(scaleNumbered)
  const vol = new Tone.Volume(-6)
  const synth = new Tone.Synth();
  synth.oscillator.type = 'sine';

  vol.toDestination();
  synth.connect(vol);
  let index = 0;
  Tone.Transport.bpm.value = 60;
  const seq = new Tone.Sequence((time, note) => {
    synth.triggerAttackRelease(note, "4n", time);
  }, scaleNumbered);

  seq.start(0)

  Tone.Transport.start();
}
