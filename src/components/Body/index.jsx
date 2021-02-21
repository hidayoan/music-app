import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDataPlayerValue } from "../../DataPlayer";
import Header from "../Header";
import "./styles/index.scss";
import SongRow from "../SongRow";
function Body({ spotify }) {
	const [{ discover_weekly }, dispatch] = useDataPlayerValue();
	console.log(discover_weekly);
	return (
		<div className="body">
			<Header spotify={spotify} />

			<div className="body__info">
				<img src={discover_weekly?.images[0].url} alt="" />
				<div className="body__infoText">
					<strong>PLAYLIST</strong>
					<h2>{discover_weekly?.name}</h2>
					<p>{discover_weekly?.description}</p>
				</div>
			</div>

			<div className="body__songs">
				<div className="body__icons">
					<div className="body__shuffle">
						<PlayArrowIcon fontSize="80px" className="body__shuffleIcon" />
					</div>
					<FavoriteBorderIcon fontSize="large" />
					<MoreHorizIcon />
				</div>

				{discover_weekly?.tracks.items.map((item) => (
					<SongRow track={item.track} />
				))}
			</div>
		</div>
	);
}

export default Body;
