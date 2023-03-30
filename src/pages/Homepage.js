import './Homepage.css'
import {Link} from 'react-router-dom';

export default function Homepage() {
  // console.log("You are a bold one")
  // console.log(data)

  return (
    <>
      <h2>Welcome!</h2>
      <div>Choose a Key</div>
      <div class="all-container">

        <div class="major-container">
          <Link to="/AMajor"><div id="Major1" class="major-item">A</div></Link>
          <Link to="/EMajor"><div id="Major2" class="major-item">E</div></Link>
          <Link to="/BMajor"><div id="Major3" class="major-item">B</div></Link>
          <Link to="/FsMajor"><div id="Major4" class="major-item">F#</div></Link>
          <Link to="/DfMajor"><div id="Major5" class="major-item">Db</div></Link>
          <Link to="/AfMajor"><div id="Major6" class="major-item">Ab</div></Link>
          <Link to="/EfMajor"><div id="Major7" class="major-item">Eb</div></Link>
          <Link to="/BfMajor"><div id="Major8" class="major-item">Bb</div></Link>
          <Link to="/FMajor"><div id="Major9" class="major-item">F</div></Link>

          <Link to="/CMajor"><div id="Major10" class="major-item">C</div></Link>
          {/* <a href="/circle-of-fifths/CMajor"><div id="Major10" class="major-item">C</div></a> */}


          <Link to="/GMajor"><div id="Major11" class="major-item">G</div></Link>
          {/* <a href="/GMajor"><div id="Major11" class="major-item">G</div></a> */}

          <Link to="/DMajor"><div id="Major12" class="major-item">D</div></Link>
          <div id="Major13" class="major-item">Major</div>
        </div>


        <div class="minor-container">
          <Link to="/FsMinor"><div id="Minor1" class="minor-item">f#</div></Link>
          <Link to="/CsMinor"><div id="Minor2" class="minor-item">c#</div></Link>
          <Link to="/GsMinor"><div id="Minor3" class="minor-item">g#</div></Link>
          <Link to="/DsMinor"><div id="Minor4" class="minor-item">d#</div></Link>
          <Link to="/BfMinor"><div id="Minor5" class="minor-item">bb</div></Link>
          <Link to="/FMinor"><div id="Minor6" class="minor-item">f</div></Link>
          <Link to="/CMinor"><div id="Minor7" class="minor-item">c</div></Link>
          <Link to="/GMinor"><div id="Minor8" class="minor-item">g</div></Link>
          <Link to="/DMinor"><div id="Minor9" class="minor-item">d</div></Link>
          <Link to="/AMinor"><div id="Minor10" class="minor-item">a</div></Link>
          <Link to="/EMinor"><div id="Minor11" class="minor-item">e</div></Link>
          <Link to="/BMinor"><div id="Minor12" class="minor-item">b</div></Link>
          <div id="Minor13" class="minor-item">minor</div>
        </div>

      </div>
    </>
  )
}