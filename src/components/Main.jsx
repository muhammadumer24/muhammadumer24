import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ReactComponent as FiverrIcon } from '../assets/images/fiverr.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpwork } from '@fortawesome/free-brands-svg-icons';

import me from '../assets/images/me.png'

import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={me} alt="Avatar" id='my-image' />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/mrumerf" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/mrumerf/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://fiverr.com/muhammadyazi" target="_blank" rel="noreferrer"><FiverrIcon /></a>
            <a href="https://upwork.com/freelancers/mrumer" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faUpwork} /></a>
          </div>
          <h1>Muhammad Umer</h1>
          <p>Full Stack | Chrome Extension | SaaS Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/mrumerf" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/mrumerf/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://fiverr.com/muhammadyazi" target="_blank" rel="noreferrer"><FiverrIcon /></a>
            <a href="https://upwork.com/freelancers/mrumer" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faUpwork} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;