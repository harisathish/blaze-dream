import React, { useState } from 'react'
import mainLogo from './organic.jpg';

function Product() {

    const [data, setData] = useState([
        {
            id: 1,
            product: "Plastfree Linear ",
            type: "Linear",
            price: 5,
            quantity: 5,
            counterVal: 1,
            inCart: false,
            total: ''
        },
        {
            id: 2,
            product: "Plastfree Regular",
            type: "Regular",
            price: 20,
            quantity: 10,
            counterVal: 1,
            inCart: false,
            total: ''
        },
        {
            id: 3,
            product: "Plastfree  Organic",
            type: "Linear",
            price: 50,
            quantity: 15,
            counterVal: 1,
            inCart: false,
            total: ''
        },
        // {
        //     id: 4,
        //     product: "Plasfree Linear Organic",
        //     type: "Linear",
        //     price: 100,
        //     quantity: 20,
        //     total: '',
        //     counterVal: 1,
        //     inCart: false
        // }
    ])


    function total1(data) {
        return data.reduce(function (acc, item) {
            acc += item.price * item.quantity
            return acc;
        }, 0)
    }

    function total2(data) {
        return data.reduce(function (acc, item) {
            acc += item.quantity
            return acc;
        }, 0)
    }

    const add = i => {
        setData(prevCart =>
            prevCart.map((item, o) => {

                if (i === o && item.inCart) {

                    if (item.quantity > 19) {

                        return item;
                    } else return { ...item, quantity: item.quantity + 1 };
                } else if (i === o) {

                    if (item.quantity > 19) {
                
                        return item;
                    } else
                        return {


                            ...item,
                            quantity: item.quantity + 1
                        };

                }

                return item;

            })
        );
    };

    const minus = (i) => {

        setData(prevCart =>
            prevCart.map((item, o) => {
                if (i === o && item.inCart) {
                    if (item.quantity > 0) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                } else if (i === o && item.quantity > 0) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    };
                }
                return item;
            })
        );

    }

    const removeFromCart = i => {
        setData(prevCart =>
            prevCart.map((item, o) => {
                if (i === o) {
                    return {
                        ...item,
                        quantity: 0,
                        counterVal: 1,
                        inCart: false
                    };
                }
                return item;
            })
        );
    };

    const checkOut = i => {
        setData(prevCart =>
            prevCart.map((item, o) => {
               
                    return {
                        ...item,
                        quantity: 0,
                        counterVal: 1,
                        inCart: false
                }
            })
        );
    };



    
    // function minusone(data, id) {

    //     const item = data.map(fetch => (
    //         fetch.quantity
    //     ))

    //    alert("nn" +item[id-1]) 
    //     // return data.reduce(function (acc, item) {
    //     //     acc +=  item.quantity
    //     //     return acc;
    //     // }, 0)
    // }


    return (

        <div className="container">
            <div className="header">
                <h2><i class="fa fa-shopping-bag"> </i> Cart <sup style={{fontSize:"15px"}}>({total2(data)})</sup> </h2>
                <table id="customers" className="container">
                    <thead style={{ borderBottom:"2px solid white"}} >
                        <tr style={{ textAlign: "center" }}>
                            {/* <th >ID</th> */}
                            <th>PRODUCT</th>
                            <th>TYPE</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    {data.map((item, i) => (

                        item.quantity === 0 ? (
                            null
                        ) : (
                            <tr key={item.id} style={{ borderBottom:"2px solid white"}}>

                                {/* <td>{item.id}</td> */}

                                <td className="flex" style={{ justifyContent: "center" }}>
                                    <div className="column">
                                    <div className="col-sm-3">
                                        <img src={mainLogo} alt="Organic" style={{ width: "60px", height: "60px" }} />
                                    </div>
                                    <div className="">
                                    <div> {item.product}</div>

                                    <div style={{marginTop:"20px"}}>
                                        <button type="button" class="btn btn-sm" style={{ borderBottom: "1px solid black", color: "#292826" }} onClick={() => removeFromCart(i)}>REMOVE</button>
                                    </div>
                                    </div>
                                    </div>
                                </td>


                                <td>{item.type}</td>
                                <td>&#8377; {(item.price).toFixed(2)}</td>
                                <td className="flex-container" style={{ display: "flex", justifyContent: "center", marginTop:"22px" ,  borderBottom: "1px solid black" }}>

                                    <div> <button style={{ cursor: "pointer", border: "none" }} type="button" id="sub" class="sub" onClick={() => minus(i)} > <i class="fa fa-minus" aria-hidden="true"></i></button> </div> &nbsp;
                                    <div > {item.quantity}</div> &nbsp;
                                    <div>  <button style={{ cursor: "pointer", border: "none" }} type="button" id="sub" class="sub" onClick={() => add(i)} >  <i class="fa fa-plus" aria-hidden="true"></i> </button> </div>

                                </td>
                                <td>&#8377; {(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                        )
                    ))}

                    <td colSpan={4} style={{ textAlign: "right" }}> <h5><b>SUBTOTAL </b></h5></td>
                    <td ><h4><b>&#8377; {total1(data).toFixed(2)}</b></h4></td>
                    {/* <td colSpan="5">SUBTOTAL  &#8377; {total2(data)}</td> */}
                </table>
                <div className="container">
                    <div class="row">
                        <div className="col-sm-9" style={{ fontSize: "17px", textAlign: "right", marginTop: "8px" }}>Shipping, taxes, and discounts calculated at checkout.</div>
                       
                        <div className="col-sm-3"><button type="button" style={{ width: "200px", height: "50px", color: "#1D1C1C", fontSize:"1" }} class="btn btn-lg" onClick={()=>checkOut()}>CHECK-OUT</button></div>
                     
                        </div>
                </div>


            </div>

        </div>
    )
}

export default Product
