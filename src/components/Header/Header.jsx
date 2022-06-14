import {Link} from "react-router-dom";

function Header() {
  return (
    <nav>
        <Link to="/">Home</Link> |
        <Link to="/user">User</Link>
    </nav>
  )
}

export default Header