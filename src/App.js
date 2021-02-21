import { useEffect } from "react";
import SpotifyWebAPi from "spotify-web-api-js";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";
import { useDataPlayerValue } from "./DataPlayer";
import { getTokenFromUrl } from "./Spotify/Spotify";

const spotify = new SpotifyWebAPi();

function App() {
	const [{ token }, dispatch] = useDataPlayerValue();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";
		const _token = hash.access_token;

		if (_token) {
			spotify.setAccessToken(_token);

			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});

			spotify.getMe().then((user) => {
				dispatch({
					type: "SET_USER",
					user: user,
				});
			});

			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: "SET_PLAYLISTS",
					playlists: playlists,
				});
			});

			spotify.getPlaylist("37i9dQZF1E4x1olGLmHA1M").then((response) => {
				dispatch({
					type: "SET_DISCOVER_WEEKLY",
					discover_weekly: response,
				});
			});
		}
	}, [token, dispatch]);
	return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
