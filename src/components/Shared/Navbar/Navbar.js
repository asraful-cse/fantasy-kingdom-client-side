import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import fantasy from "../../../images/fantasy.png";
const Navbar = () => {
	const { logOut, user } = useAuth();
	return (
		<div className="container">
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container-fluid">
					<div className="d-flex">
						<img
							src={fantasy}
							style={{ height: "40px", width: "200px", marginTop: "0px" }}
							alt=""
						/>
					</div>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse "
						id="navbarNavAltMarkup"
						style={{ marginTop: "26px" }}
					>
						<div className="navbar-nav ms-auto mask flex-center rgba-red-strong">
							<Link to="/home" className="nav-link">
								HOME
							</Link>

							<Link to="/contacts" className="nav-link">
								CONTACTS
							</Link>
							<Link to="/addServices" className="nav-link">
								ADD SERVICE
							</Link>
							<Link to="/manageOrder" className="nav-link">
								MANAGE-ORDERS
							</Link>
							{user.email && (
								<div>
									<Link to="/myOrders" className="nav-link">
										{" "}
										MY ORDERS
									</Link>
									<p>
										<strong className="text-success mx-1">
											{user.displayName}
										</strong>
									</p>
								</div>
							)}
							{user.email ? (
								<Link to="/login" className="nav-link">
									<br />
									<button onClick={logOut} className="btn btn-danger me-1">
										SIGN OUT
									</button>
								</Link>
							) : (
								<Link to="/login">
									<button className="btn btn-success me-1">LOGIN</button>
								</Link>
							)}
							<br />
							<br />
							<br />
							<br />
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
