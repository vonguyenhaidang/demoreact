import { Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import './Layout.css';
import pageLogo from '../images/logo1.png';
function Layout() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <>
            <div className='row'>
                <div className='col-md-12 backgrounded '>
                    <nav className="navbar container navbar-expand-lg navbar-light bg-light rounded">
                        <a className="navbar-brand" href="#"><Link to="/"><img src={pageLogo} height="70" width="70" /></Link></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link nav1" to="/">Home<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle nav1" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Products
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to="/products/men" className="dropdown-item nav1" href="#">Men Watches</Link>
                                        <Link to="/products/women" className="dropdown-item nav1" href="#">Women Watches</Link>
                                    </div>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <Link to="/cart"> <button className="btn btn-outline-dark m-1"><i className="fa fa-shopping-cart"></i> 6</button> &nbsp;</Link>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
            <Outlet />
        </>
    );
}
export default Layout;