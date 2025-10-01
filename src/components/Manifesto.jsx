import { Link } from 'react-router-dom'
import './Manifesto.css'

function Manifesto() {
  return (
    <div className="manifesto-page">
      <div className="manifesto-container">
        <Link to="/nauticallabs" className="back-link">
          <span>←</span> Back to Nautical Labs
        </Link>
        
        <div className="manifesto-content">
          <h1 className="manifesto-title">Our Manifesto</h1>
          <div className="manifesto-body">
            <p>
              As a student at UNCC interested in Research & Development, I had incredibly high expectations for what I was expecting to see. Breakthrough after breakthrough, innovation at a sky-high level as if it were a college-wide science fair, but that's not what I particularly saw. I saw incredible publications from professors and PhD students focused on deep, rigorous analysis. This work is essential for pushing science forward by improving and extending existing ideas. I realized, however, that there was a separate, unfilled space for a different kind of work: exploratory R&D that focuses on branching out in entirely new directions.
            </p>

            <p>
              This is not about replacing deep research, but complementing it with disruptive, high-risk, creative projects.
            </p>

            <p>
              This focus on deep, rigorous work is understandable. Current researchers have other priorities to worry about. Whether the issues are personal, financial, or social, the researcher must somehow find time to produce something on paper. The structure of formal academic research is rightly optimized for rigor, validation, and incremental progress, isn't always suited for the rapid, fail-forward nature of purely exploratory work. This is where students can fill a vital gap.
            </p>

            <p>
              As students, we have a unique freedom to pursue ambitious, interdisciplinary projects with passion and agility. In addition to this structure, interdisciplinary collaboration will be the default, balancing deep specialization from traditional research with broad exploration between fields. Our goal is to create teams where a computer scientist, an artist, a philosopher, and an engineer can tackle a problem from every angle.
            </p>

            <p>
              The new structure will be a new student organization called Nautical Labs where students can have a space to work on ambitious and impactful projects thats powered by their creativity, passion, and optimism for a better world.
            </p>

            <p>
              The mission is to unite people from many disciplines and fields who dream and do to build the future that we're promised. Contribute good and intentional additions to a world that we all live in.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manifesto
