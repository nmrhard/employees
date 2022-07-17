const API_URL = process.env.REACT_APP_API_URL;

export const api = {
  async fetchEmployees(_, { rejectWithValue }) {
    try {
      const response = await fetch(`${API_URL}/tasks/users`);

      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const employees = await response.json();

      return employees;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
};
