import PageSlide from "./Slideshow";
import sale from "../images/sale.gif";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
function IndexPage() {
    const [list, setList] = useState([]);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        fetch(`/data/home_watches.json`)
            .then(response => response.json())
            .then(data => { setList(data.home_watches) });
    }, []);

    return (
        <>
            <div className="row">
                <PageSlide />
            </div>
            <div className="row">
                <img src={sale} width="100%" className="rounded" />
            </div>
            <div className="row">
                <div className="card-deck">
                    {list.map(item =>
                        <div className="col-md-4 d-flex">
                            <div className="card m-3 border border-dark">
                                <div className="card-header bg-white">
                                    <Link to='/single'><img className='card-img-top zoom' src={item.image} height="100%" width="100%" /></Link>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title zoom"><strong><Link to='/single' style={{ color: "#FFDB58" }}>{item.name}</Link></strong></h4>
                                    <h5 className="card-text"><strong>Price :</strong><del> {item.price}$ </del>&nbsp;<strong style={{ color: "white" }}>{item.price - (item.price * 20 / 100)} $</strong></h5>
                                    <p className="text-warning">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </p>
                                    <i><p className="card-subtitle">???????c ch??? t??c t??? <strong>{item.glass}</strong> v???i ???????ng k??nh m???t <strong>{item.dial}</strong> v???i ???????ng k??nh ph??? <strong>
                                        {item.steps}</strong>. S???n ph???m <strong>{item.name}</strong> s??? ???????c t???ng g??i b???o h??nh <strong>{item.warrant}
                                        </strong> cho m???i s???n ph???m.</p></i>
                                </div>
                                <div className="card-footer text-muted border-0">
                                    <Link to='/cart'><button type="button" className="btn btn-info"><i className="fas fa-credit-card"></i> Mua ngay</button></Link>&nbsp;
                                    <button type="button" className="btn btn-warning" onClick={() => { alert('Item added to cart'); }}><i className="fas fa-cart-arrow-down"></i> Th??m v??o gi???</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );

}
export default IndexPage;