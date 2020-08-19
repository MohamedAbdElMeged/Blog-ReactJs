import React, { Component } from 'react'
import { ExternalLink } from 'react-external-link';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import Tech from './../../images/about/tech.jpg'
import UI from './../../images/about/ui.jpg'
import Founder from './../../images/about/founder.jpg'




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export class about extends Component {
    render() {
        return (
            <React.Fragment>

            
<div className="bg-light">
  <div className="container py-5">
    <div className="row h-100 align-items-center py-5">
      <div className="col-lg-6">
        <h1 className="display-4">What is Blog?</h1>
        <p className="lead text-muted mb-0">Follow Us To Know More About Our Newely Features </p>
      </div>
      <div className="col-lg-6 d-none d-lg-block"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png" alt="" className="img-fluid"/></div>
    </div>
  </div>
</div>

<div className="bg-light py-5">
  <div className="container py-5">
    <div className="row mb-4">
      <div className="col-lg-5">
        <h2 className="display-4 font-weight-light">Our Team</h2>
        <p className="font-italic text-muted">They Did Their Best .. Thank You! </p>
      </div>
    </div>

    <div className="row text-center">
      <div className="col-xl-4 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src={Founder} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Mohamed Abd El-Meged</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><ExternalLink href="https://facebook.com/3abmeged"><FontAwesomeIcon icon={faFacebookF} /></ExternalLink></li>
            <li className="list-inline-item"> <ExternalLink href="https://twitter.com/3abmeged"><FontAwesomeIcon icon={faTwitter} /></ExternalLink></li>
            <li className="list-inline-item"><ExternalLink href="https://instagram.com/3abmeged"><FontAwesomeIcon icon={faInstagram} /></ExternalLink></li>
            <li className="list-inline-item"><ExternalLink href="https://www.linkedin.com/in/mabdelmeged99/"><FontAwesomeIcon icon={faLinkedin} /></ExternalLink></li>
          </ul>
        </div>
      </div>

      <div className="col-xl-4 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src={Tech} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Mego El Gamd</h5><span className="small text-uppercase text-muted">Technical Lead</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><ExternalLink href="https://facebook.com/3abmeged"><FontAwesomeIcon icon={faFacebookF} /></ExternalLink></li>
            <li className="list-inline-item"> <ExternalLink href="https://twitter.com/3abmeged"><FontAwesomeIcon icon={faTwitter} /></ExternalLink></li>
            <li className="list-inline-item"><ExternalLink href="https://instagram.com/3abmeged"><FontAwesomeIcon icon={faInstagram} /></ExternalLink></li>
            <li className="list-inline-item"><ExternalLink href="https://www.linkedin.com/in/mabdelmeged99/"><FontAwesomeIcon icon={faLinkedin} /></ExternalLink></li>
          </ul>
        </div>
      </div>

      <div className="col-xl-4 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src={UI} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Mgamego El Khateer</h5><span className="small text-uppercase text-muted">UI / UX Expert</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><ExternalLink href="https://facebook.com/3abmeged"><FontAwesomeIcon icon={faFacebookF} /></ExternalLink></li>
            <li className="list-inline-item"> <ExternalLink href="https://twitter.com/3abmeged"><FontAwesomeIcon icon={faTwitter} /></ExternalLink></li>
            <li className="list-inline-item"><ExternalLink href="https://instagram.com/3abmeged"><FontAwesomeIcon icon={faInstagram} /></ExternalLink></li>
            <li className="list-inline-item"><ExternalLink href="https://www.linkedin.com/in/mabdelmeged99/"><FontAwesomeIcon icon={faLinkedin} /></ExternalLink></li>
          </ul>
        </div>
      </div>
      
      

    </div>
  </div>
</div>

          </React.Fragment>
        )
    }
}

export default about
