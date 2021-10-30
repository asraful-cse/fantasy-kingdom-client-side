import {
	faFacebook,
	faInstagram,
	faTwitter,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FooterQuickLinks from "../FooterQuickLinks/FooterQuickLinks";

const Footer = () => {
	return (
		<footer
			className="bg-cyan py-3"
			style={{ marginTop: "30px", backgroundColor: "rgb(54 35 213 / 69%)" }}
		>
			<div className="container">
				<div className="row d-flex justify-content-center align-items-center text-white">
					<div className="col-md-4 d-flex">
						<FontAwesomeIcon
							icon={faMapMarkerAlt}
							style={{ fontSize: "41px", marginTop: "13px" }}
						/>
						<small
							className="ms-2 fw-bolder text-light"
							style={{
								padding: "10px",
							}}
						>
							Fantasy Kingdom Complex, Jamgora, Savar, Dhaka, Bangladesh
						</small>
						<br />
						<small
							style={{
								borderLeft: "1px solid lightGray",
								padding: "10px",
							}}
						>
							Saturday -Thursday: 11 AM – 07 PM Friday and Holiday: 10 AM – 08
							PM
						</small>
					</div>
					<div className="col-md-4 text-center mt-4">
						<h4>Quick Links</h4>
						<div>
							<FooterQuickLinks></FooterQuickLinks>
						</div>
					</div>
					<div className="col-md-4">
						<h4
							style={{ borderBottom: "1px solid lightGray", padding: "10px" }}
						>
							About Us
						</h4>
						<h6
							className="text-light "
							style={{ borderBottom: "1px solid lightGray", padding: "10px" }}
						>
							Fantasy Kingdom is FUN, LOUD and OUT OF THIS WORLD. Ashu and Lia
							and their wacky buddies Zuzu, Bobo, Zipper and Bangasaur ( that’s
							a Bangladeshi dinosaur ) will rock your world.
						</h6>
						<br />

						<div
							className="d-flex justify-content-evenly"
							style={{ fontSize: "2em" }}
						>
							<FontAwesomeIcon icon={faFacebook} />
							<FontAwesomeIcon icon={faInstagram} />
							<FontAwesomeIcon icon={faTwitter} />
							<FontAwesomeIcon icon={faWhatsapp} />
						</div>
					</div>
				</div>
				<br />
				<div>
					<h6
						style={{
							textAlign: "center",
							color: "lightGray",
							padding: "10px",
							borderTop: "1px solid lightGray",
						}}
					>
						<small>Copyright © asraful.01110@gmail.com</small>
					</h6>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
