import { EmployeeList } from '../../components/EmployeeList';
import { EmployeesBirthdayInfo } from '../../components/EmployeesBirthdayInfo';

import * as hooks from './hooks';

import './style.css';

export const EmployeesListPage = () => {
  const { status, error } = hooks.useFetchEmployees();

  return (
    <div>
      <h1>All Employees</h1>
      <div className="columns">
        <EmployeeList status={status} error={error} />
        <EmployeesBirthdayInfo />
      </div>
    </div>
  );
};
