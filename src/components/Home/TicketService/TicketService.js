import React, { useEffect, useState } from "react";
import aboutImage from "../../../images/aboutImage.jpg";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTicketAlt,
	faGamepad,
	faBus,
} from "@fortawesome/free-solid-svg-icons";
import secondSection from "../../../images/4.jpg";
import { Link } from "react-router-dom";
import "./TicketService.css";
import useFirebase from "../../../hooks/useFirebase";
const TicketService = () => {
	const { user } = useFirebase();
	const [products, setProducts] = useState([]);
	// Loading Data
	useEffect(() => {
		fetch("http://localhost:5000/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
			});
	}, []);
	// for extra section
	const props = useSpring({ number: 15, from: { number: 0 } });
	const propsTwo = useSpring({ number: 20, from: { number: 0 } });
	const propsThree = useSpring({ number: 10, from: { number: 0 } });
	// add to cart
	const handleAddToCart = (index) => {
		const data = products[index];
		data.email = user?.email;
		console.log(data);
		fetch(`http://localhost:5000/addOrder`, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
				if (result.insertedId) {
					alert("SUCCESSFULLY ADDED ");
				} else {
					alert("PLEASE TRY ANOTHER EMAIL ADDRESS");
				}
			});
	};
	return (
		<>
			<section id="book-ride" className="mt-5 container">
				<h2 className="text-center fw-bolder">
					{" "}
					OUR TICKET <span style={{ color: "#ff4d30" }}>OFFERS & SERVICES</span>
				</h2>
				<p
					style={{ fontSize: "18px", color: "gray", textAlign: "justify" }}
					className="text-center"
				>
					Fantasy Kingdom has become a favourite destination for group outings,
					picnics, company or family day out. Attractive packages are available.
					Facilities for arranging conference, annual meeting or any corporate
					event, <br /> birthday, wedding or any family party, photo session or
					video shooting are also available here. Prince Ashu, Princess Lia and
					their animal friends Zuzu, Bobo, Zipper and Bangasaur are always at
					the park welcoming everyone with a smile. <br />
					Oh and they have many games for you.
					<br />
				</p>
				<br /> <br />
				<div className="row ">
					{products.map((pd, index) => (
						<div className="mb-5 col-lg-4 col-sm-6  ">
							<div className="card shadow-lg w-100 h-100 text-center rounded serviceCard card_border">
								<div className="d-flex justify-content-center align-items-center h-75 p-2">
									<img
										src={pd?.imageURL}
										className="card-img-top card_border"
										alt=""
										style={{ height: "86%", width: "75%" }}
									/>
								</div>
								<div className="card-body name">
									<small>{pd?.title}</small>
									<h6 className="card-title">{pd?.name}</h6>
									<strong>{pd?.time}</strong>
								</div>

								<div className="card-footer">
									<div className="d-flex align-items-center justify-content-between ">
										<h5 className="text-warning fw-bold">{pd?.price}</h5>
										<Link to={`/service_detail/${pd?._id}`}>
											<button className="btn btn-danger">Buy Now</button>
										</Link>
									</div>
									<button
										onClick={() => handleAddToCart(index)}
										className="btn btn-warning m-2"
									>
										buy now
										{/* <Link to="/myOrders">buy now</Link> */}
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
			{/* extra section */}
			<section
				className="my-3 container"
				style={{ borderTop: "1px solid lightGray", padding: "50px" }}
			>
				<div className="row">
					<div className="col-md-5 mt-5">
						<img className="img-fluid" src={aboutImage} alt="" />
					</div>
					<div className="col-md-6 mb-2 ">
						<div className="text-center">
							<h2 className="fw-bold text-warning">ABOUT SERVICES </h2>
							<h3
								className="fw-bolder  text-center "
								style={{ color: "lightSeagreen" }}
							>
								We use advanced proven technology to keep your smile looking the
								best!
							</h3>
							<h6 style={{ color: "gray" }}>
								We are passionate about smiles and having the latest technology
								is one step we can take to help save yours!
							</h6>
						</div>
						<hr />
						<div
							className="d-flex justify-content-between"
							style={{ borderBottom: "1px solid lightGray", padding: "20px" }}
						>
							<div className="overflow-hidden w-25">
								<h6>PACKAGES</h6>
								<FontAwesomeIcon
									icon={faTicketAlt}
									style={{ fontSize: "4em", color: "red" }}
								></FontAwesomeIcon>
								<animated.span style={{ fontSize: "4em" }}>
									{props.number}
								</animated.span>
							</div>
							<div className="overflow-hidden w-25">
								<h6>RIDES</h6>
								<FontAwesomeIcon
									icon={faGamepad}
									style={{ fontSize: "4em", color: "red" }}
								></FontAwesomeIcon>

								<animated.span style={{ fontSize: "4em" }}>
									{propsTwo.number}
								</animated.span>
							</div>
							<div className="overflow-hidden w-25">
								<h6>OFFERS</h6>
								<FontAwesomeIcon
									icon={faBus}
									style={{ fontSize: "4em", color: "red" }}
								></FontAwesomeIcon>
								<br />
								<animated.span style={{ fontSize: "4em" }}>
									{propsThree.number}
								</animated.span>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* extra section part 2 */}
			<div class="card bg-dark text-white container ">
				<img
					src={secondSection}
					className="card-img "
					alt="..."
					style={{ opacity: "55%" }}
				/>
				<div class="card-img-overlay text-center ">
					<h5 class="card-title text-danger fs-5">
						RECREATION WITH EXCITEMENT
					</h5>

					<p class="card-text text-light fs-6">
						Customers have to show the soft copy of this invoice to the
						information counter of Fantasy Kingdom Complex.
					</p>
					<Link to="/home">
						<button className="btn btn-danger">Visit Now</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default TicketService;
