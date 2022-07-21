import "./index.scss";
import Headshot from '../../assets/images/IMG_5578.jpg'
import Loader from "react-loaders"


const Home = () => {

    return (
<>
        <div className="container home-page">
            <div className="headshot">
                <img src={Headshot} alt="headshot" />
            </div>
            <div className="text-zone">
                <h1>Welcome to my Website!</h1>
                <h2>Look around to learn more about me</h2>
            </div>
        </div>
        <Loader type="ball-zig-zag"/>
        </>
    );
}

export default Home