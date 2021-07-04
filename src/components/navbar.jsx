import { Link } from "react-router-dom"; 

const Navbar = (props) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {!props.user && 
                <Link to='/login'>
                    <button className="btn btn-outline-success my-2 my-lg-0" type="submit">Login</button>
                </Link>
            }
            {props.user && 
                <div>
                <Link to='/logout'>
                    <button className="btn btn-outline-success my-2 my-lg-0" type="submit">Logout</button>
                </Link>
                <Link to='/invites'>
                    <button className="btn btn-outline-success my-2 my-lg-0" type="submit">Invites</button>
                </Link>
                </div>
            }
        </nav>
     );
}
 
export default Navbar;