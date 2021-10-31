import React, { useEffect, useState } from "react";
import useFirebase from "../../hooks/useFirebase";

const MyOrders = () => {
	const { user } = useFirebase();
	const [orders, setOrders] = useState([]);

	const email = user.email;

	useEffect(() => {
		fetch(`http://localhost:5000/myOrders/${email}`)
			.then((res) => res.json())
			.then((data) => setOrders(data));
	}, [email]);
	console.log(orders);
	return (
		<div>
			<br />
			<br />
			<div className="all-products container text-center">
				<h1 style={{ borderBottom: "2px solid lightGray", padding: "6px" }}>
					MY ORDER LISTS :-{" "}
					<strong className="text-info ">{orders.length}</strong>
				</h1>
				<div className="row  text-center">
					{orders?.map((pd, index) => (
						<div className="col-md-6 col-lg-4">
							<div className=" border border p-2 m-2">
								<strong>Email: {pd.email}</strong>
								<br />
								<p>
									{pd?.name} <br />{" "}
									<small className="text-warning fs-4">{pd?.price}</small>
								</p>
								<button className="btn btn-info m-2">Pending</button>
								<button className="btn btn-success m-2">Update</button>
								<button className="btn btn-danger m-2">Delete</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MyOrders;
