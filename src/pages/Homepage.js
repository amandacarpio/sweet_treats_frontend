import { Link } from "react-router-dom";
import "../styles.scss"

const Homepage = (props) => {
    return <>
    <div style={{textAlign: "center"}}>
    <h3 className="homeH3" style={{margin: 15}}>welcome to...</h3>
    <h1 className="homeH1" style={{margin: 0}}>Sweet Treats</h1>
    <h3 className="homeH3">you tell us your craving, we make the dessert</h3>
    <img src="https://blueskyathome.com/wp-content/uploads/2022/11/Thanksgiving-desserts-feature.jpeg" alt="" className="homeImg"></img>
    </div>
    <div className="homeDiv">
    <Link to="/treat/new">
    <button className="homeButton">bake my dessert</button>
    </Link>
    </div>
    </>;
};
export default Homepage;