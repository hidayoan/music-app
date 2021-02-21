import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import LibraryMusicOutlinedIcon from "@material-ui/icons/LibraryMusicOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import React from "react";
import { useDataPlayerValue } from "../../DataPlayer";
import SlidebarOption from "./SlidebarOption";
import "./styles/index.scss";

function SlideBar(props) {
	const [{ playlists }, dispatch] = useDataPlayerValue();
	console.log("day la danh sach", playlists);
	return (
		<div className="slidebar">
			<img
				className="slidebar__logo"
				src="https://i.pinimg.com/originals/55/48/20/554820d211ecbd25d9edb5fb7030183e.png"
				alt=""
			/>
			<SlidebarOption Icon={HomeOutlinedIcon} title="Home" />
			<SlidebarOption Icon={SearchOutlinedIcon} title="Search" />
			<SlidebarOption Icon={LibraryMusicOutlinedIcon} title="Your Library" />
			<br />
			<strong className="slidebar__title">PLAYLISTS</strong>
			<hr />

			{playlists?.items?.map((playlist) => (
				<SlidebarOption key={playlist.id} title={playlist.name} />
			))}
		</div>
	);
}

export default SlideBar;
