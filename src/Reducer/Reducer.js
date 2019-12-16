import { ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE } from "../Actions/Action-types";

const initialState = {
  movielist: [
    {
      id: 0,
      img:
        "https://www.wallpaperflare.com/static/817/718/326/movies-assassin-s-creed-assassin-s-wallpaper.jpg",
      name: "Assassin's creed",
      releasedate: "2009",
      rate: 3,
      trailer: "https://www.youtube.com/embed/gfJVoF5ko1Y"
    },
    {
      id: 1,

      img: "https://pbs.twimg.com/media/DuJo7oyXgAEUzWX.jpg",
      name: "Sonic",
      releasedate: "2019",
      rate: 4,
      trailer: "https://www.youtube.com/embed/SfEpqmdXhiU"
    },
    {
      id: 2,

      img: "http://hdqwalls.com/wallpapers/venom-movie-poster-2018-2c.jpg",
      name: "Venom",
      releasedate: "2019",
      rate: 4,
      trailer: "https://www.youtube.com/embed/xLCn88bfW1o"
    },
    {
      id: 3,

      img:
        "https://playandgo.com.au/wp-content/uploads/2019/05/the-lion-king-movie-poster1.jpeg",
      name: "The Lion King",
      releasedate: "2019",
      rate: 5,
      trailer: "https://www.youtube.com/embed/7TavVZMewpY"
    }
  ]
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MOVIE:
      return { ...state, movielist: [...state.movielist, payload] };
    case REMOVE_MOVIE:
      return {
        ...state,
        movielist: state.movielist.filter(el => el.id != payload)
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movielist: state.movielist.map(el =>
          el.id == payload.id
            ? {
                ...el,
                img: payload.newimg,
                name: payload.newname,
                releasedate: payload.newreleasedate,
                rate: payload.newrate
              }
            : el
        )
      };

    default:
      return state;
  }
};

export default reducer;
