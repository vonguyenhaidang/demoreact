import pagenotfound from './../images/404error.gif';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';
function PageNotFound() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <>
            <div className="page_not_found">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page_404">
                            <img src={pagenotfound} />

                            <div className="not_found">
                                <p>Sorry! an error has occured, Requested page not found!</p>
                                <Link to="/">Back to Home</Link>
                                <Link to="/support">Support</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageNotFound;