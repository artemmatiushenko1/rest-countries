import { createSlice } from '@reduxjs/toolkit';
import { ICountry } from 'interfaces/country';

interface CountriesState {
  countries: ICountry[];
}

const initialState: CountriesState = {
  countries: [],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
});

export default countriesSlice.reducer;
