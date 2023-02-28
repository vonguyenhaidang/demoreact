import SideBars from "./SideBars";
import women from "../images/women.gif";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
function WomenList() {
    const [list, setList] = useState([]);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        fetch(`/data/women_watches.json`)
            .then(response => response.json())
            .then(data => { setList(data.women_watches) });
    }, []);
    return (
        <>
            <br />
            <div className="row">
                <img src={women} width="100%" className="rounded" alt="" />
            </div>
            <br />
            <div className="row">
                <div className="col-md-3">
                    <SideBars />
                </div>
                <div className="col-md-9">
                    <div className="card-deck">
                        {list.map(item =>
                            <div className="col-md-6 d-flex">
                                <div className="card m-2 border border-dark">
                                    <div className="card-header bg-white">
                                        <Link to='/single'><img className='card-img-top zoom' src={item.image} height="100%" width="100%" alt="" /></Link>
                                    </div>
                                    <div className="card-body" >
                                        <h4 className="card-title zoom"><strong><Link to='/single' style={{ color: "#FFDB58" }}>{item.name}</Link></strong></h4>
                                        <h5 className="card-text"><strong>Price :</strong><del> {item.price}$ </del>&nbsp;<strong style={{ color: "white" }}>{item.price - (item.price * 20 / 100)} $</strong></h5>
                                        <p className="text-warning">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star-half" aria-hidden="true"></i>
                                        </p>
                                        <i><p className="card-subtitle">Make with <strong>{item.glass}</strong> with the dial of <strong>{item.dial}</strong> and the steps of <strong>
                                            {item.steps}</strong> The <strong>{item.name}</strong> will provide <strong>{item.warrant}
                                            </strong> of international Warranty.</p></i>
                                    </div>
                                    <div className="card-footer text-muted border-0">
                                        <Link to='/cart'><button type="button" className="btn btn-info"><i className="fas fa-credit-card"></i> Buy </button></Link>&nbsp;
                                        <button type="button" className="btn btn-warning" onClick={() => { alert('Item added to cart'); }}><i className="fas fa-cart-arrow-down"></i> Add</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );

}
export default WomenList;