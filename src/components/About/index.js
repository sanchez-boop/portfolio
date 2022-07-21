import "./index.scss"
import Computer from '../../assets/images/computer-code-icon-22.jpg.png'
import Loader from "react-loaders"

const About = () => {

    return (
        <>
        <div className="container about-page">
            <div className="computer">
                <img src={Computer} alt="computer" />
            </div>
            <div className="text-zone">
                <h1>About Me:</h1>
                <p>I am a Senior at the University of Central Florida in Orlando seeking my Bachelors
                    in Coputer Science. I have been coding since high school and have loved every second of it. Although
                </p>
                <h2>Employment Objective</h2>
                <p>Seeking a challenging position in Software Engineering. Quick to adapt, passion for learning and discovering, and comfortable with new environments.
                </p>
                <h2>Work Experience</h2>
                <pre>UCF Student Union, Orlando, Fl</pre>
                <pre>Bike N’ Gold Technician		        	November 2021-Present</pre>
                <p class="shifted">
                    In addition to Associate duties:
                    <ul>
                        <li>Showed rapid growth and mastery in job duties</li>
                        <li>Maintained and performed service on rental bikes and personal bikes</li>
                        <li>Displayed increased productivity in learning and performing tasks</li>
                        <li>Trained associates and new hires on technician and associate responsibilities</li>
                    </ul>
                </p>
                <pre>Bike N’ Gold Associate			June 2021-November 2021</pre>
                <p class="shifted">
                    <ul>
                        <li>Processed orders and repairs and maintained an orderly workplace</li>
                        <li>Rented university-sponsored bikes to a student body of over 60,000</li>
                        <li>Worked in conjunction with Student Government and UCF police department to improve on-campus bike safety</li>
                    </ul>
                </p>

                <pre>American Express, Phoenix,Az</pre>
                <pre>Software Engineering Intern		        	June-August 2022</pre>
                <p class="shifted">
                    <ul>
                        <li>Worked on the Travel and Lifestyle Services team as a back-end engineer</li>
                        <li>Used Spring Boot to develop a back-end service that keeps track of flight information and its carbon footprint</li>
                        <li>Quickly adapted to new technologies, being able to set up database with CRUD endpoints within the first week</li>
                        <li>Used Agile methodology and CI/CD to produce quality code and consistently make changes</li>
                        <li>Wrote tests to ensure endpoints and code changes were functioning as expected</li>
                    </ul>
                </p>

                <h2>Awards</h2>
                <p>
                    <pre>President's Honor Roll</pre> &nbsp; Fall 2019, Fall 2020)
                    <pre>Dean's list</pre> &nbsp; (Spring 2020, Fall 2021, Spring 2022)
                    <pre>CF Student Union Employee of the Year</pre> &nbsp; (2021-2022)
                </p>

                <h2>Skills and Interests</h2>
                <p>
                    <pre>Technical:</pre> &nbsp; Java, C, Python, MySQL, HTML, PHP
                    <pre>Languages:</pre> &nbsp; Spanish – native, English – native
                    <pre>Skills:</pre> &nbsp; MS-Office, people skills, team player, public speaking, management
                    <pre>Affiliations:</pre> &nbsp; Society of Hispanic Professional Engineers (SHPE)
                    <pre>Activities/Interests:</pre> &nbsp; Rock climbing, Biking, Auto-Racing, 3D printing, Cooking, Movies and TV
                </p>





            </div>

        </div>
        <Loader type="ball-zig-zag"/>
        </>
    )
}

export default About