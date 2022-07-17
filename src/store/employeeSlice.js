import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';
import { STATUS } from '../constants/status';

export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  api.fetchEmployees,
);

const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: [],
    status: STATUS.IDLE,
    error: null,
  },
  reducer: {},
  extraReducers: {
    [fetchEmployees.pending]: (state) => {
      state.status = STATUS.LOADING;
      state.error = null;
    },
    [fetchEmployees.fulfilled]: (state, action) => {
      state.status = STATUS.SUCCESS;
      state.employees = action.payload;
    },
    [fetchEmployees.rejected]: (state, action) => {
      state.status = STATUS.ERROR;
      state.error = action.payload;
    },
  },
});

export default employeeSlice.reducer;
