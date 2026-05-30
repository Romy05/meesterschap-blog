
function App() {

  return (
      <>
      <nav>
        <a href="#" aria-label="Homepagina" className="nav-logo">
          R
          <svg className="glasses" viewBox="-1 -1 37 18" width="38" height="16" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <circle cx="27" cy="8" r="7.75" fill="white" stroke="#7E7935" stroke-width="0.5"/>
            <circle cx="8" cy="8" r="7.75" fill="white" stroke="#7E7935" stroke-width="0.5"/>
            <path d="M15.5 7.5H19.5" stroke="#7E7935"/>

            <circle className="iris" data-base-cx="8" data-base-cy="8" cx="8" cy="8" r="3" fill="#718AF6"/>
            <circle className="iris" data-base-cx="8" data-base-cy="8" cx="8" cy="8" r="1.5" fill="black"/>

            <circle className="iris" data-base-cx="27" data-base-cy="8" cx="27" cy="8" r="3" fill="#718AF6"/>
            <circle className="iris" data-base-cx="27" data-base-cy="8" cx="27" cy="8" r="1.5" fill="black"/>
          </svg>
          m's Blog
        </a>
        <ul>
          <li className="subject">
            <button lang="en" popoverTarget="weekly-nerds-popover">Weekly Nerds</button>
            <ul popover="" id="weekly-nerds-popover">
              <li><a className="nav-item" href="weekly-nerds/index.html">Alle <span lang="en">Weekly Nerds</span></a>
              </li>
              <li><a className="nav-item" href="weekly-nerds/johann.html">Johann</a></li>
              <li><a className="nav-item" href="weekly-nerds/kilian.html">Kilian</a></li>
              <li><a className="nav-item" href="weekly-nerds/nils.html">Nils</a></li>
              <li><a className="nav-item" href="weekly-nerds/ppk.html">Peter Paul Koch</a></li>
              <li><a className="nav-item" href="weekly-nerds/rosa.html">Rosa</a></li>
              <li><a className="nav-item" href="weekly-nerds/sanne.html">Sanne</a></li>
              <li><a className="nav-item" href="weekly-nerds/yolijn-robbert.html">Yolijn &amp; Robbert</a></li>
              <li><a className="nav-item" href="../weekly-nerds/marleen.html">Marleen</a></li>
            </ul>
          </li>
          <li className="subject">
            <button popoverTarget="subjects-popover">Vakken</button>
            <ul popover="" id="subjects-popover">
              <li><a className="nav-item" href="vakken/index.html">Alle Vakken</a></li>
              <li><a className="nav-item" href="vakken/bt.html">Browser Tech</a></li>
              <li><a className="nav-item" href="vakken/css.html">CSS To The Rescue</a></li>
              <li><a className="nav-item" href="vakken/hcd.html">Human Centered Design</a></li>
              <li><a className="nav-item" href="vakken/api.html">API</a></li>
            </ul>
          </li>
          <li className="subject">
            <button popoverTarget="meesterschap-popover">Meesterschap</button>
            <ul popover="" id="meesterschap-popover">
              <li><a className="nav-item" href="meesterschap/index.html">Meesterschap</a></li>
              <li><a className="nav-item" href="meesterschap/sprint-0.html">Sprint 0</a></li>
              <li><a className="nav-item" href="meesterschap/hackathon.html">Hackathon</a></li>
              <li><a className="nav-item" href="meesterschap/meesterproef.html">Meesterproef</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <h1 className="large-header">
        Welkom op mijn blog
      </h1>
    </>
  )
}

export default App
