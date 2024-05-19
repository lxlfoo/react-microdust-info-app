import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  entities: {
    areasData: [],
    favsData: []
  },
  loading: false,
  error: false
};

const getParameters = (city) => {
  return {
    serviceKey: process.env.REACT_APP_DEC_API_KEY,
    returnType: 'json',
    numOfRows: '100',
    pageNo: '1',
    sidoName: city,
    ver: '1.0'
  };
};

export const getDustData = createAsyncThunk('dust/getDustData',
  async (city = '서울') => {
    const params = getParameters(city);
    const res = await axios.get(
      'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
      {params: params}
    );

    return res.data.response.body.items;
  }
);

export const getFavsData = createAsyncThunk('dust/getFavsData',
  async (favs) => {
    const cities = [];
    const arr = [];

    for (const fav of favs) {
      if (!cities.includes(fav.sidoName)) {
        cities.push(fav.sidoName);
      }
    }

    for (const city of cities) {
      const params = getParameters(city);
      const res = await axios.get(
        'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
        {params: params}
      );

      res.data.response.body.items.map((data) => {
        if (favs.some((fav) => data.stationName === fav.stationName)) {
          arr.push(data);
        }
      });
    }

    return arr;
  }
);

const dust = createSlice({
  name: 'dust',
  initialState,
  reducers: {},
  extraReducers: {
    [getDustData.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getDustData.fulfilled]: (state, action) => {
      state.entities.areasData = action.payload;
      state.loading = false;
      state.error = false;
    },
    [getDustData.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [getFavsData.pending]: (state) => {
      state.entities.favsData = [];
      state.loading = true;
      state.error = false;
    },
    [getFavsData.fulfilled]: (state, action) => {
      state.entities.favsData = action.payload;
      state.loading = false;
      state.error = false;
    },
    [getFavsData.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    }
  }
});

export default dust.reducer;
