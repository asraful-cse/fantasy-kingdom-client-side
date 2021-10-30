import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
	const { id } = useParams();
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/products")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	const ExactIteam = data.filter((td) => td._id === id);
	return (
		<div
			className="card mb-3 container"
			style={{ maxWidth: "100%", marginTop: "50px", textAlign: "center" }}
		>
			<div className="row g-0">
				<div className="col-md-3">
					<img
						src={ExactIteam[0]?.imageURL}
						className="img-fluid rounded-start"
						alt="..."
					/>
				</div>
				<div className="col-md-9 ">
					<div className="card-body">
						<p className="card-title text-warning text-uppercase fw-bold">
							{ExactIteam[0]?.name}{" "}
						</p>
						<small className="card-text">{ExactIteam[0]?.description}</small>{" "}
						<br />
						<strong className="card-text">
							<small className="text-muted">{ExactIteam[0]?.details}</small>
						</strong>
					</div>
					<Link to="/apply">
						<button className="btn btn-success">Apply Now</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ServiceDetail;
