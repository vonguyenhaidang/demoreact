import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function ProductSingle() {
    const [list, setList] = useState([]);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        fetch(`/data/single.json`)
            .then(response => response.json())
            .then(data => { setList(data.single_product) });
    }, []);

    return (
        <>
            <br />        
            {

                list.map(item =>
                    
                    <div className="container border border-bottom rounded bg-white">
                        <br/>
                        <Link to="/"><i className="	fas fa-angle-double-left"></i> Back to home page</Link>
                        <br />
                        <span className="h1 mr-2">{item.name}</span>&nbsp;
                        <span className="text-warning">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-half" aria-hidden="true"></i>
                        </span>&nbsp;
                        <a href=""> 12 user comments on product</a>
                        <br />
                        <div className="dropdown-divider mb-3"></div>
                        <div className="row">
                            <div className="col-md-5">
                                <img src={item.image} alt="" className="border border-bottom rounded card-img-top" />
                                <br />
                            </div>
                            <div className="col-md-4">
                                <div className="container">
                                    <span className="h3 font-weight-bold text-danger mr-3">{item.price - (item.price * 40 / 100)}$</span>
                                    <del className="h5 text-secondary mr-3">{item.price} $</del>
                                    <span className="badge badge-warning text-white mb-2">
                                        Installment Rate 0%</span>
                                    <h5 className="font-weight-bold">Product Specification</h5>
                                    <table className="table table-striped" id="tblSpecs">
                                        <tbody>
                                            <tr>
                                                <td>Product Code : </td>
                                                <td>{item.productNumber}</td>
                                            </tr>
                                            <tr>
                                                <td>Brand : </td>
                                                <td>{item.brand}</td>
                                            </tr>
                                            <tr>
                                                <td>Made for :</td>
                                                <td>{item.gender}</td>
                                            </tr>
                                            <tr>
                                                <td>Dial Glass Type :</td>
                                                <td>{item.glass}</td>
                                            </tr>
                                            <tr>
                                                <td>Warrant time :</td>
                                                <td>{item.warrant}</td>
                                            </tr>
                                            <tr>
                                                <td>Dial : </td>
                                                <td>{item.dial}</td>
                                            </tr>
                                            <tr>
                                                <td>Steps :</td>
                                                <td>{item.steps}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <Link to='/stores'>
                                    <i className="fa fa-location-arrow text-primary" aria-hidden="true"></i> Closest Store in stock
                                </Link>
                                <div className="container border rounded my-2 p-3">
                                    <i className="fas fa-box-open"></i> Item included Box , 1 product and 1 cleaning kit
                                    <div className="dropdown-divider"></div>
                                    <i className="fas fa-award"></i> 1 more year of International Warrant
                                    <div className="dropdown-divider"></div>
                                    <i className="fa fa-info-circle" aria-hidden="true"></i> Certification provided by Alberto Clock.
                                </div>
                                <Link to='/cart'>
                                    <button type="button" className="btn btn-success text-white btn-lg btn-block mb-2">
                                        <span className="font-weight-bold">Buy Now</span><br />
                                        <span className="h6">Go to checkout now</span>
                                    </button>
                                </Link>
                                <Link to='/cart'>
                                    <button type="button" className="btn btn-primary text-white btn-lg btn-block mb-2">
                                        <span className="h5 font-weight-bold">Installment with 0% rate by Card</span><br />
                                        <span className="h6">VISA, MasterCard, JCB</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                )
            }
            <br />
            <div className="container">

                <div className="d-flex justify-content-center row border border-bottom rounded bg-white">
                    <div className="col-md-12">
                        <br />
                        <div className="d-flex flex-column comment-section">
                            <div className="p-2">
                                <div className="d-flex flex-row user-info"><img className="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuLihqlNhoFrfx48UzlaXzLqa4L6Bvi-ucA&usqp=CAU" width="40" />
                                    <div className="d-flex flex-column justify-content-start ml-2"><span className="d-block font-weight-bold name">Loren Castaneda</span><span className="date text-black-50"> Bought this item &nbsp;
                                        <span className="text-warning">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star-half" aria-hidden="true"></i>
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <p className="comment-text">This wrist watch works very well. It persistently improves my soccer by a lot.</p>
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="d-flex flex-row user-info"><img className="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuLihqlNhoFrfx48UzlaXzLqa4L6Bvi-ucA&usqp=CAU" width="40" />
                                    <div className="d-flex flex-column justify-content-start ml-2"><span className="d-block font-weight-bold name">Benn Dunlap</span><span className="date text-black-50"> Bought this item &nbsp;
                                        <span className="text-warning">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star-half" aria-hidden="true"></i>
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <p className="comment-text">This wrist watch works considerably well. It mildly improves my basketball by a lot.</p>
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="d-flex flex-row user-info"><img className="rounded-circle" src="https://pbs.twimg.com/profile_images/636754386887151616/mRzQh79U_400x400.jpg" width="40" />
                                    <div className="d-flex flex-column justify-content-start ml-2"><span className="d-block font-weight-bold name">Addams Andrews</span><span className="date text-black-50"> Bought this item &nbsp;
                                        <span className="text-warning">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star-half" aria-hidden="true"></i>
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <p className="comment-text">My neighbor Julisa has one of these. She works as a bartender and she says it looks crooked.</p>
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="d-flex flex-row align-items-start"><img className="rounded-circle" src="https://pbs.twimg.com/profile_images/636754386887151616/mRzQh79U_400x400.jpg" width="40" /><textarea className="form-control ml-1 shadow-none textarea"></textarea></div>
                                <div className="mt-2 text-right"><button className="btn btn-primary btn-sm shadow-none" type="button">Post comment</button><button className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />

        </>
    )

}

export default ProductSingle;