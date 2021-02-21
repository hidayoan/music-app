export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "fc3706f86471474889a7e75d7b0a06d8";
const scopes = [
	"user-read-playback-position",
	"user-read-email",
	"user-library-modify",
	"playlist-modify-public",
	"ugc-image-upload",
	"user-follow-modify",
	"user-modify-playback-state",
	"user-read-recently-played",
	"user-read-private",
	"user-library-read",
	"user-top-read",
	"playlist-modify-private",
	"user-follow-read",
	"user-read-playback-state",
	"user-read-currently-playing",
	"playlist-read-private",
	"playlist-read-collaborative",
];

export const getTokenFromUrl = () => {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((initial, item) => {
			var parts = item.split("=");
			initial[parts[0]] = decodeURIComponent(parts[1]);

			return initial;
		}, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;
