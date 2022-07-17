import { createSlice } from '@reduxjs/toolkit';

const employeesBirthdaySlice = createSlice({
  name: 'employeesBirthday',
  initialState: {
    selectedEmployees: [],
  },
  reducers: {
    selectEmployee(state, action) {
      state.selectedEmployees.push({
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        dob: action.payload.dob,
      });
    },
    deselectEmployee(state, action) {
      state.selectedEmployees = state.selectedEmployees.filter(
        (employee) => employee.id !== action.payload.id,
      );
    },
  },
});

export const { selectEmployee, deselectEmployee } =
  employeesBirthdaySlice.actions;

export default employeesBirthdaySlice.reducer;
