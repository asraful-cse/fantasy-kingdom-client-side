import React from 'react';
import { Link } from 'react-router-dom';
import apply from '../../images/apply.JPG'
const ApplyPage = () => {
    return (

        <>


            <div className="card container">
                <div className="card-body">
                    <Link to="/home">
                        <button className="btn btn-success">BACK HOME</button>
                    </Link>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <img src={apply} className="card-img-bottom" alt="..." />
            </div>
        </>

    );
};

export default ApplyPage;