import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { useDataPlayerValue } from "../../DataPlayer";
import "./styles/index.scss";

function Header(props) {
	const [{ user }, dispatch] = useDataPlayerValue();

	return (
		<div className="header">
			<div className="header__left">
				<SearchIcon />
				<input
					type="text"
					placeholder="Tìm kiếm nghệ sĩ, bài hát hoặc podcast"
				/>
			</div>
			<div className="header__right">
				<Avatar className="header__avatar" src={user?.images[0].url} />
				{/* <div className="header__avatar">
					<img src={user?.images[0].url} />
				</div> */}
				<h4>{user?.display_name}</h4>
			</div>
		</div>
	);
}

export default Header;
