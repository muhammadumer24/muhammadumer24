import mock1 from '../assets/images/mock1.png';
import mock2 from '../assets/images/mock2.png';
import mock3 from '../assets/images/mock3.png';
import mock4 from '../assets/images/mock4.png';
import '../assets/styles/Project.scss';

function Project() {

    const projects = [
        {
            name: "Amazon Web Extension",
            desc: "Developed a SaaS project that helps amazon sellers to have detailed insights across the whole Amazon market.",
            link: 'https://geniusdigger.com',
            img: mock1
        },
        {
            name: "Recruiter OutreachPro",
            desc: "A web extension that automates and optimizes the outreach process for recruiters on LinkedIn.",
            link: 'https://chromewebstore.google.com/detail/recruiter-outreachpro/impobihlenneobleihjnfpjjgckmcbeg',
            img: mock2
        },
        {
            name: "StyleSnap",
            desc: "Fetches images, colors, fonts and other style elements from the given page.",
            link: 'https://chromewebstore.google.com/detail/stylesnap/bppfidflicaojmhmglppdpjhbchilode',
            img: mock3
        },
        {
            name: "Shortcut101",
            desc: "Developed a SaaS extension that provides unlimited shortcuts on home page with OAuth and paypal integration.",
            link: 'https://chromewebstore.google.com/detail/shortcut101/incomfkccbfmcakjjepkfmichohegakp',
            img: mock4
        }

    ]

    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project" key={project.name}>
                        <a href={project.link} target="_blank" rel="noreferrer"><img src={project.img} className="zoom" alt={project.name} /></a>
                        <a href={project.link} target="_blank" rel="noreferrer"><h2>{project.name}</h2></a>
                        <p>{project.desc}</p>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;