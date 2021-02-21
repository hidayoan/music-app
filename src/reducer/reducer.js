export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// token:
	// 	"BQAoVzHUL-nxyN783EDD7zOKOt_a2DodGDNJ3gYC022qgOgwXaA5Wh2tdhI_jbp2ggNxNOV74ESvu4aYxodIpa3WyxblBTzuH9h8d_flyAvNcFJn_JWSrsLYn-XtLp_HYXjiOdhwonsuXDiSkxOAPlW4MzodL8Ruayc",
};

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};
		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};
		case "SET_DISCOVER_WEEKLY":
			return {
				...state,
				discover_weekly: action.discover_weekly,
			};

		default:
			return state;
	}
};

export default reducer;
