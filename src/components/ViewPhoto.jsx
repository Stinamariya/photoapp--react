import React, { useState } from 'react';
import NavBar from './NavBar';

const ViewPhoto = () => {
    const [data, setData] = useState([
        {"title":"photo 3","url":"https://images.unsplash.com/photo-1566275529824-cca6d008f3da?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG98ZW58MHx8MHx8fDA%3D"},
        {"title":"photo 4","url":"https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp"},
        {"title":"photo 5","url":"https://images.pexels.com/photos/4417069/pexels-photo-4417069.jpeg?cs=srgb&dl=pexels-dylan-chan-2880813-4417069.jpg&fm=jpg"},
        {"title":"photo 6","url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK7mJKpv5y54QNp_ctu-1SL2H18c_vlw3_Lg&s"},
        {"title":"photo 7","url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtpIG-rXt0RGqCvBY1S7GdhbRY_l9Nj0mQvA&s"},
        {"title":"photo 8","url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnqW0ELiPe1ZKRN8p513RMeFByWQmI9ZdNyA&s"}
    ]);

    return (
        <div>
            <NavBar />
            <div className="container">
                <h1><center>VIEW PHOTO</center></h1>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            {data.map((value, index) => (
                                <div key={index} className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <figure className="figure">
                                        <img src={value.url} height="250px" className="figure-img img-fluid rounded" alt="..." />
                                        <figcaption className="figure-caption">{value.title}</figcaption>
                                    </figure>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewPhoto;
