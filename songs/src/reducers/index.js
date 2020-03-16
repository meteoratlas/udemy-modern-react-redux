import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Roma Fade", duration: "4:30" },
    { title: "Teenage Birdsong", duration: "4:54" },
    { title: "Who", duration: "5:05" },
    { title: "Dear Future Self", duration: "2:54" }
  ];
};

const selectedSongReducer = (selected = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selected;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
