import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import LoopIcon from "@material-ui/icons/Loop";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import PlayCircleFilledWhiteOutlinedIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import React from "react";
import "./styles/index.scss";
import { Grid, Slider } from "@material-ui/core";

function Footer(props) {
	return (
		<div className="footer">
			<div className="footer__left">
				<img
					className="footer__albumLogo"
					src="https://i.pinimg.com/originals/55/48/20/554820d211ecbd25d9edb5fb7030183e.png"
					alt=""
				/>
				<div className="footer_songInfo">
					<h4>Song name</h4>
					<p>Artist</p>
				</div>
			</div>
			<div className="footer__center">
				<ShuffleIcon className="footer__green" />
				<SkipPreviousIcon className="footer__icon" />
				<PlayCircleFilledWhiteOutlinedIcon
					fontSize="large"
					className="footer__icon"
				/>
				<SkipNextIcon className="footer__icon" />
				<LoopIcon className="footer__green" />
			</div>
			<div className="footer__right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider aria-labelledby="continuous-slider" />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Footer;
