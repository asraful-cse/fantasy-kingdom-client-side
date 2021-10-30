import React from 'react';
import './Contacts.css'
const Contacts = () => {
    return (
        <section className="contact  py-5">
            <div className="container">
                <div className="section-header text-center text-dark mb-5">
                    <h4 className="text-warning">Contact</h4> <br />
                    <small className="text-center">Best suitable to show your valuable services like Dental Care, Oral Care, Gum treatments, <br />
                        Dental surgeon list, Gum care treatments, Cavity treatment, Dental floss, <br /> Orthodontist, sealants, Dental Procedures,<br /> Root canal treatments and medical service. <br /> Suits also pediatric service, veterinary <br /> doctors, outpatients, medical emergency, cosmetic treatment <br /> sustainability goals with many extraordinary. </small>
                    <br /> <br />
                    <h1>Leave Your Message</h1>
                </div>
                <div className="col-md-9 mx-auto ">
                    <form action="">
                        <div className="form-group mb-3">
                            <input type="text" className="form-control bg-light text-dark" placeholder="Email Address *" />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control bg-light text-dark" placeholder="Subject *" />
                        </div>
                        <div className="form-group mb-3">
                            <textarea name="" className="form-control bg-light text-dark" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type="button" className="btn btn-lg btn-primary"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contacts;