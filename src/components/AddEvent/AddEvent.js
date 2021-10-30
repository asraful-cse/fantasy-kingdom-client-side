import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../hooks/useFirebase";
const AddEvent = () => {
	const { user } = useFirebase();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		data.email = user?.email;
		axios
			.post("http://localhost:5000/addEvent", data)

			.then((res) => {
				if (res.data.insertedId) {
					alert("Successfully data added");
				}
				reset();
			});
	};
	return (
		<div className="container border border bg-light">
			<h2 className="mt-5 my-3 p-3 text-center text-danger">
				PLEASE ADD EVENTS
			</h2>
			<div className="login-box w-75 m-auto mt-6">
				<div className="event-box  d-flex justify-content-center align-items-center">
					<div className="login-form">
						<form onSubmit={handleSubmit(onSubmit)}>
							<input
								{...register("name")}
								placeholder="name"
								className="p-2 m-2 w-100"
							/>
							<br />
							<input
								{...register("title")}
								placeholder="Title"
								className="p-2 m-2 w-100"
							/>
							<br />
							<input
								{...register("time")}
								placeholder="Time"
								className="p-2 m-2 w-100"
							/>
							<br />
							<input
								{...register("price")}
								placeholder="Price"
								type="text"
								className="p-2 m-2 w-100"
							/>
							<br />
							<input
								{...register("description")}
								placeholder="Description"
								className="p-2 m-2 w-100"
							/>

							<br />
							<input
								{...register("details")}
								placeholder="Details"
								className="p-2 m-2 w-100"
							/>
							<br />

							<input
								{...register("imageURL", { required: true })}
								placeholder="Image url link "
								className="p-2 m-2 w-100"
							/>

							{errors.exampleRequired && <span>This field is required</span>}

							<input
								type="submit"
								value="INSERT TICKET"
								className="btn btn-danger p-2 m-2 mb-5 w-100"
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddEvent;
