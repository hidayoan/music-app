import React from "react";
import Body from "../Body";
import Footer from "../Footer";
import SlideBar from "../Slidebar";
import "./styles/index.scss";

Player.propTypes = {};

function Player({ spotify }) {
	return (
		<div className="player">
			<div className="player__body">
				<SlideBar />
				<Body spotify={spotify} />
			</div>
			<Footer />
		</div>
	);
}

export default Player;
