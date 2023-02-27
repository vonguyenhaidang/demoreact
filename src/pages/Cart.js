import './Layout.css';
import userimage from '../images/user.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
function CartPage() {
    const [list, setList] = useState([]);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        fetch(`/data/home_watches.json`)
            .then(response => response.json())
            .then(data => { setList(data.home_watches) });
    }, []);
    return (
        <>
            <div className="container mt-5 p-3 border border-bottom rounded cart bg-white">
                <div className="row no-gutters">
                    <div className="col-md-8">
                        <div className="product-details mr-2">
                            <div className="d-flex flex-row align-items-center"><i className="fa fa-long-arrow-left"></i><span className="ml-2"><Link to="/">Continue Shopping</Link></span></div>
                            <hr />
                            <h6 className="mb-0">Shopping cart</h6>
                            {list.map(item =>
                                <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                                    <div className="d-flex flex-row"><img className="rounded" src={item.image} width="50px" height="50px" />
                                        <div className="ml-2"><span className="font-weight-bold d-block">{item.name}</span><span className="spec">{item.glass}</span></div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center"><span className="d-block">1</span><span className="d-block ml-5 font-weight-bold">${item.price}</span>&nbsp;&nbsp;
                                    <button className='btn btn-outline-success' onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.onCancel(item) }}><i className="fa fa-trash-o"></i></button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <br />
                        <br />
                        <div className="payment-info">
                            <div className="d-flex justify-content-between align-items-center"><span>Payment Information</span><img className="rounded" src={userimage} width="30" /></div><span className="type d-block mt-3 mb-1">Card type</span><label className="radio"> <input type="radio" name="card" value="payment" checked /> <span><img width="30" src="https://img.icons8.com/color/48/000000/mastercard.png" /></span> </label>

                            <label className="radio"> <input type="radio" name="card" value="payment" /> <span><img width="30" src="https://img.icons8.com/officel/48/000000/visa.png" /></span> </label>

                            <label className="radio"> <input type="radio" name="card" value="payment" /> <span><img width="30" src="https://img.icons8.com/ultraviolet/48/000000/amex.png" /></span> </label>


                            <label className="radio"> <input type="radio" name="card" value="payment" /> <span><img width="30" src="https://img.icons8.com/officel/48/000000/paypal.png" /></span> </label>
                            <div><label className="credit-card-label">Name on card</label><input type="text" className="form-control credit-inputs" placeholder="Name" /></div>
                            <div><label className="credit-card-label">Card number</label><input type="text" className="form-control credit-inputs" placeholder="0000 0000 0000 0000" /></div>
                            <div className="row">
                                <div className="col-md-6"><label className="credit-card-label">Date</label><input type="text" className="form-control credit-inputs" placeholder="12/24" /></div>
                                <div className="col-md-6"><label className="credit-card-label">CVV</label><input type="text" className="form-control credit-inputs" placeholder="342" /></div>
                            </div>
                            <hr className="line" />
                            <div className="d-flex justify-content-between information"><span>Subtotal</span><span>$3000.00</span></div>
                            <div className="d-flex justify-content-between information"><span>Shipping</span><span>$20.00</span></div>
                            <div className="d-flex justify-content-between information"><span>Total(Incl. taxes)</span><span>$3020.00</span></div>
                            <button className="btn btn-primary btn-block d-flex justify-content-between mt-3" type="button" onClick={() => { alert('Thanks for shopping with us'); }}><span>$3.464.00</span><span>Checkout<i className="fa fa-long-arrow-right ml-1"></i></span></button></div>
                    </div>
                </div>
            </div>
            <br />
        </>
    );

}
export default CartPage;