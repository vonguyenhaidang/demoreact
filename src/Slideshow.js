import './Layout.css';
import { useEffect } from 'react';
import pageslide from './../images/slide01.jpg';
import pageslide1 from './../images/slide02.jpg';
import pageslide2 from './../images/slide03.jpg';
import pageslide3 from './../images/slide04.jpg';
import anipage from './../images/albertoclock.jpg';
function PageSlide() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <>
            <div>
                <div id="slide" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#slide" data-slide-to="1" ></li>
                        <li data-target="#slide" data-slide-to="2"></li>
                        <li data-target="#slide" data-slide-to="3"></li>
                        <li data-target="#slide" data-slide-to="4"></li>
                        <li data-target="#slide" data-slide-to="5" className="active"></li>
                    </ul>
                    <div className="carousel-inner rounded">
                        <div className="carousel-item">
                            <img src={pageslide} />
                        </div>
                        <div className="carousel-item">
                            <img src={pageslide1} />
                        </div>
                        <div className="carousel-item">
                            <img src={pageslide2} />
                        </div>
                        <div className="carousel-item">
                            <img src={pageslide3} />
                        </div>
                        <div className="carousel-item active">
                            <img src={anipage} width="100%" height="100%" />
                        </div>
                        <a className="carousel-control-prev" href="#slide" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#slide" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default PageSlide;