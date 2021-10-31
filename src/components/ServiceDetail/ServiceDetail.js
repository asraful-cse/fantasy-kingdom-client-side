import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const ServiceDetail = () => {
	const { user } = useFirebase();
	const { id } = useParams();
	const [data, setData] = useState([]);
	// const [products, setData] = useState([]);
	useEffect(() => {
		fetch("https://desolate-brook-49511.herokuapp.com/products")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	const ExactIteam = data.filter((td) => td._id === id);

	// add to cart
	const handleAddToCart = (index) => {
		const indexAdded = data[index];
		indexAdded.email = user?.email;
		console.log(data);
		fetch(`https://desolate-brook-49511.herokuapp.com/addOrder`, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(indexAdded),
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
				if (result.insertedId) {
					alert("ORDER SUCCESSFULLY ADDED ");
				}
			});
	};
	return (
		<>
			<h2
				style={{
					color: "",
					fontWeight: "900",
					fontSize: "40px",
					textAlign: "center",
					textTransform: "uppercase",
				}}
			>
				services Details
			</h2>
			{data.length === 0 ? (
				<div className="d-flex justify-content-center">
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			) : (
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
								<small className="card-text">
									{ExactIteam[0]?.description}
								</small>{" "}
								<br />
								<br />
								<strong className="card-text">
									<small className="text-muted">{ExactIteam[0]?.details}</small>
								</strong>
							</div>
						</div>
					</div>
					<br />
					<br />
					<h2
						style={{ color: "#417241bf", fontWeight: "900", fontSize: "40px" }}
					>
						CLICK TO CONFIRM YOUR ORDER :
					</h2>
					<br />
					<div className="row row-cols-1 row-cols-md-4 g-5 d-flex justify-content-center align-item-center ">
						{data?.map((pd, index) => (
							<div className="col ">
								<div
									className="card"
									style={{ backgroundColor: "rgb(191 246 255 / 48%)" }}
								>
									<img
										src={pd?.imageURL}
										className="card-img-top img-fluid "
										alt="..."
										style={{
											height: "160px",
											width: "170px",
											objectFit: "cover",
										}}
									/>
									<div className="card-body">
										<small className="card-title">{pd?.name}</small>
										<button
											onClick={() => handleAddToCart(index)}
											className="btn btn-danger m-2"
										>
											Book Now
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
					<br />
					<br />
				</div>
			)}
			;
		</>
	);
};

export default ServiceDetail;
