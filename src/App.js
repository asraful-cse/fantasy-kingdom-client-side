import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddEvent from "./components/AddEvent/AddEvent";
// import ApplyPage from "./components/ApplyPage/ApplyPage";
import Contacts from "./components/Home/Contacts/Contacts";
import Home from "./components/Home/Home/Home";
import MyOrders from "./components/MyOrders/MyOrders";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Footer from "./components/Shared/Footer/Footer";
import Login from "./components/Shared/Login/Login";
import PrivetRoute from "./components/Shared/Login/PrivetRoute/PrivetRoute";
import Navbar from "./components/Shared/Navbar/Navbar";
import NotFound from "./components/Shared/NotFound/NotFound";
import AuthProvider from "./Context/AuthProvider";

function App() {
	return (
		<AuthProvider>
			<Router>
				<Navbar></Navbar>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route path="/home">
						<Home></Home>
					</Route>
					<Route path="/login">
						<Login></Login>
					</Route>
					<Route path="/contacts">
						<Contacts />
					</Route>

					<Route path="/myOrders">
						<MyOrders></MyOrders>
					</Route>
					<PrivetRoute path="/service_detail/:id">
						<ServiceDetail></ServiceDetail>
					</PrivetRoute>

					<PrivetRoute path="/addServices">
						<AddEvent></AddEvent>
					</PrivetRoute>

					<Route path="*">
						<NotFound></NotFound>
					</Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</AuthProvider>
	);
}

export default App;
