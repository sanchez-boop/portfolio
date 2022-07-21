import "./index.scss"
import Computer from '../../assets/images/pngwing.com.png'
import Loader from "react-loaders"

const Projects = () => {

    return (
        <>
        <div className="container project-page">
            <div className="computer">
                <img src={Computer} alt="computer" />
            </div>
            <div className="text-zone">
                <h1>Projects:</h1>
                <p>During my time at UCF I have been able to work on lots of projects that have provided me with an arsenal of skills for every job. </p> 
                <div/>
                <pre>This Website! 		    &nbsp;&nbsp;&nbsp;&nbsp;         June 2022</pre>
                <p class="shifted">
                    <ul>
                        <li>Used React to create a portfolio website from scratch</li>
                        <li>Used as an opportunity to gain experience on working on front-end</li>
                    </ul>
                </p>
                <pre>Student Event Manager 		        March-April 2022</pre>
                <p class="shifted">
                    <ul>
                        <li>Used VueJS, NodeJS, ExpressJS, and MySQL to create a web app that keeps track of different events at universities</li>
                        <li>Developed the backend and integrated Google Maps APIs to create a more user-friendly experience</li>
                    </ul>
                </p>
                <pre>Bike Share Rental System		      September 2021- December 2021</pre>
                <p class="shifted">
                    <ul>
                        <li>Worked with a MERN (MongoDB, Express, React, NodeJS) stack to develop a system that keeps track of both rental and repair inventory at a bike shop</li>
                        <li>Used input from coworkers to create a system tailored to fit our needs and increase efficiency by 75% in the workplace</li>
                    </ul>
                </p>
                <pre>Cool Contacts		        August-September 2021</pre>
                <p class="shifted">
                    <ul>
                        <li>Used a LAMP (Linux, Apache, MySQL, PHP) stack to create a contact manager that performs CRUD operations</li>
                        <li>Worked with a team to design and develop website, using technologies such as Postman, Swagger, and GitHub</li>
                    </ul>
                </p>
                


            </div>

        </div>
        <Loader type="ball-zig-zag"/>
        </>
    )
}

export default Projects