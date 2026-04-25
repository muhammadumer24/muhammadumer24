import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import fiverrIcon from '../assets/images/fiverr.svg';
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
            <a href="https://fiverr.com/muhammadyazi" target="_blank" rel="noreferrer"><img src={fiverrIcon} alt='Fiverr' /></a>
          </div>
          <h1>Muhammad Umer</h1>
          <p>Full Stack Developer | <strong>MERN Stack</strong></p>

          <div className="mobile_social_icons">
            <a href="https://github.com/mrumerf" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/mrumerf/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;