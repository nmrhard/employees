import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchEmployees } from '../../../store/employeeSlice';

export const useFetchEmployees = () => {
  const { status, error } = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return { status, error };
};
