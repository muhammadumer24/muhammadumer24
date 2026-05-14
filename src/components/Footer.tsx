import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpwork } from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as FiverrIcon } from '../assets/images/fiverr.svg';

function Footer() {
  return (
    <footer>
      <div className='footer-icons'>
        <a href="https://github.com/mrumerf" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/mrumerf/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
        <a href="https://fiverr.com/muhammadyazi" target="_blank" rel="noreferrer"><FiverrIcon /></a>
        <a href="https://upwork.com/freelancers/mrumer" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faUpwork} /></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/mrumerf/mrumerf" target="_blank" rel="noreferrer">Muhammad Umer</a> with 💜</p>
    </footer>
  );
}

export default Footer;