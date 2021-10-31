import React from "react";
import "./Contacts.css";
const Contacts = () => {
	return (
		<section className="contact  py-5">
			<div className="container">
				<div className="section-header text-center text-dark mb-5">
					<h4 className="text-warning">Contact</h4> <br />
					<small className="text-center">
						If you’re looking for a fun way to bring everyone on your team
						closer together, there is no better <br /> group activity than a day
						at Fantasy Kingdom. We offer a variety of turn-key <br /> programs
						that are easy to execute and can be customized to your group’s{" "}
						<br /> unique specifications. Please submit your details or you can
						call us at 09612-012020
					</small>
					<br /> <br />
					<h1>Leave Your Message</h1>
				</div>
				<div className="col-md-9 mx-auto ">
					<form action="">
						<div className="form-group mb-3">
							<input
								type="text"
								className="form-control bg-light text-dark"
								placeholder="Email Address *"
							/>
						</div>
						<div className="form-group mb-3">
							<input
								type="text"
								className="form-control bg-light text-dark"
								placeholder="Subject *"
							/>
						</div>
						<div className="form-group mb-3">
							<textarea
								name=""
								className="form-control bg-light text-dark"
								id=""
								cols="30"
								rows="10"
								placeholder="Message *"
							></textarea>
						</div>
						<div className="form-group text-center">
							<button type="button" className="btn btn-lg btn-primary">
								{" "}
								Submit{" "}
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
