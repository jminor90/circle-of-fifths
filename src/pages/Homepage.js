import './Homepage.css'

export default function Homepage() {
  // console.log("You are a bold one")
  // console.log(data)

  return (
    <>
      <h2>Welcome!</h2>
      <div>Choose a Key</div>
      <div class="all-container">

        <div class="major-container">
          <a href="/AMajor"><div id="Major1" class="major-item">A</div></a>
          <a href="/EMajor"><div id="Major2" class="major-item">E</div></a>
          <a href="/BMajor"><div id="Major3" class="major-item">B</div></a>
          <a href="/FsMajor"><div id="Major4" class="major-item">F#</div></a>
          <a href="/DfMajor"><div id="Major5" class="major-item">Db</div></a>
          <a href="/AfMajor"><div id="Major6" class="major-item">Ab</div></a>
          <a href="/EfMajor"><div id="Major7" class="major-item">Eb</div></a>
          <a href="/BfMajor"><div id="Major8" class="major-item">Bb</div></a>
          <a href="/FMajor"><div id="Major9" class="major-item">F</div></a>
          <a href="/CMajor"><div id="Major10" class="major-item">C</div></a>
          <a href="/GMajor"><div id="Major11" class="major-item">G</div></a>
          <a href="/DMajor"><div id="Major12" class="major-item">D</div></a>
          <div id="Major13" class="major-item">Major</div>
        </div>


        <div class="minor-container">
          <a href="/FsMinor"><div id="Minor1" class="minor-item">f#</div></a>
          <a href="/CsMinor"><div id="Minor2" class="minor-item">c#</div></a>
          <a href="/GsMinor"><div id="Minor3" class="minor-item">g#</div></a>
          <a href="/DsMinor"><div id="Minor4" class="minor-item">d#</div></a>
          <a href="/BfMinor"><div id="Minor5" class="minor-item">bb</div></a>
          <a href="/FMinor"><div id="Minor6" class="minor-item">f</div></a>
          <a href="/CMinor"><div id="Minor7" class="minor-item">c</div></a>
          <a href="/GMinor"><div id="Minor8" class="minor-item">g</div></a>
          <a href="/DMinor"><div id="Minor9" class="minor-item">d</div></a>
          <a href="/AMinor"><div id="Minor10" class="minor-item">a</div></a>
          <a href="/EMinor"><div id="Minor11" class="minor-item">e</div></a>
          <a href="/BMinor"><div id="Minor12" class="minor-item">b</div></a>
          <div id="Minor13" class="minor-item">minor</div>
        </div>

      </div>
    </>
  )
}