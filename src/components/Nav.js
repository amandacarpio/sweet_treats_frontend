import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="navBar">
        <Link to="">Home</Link>
        <Link to="/treat/about">About Us</Link>
        <Link to="/treat/new">Create Order</Link>
        <Link to="/treats">View Cart</Link>
        </div>
    )
}

export default Nav;