import { Link } from 'react-router-dom'

const Header = ()=> {
    return(
        <>
        <nav>
          <Link to="/">Go to Home Page</Link>{" | "}
          <Link to="/services">Services</Link>{" | "}
          <Link to="/contact">Contact</Link>
        </nav>
        </>
    )
}
export default Header