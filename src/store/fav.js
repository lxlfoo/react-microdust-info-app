import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  myCity: '',
  myArea: '',
  allCity: '',
  fav: [],
};

if (initialState.myCity === '') {
  const savedData = JSON.parse(localStorage.getItem('states'));
  if (savedData) {
    initialState = {...savedData};
  } else {
    initialState = {
      myCity: '서울',
      myArea: '중구',
      allCity: '서울',
      fav: [],
    };
  }
}

const fav = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    changeMyArea: (state, action) => {
      const newState = {
        ...state,
        myCity: action.payload.myCity,
        myArea: action.payload.myArea,
      };
      localStorage.setItem('states', JSON.stringify(newState));
      return newState;
    },
    changeAllCity: (state, action) => {
      const newState = {
        ...state,
        allCity: action.payload.city,
      };
      localStorage.setItem('states', JSON.stringify(newState));
      return newState;
    },
    addFav: (state, action) => {
      const newState = {
        ...state,
        fav: [...state.fav, action.payload.fav],
      };
      localStorage.setItem('states', JSON.stringify(newState));
      return newState;
    },
    delFav: (state, action) => {
      const newState = {
        ...state,
        fav: state.fav.filter(
          (item) => item.stationName !== action.payload.fav.stationName
        ),
      };
      localStorage.setItem('states', JSON.stringify(newState));
      return newState;
    },
  },
});

export const {changeAllCity, changeMyArea, addFav, delFav} = fav.actions;
export default fav.reducer;
