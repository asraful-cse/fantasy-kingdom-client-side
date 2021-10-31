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

	// DELETE AN USER
	const handleDeleteUser = (id) => {
		const proceed = window.confirm("Are you sure, you want to delete?");
		if (proceed) {
			const url = `http://localhost:5000/myOrder/${id}`;
			fetch(url, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						alert("deleted successfully");
						const remainingUsers = orders.filter((order) => order._id !== id);
						setOrders(remainingUsers);
					}
				});
		}
	};

	return (
		<div>
			<br />
			<br />
			<div className="all-products container text-center">
				<h1 style={{ borderBottom: "2px solid lightGray", padding: "6px" }}>
					MY ORDER LISTS :-{" "}
					<strong className="text-info ">{orders?.length}</strong>
				</h1>
				<div className="row  text-center">
					{orders.map((order, index) => (
						<div key={order._id} className="col-md-6 col-lg-4">
							<div className=" border border p-2 m-2">
								<strong>Email: {order?.email}</strong>
								<br />
								<p>
									{order?.name} <br />{" "}
									<small className="text-warning fs-4">{order?.price}</small>
								</p>
								<button className="btn btn-info m-2">Pending</button>
								<button className="btn btn-success m-2">Update</button>
								<button onClick={() => handleDeleteUser(order?._id)}>
									Delete
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MyOrders;
