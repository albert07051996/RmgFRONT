import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
export const styleSlice = createSlice({
  name: 'foreignSync',
  initialState: {
    navigationBar: '',

},
reducers: {
    changeState(state, action) {
        let xx = { ...state, [action.payload.name]: action.payload.value }
        state = xx
        console.log(xx, 'xx')
        return (state)
    }
}})
export const { changeState } = styleSlice.actions;
