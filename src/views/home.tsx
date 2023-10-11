import "../style/home.scss";
import { Link } from "react-router-dom";
// import { useRef } from "react";
/**
 * This function renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
const Home = () => {
    const title = "welcome to vagmr blog";

    // const bg = useRef(null);
    //绑定dom元素
    const icon = "https://api.iconify.design/cryptocurrency-color:adx.svg";
    return (
        <>
            <nav className="navbar">
                <h1>{title}</h1>
                <img src={icon} />
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/create" style={{ color: "white", backgroundColor: "#f1356d", borderRadius: "8px" }}>Create Blog</Link>
                </div>
            </nav>
        </>)
}
export default Home;