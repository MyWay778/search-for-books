import {createSlice} from '@reduxjs/toolkit';
import {SearchOptionsState} from '../../types/searchOptions';

const initialState: SearchOptionsState = {
  categories: '',
  sortingBy: 'relevance'
}

const searchOptionsSlice = createSlice({
  name: 'searchOptions',
  initialState,
  reducers: {
    changeCategories: (state, action) => {
      state.categories = action.payload;
    },
    changeSortingBy: (state, action) => {
      state.sortingBy = action.payload;
    }
  }
})

export const {changeCategories, changeSortingBy} = searchOptionsSlice.actions;
export default searchOptionsSlice.reducer;
