import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { LoadingIndicator } from '../LoadingIndicator';

import {
  selectEmployee,
  deselectEmployee,
} from '../../store/employeesBirthdaySlice';
import { ENGLISH_ALPHABET } from './constants';

import './style.css';

export const EmployeeList = () => {
  const { status, error } = useSelector((state) => state.employees);
  const employees = useSelector((state) => state.employees.employees);

  const employeesJSX = [];

  employees.length &&
    employees.forEach((employee) => {
      const firstCharOfFirstName = employee.firstName[0].toUpperCase();

      ENGLISH_ALPHABET[firstCharOfFirstName].push(
        <Employee key={employee.id} employee={employee} />,
      );
    });

  for (const [char, employeeJSX] of Object.entries(ENGLISH_ALPHABET)) {
    employeesJSX.push(
      <li>
        <p className="employee-letter">{char}</p>
        {employeeJSX.length ? employeeJSX : <p>No Employees</p>}
      </li>,
    );
  }

  return (
    <section>
      <h2>Employees</h2>
      <ul className="employee-list">
        <LoadingIndicator status={status} data={employeesJSX} error={error} />
      </ul>
    </section>
  );
};

export const Employee = ({ employee, isActiveEmployee }) => {
  const selectedEmployees = useSelector(
    (state) => state.employeesBirthday.selectedEmployees,
  );

  const activeId = selectedEmployees.find(({ id }) => id === employee.id);

  const [isActive, setIsActive] = React.useState(Boolean(activeId));
  const dispatch = useDispatch();

  const handleChangeNotActive = () => {
    setIsActive(false);
    dispatch(deselectEmployee({ id: employee.id }));
  };

  const handleChangeActive = () => {
    setIsActive(true);
    dispatch(
      selectEmployee({
        ...employee,
      }),
    );
  };

  const employeeNameClass = isActive
    ? 'employee-full-name employee-full-name-active'
    : 'employee-full-name';

  return (
    <div className="employee-item">
      <p className={employeeNameClass}>
        {`${employee.firstName} ${employee.lastName}`}
      </p>
      <fieldset className="employee-actions">
        <label htmlFor={`${employee.lastName}-not-active`}>
          <input
            id={`${employee.lastName}-not-active`}
            name={`${employee.lastName}-action`}
            type="radio"
            checked={!isActive}
            onChange={handleChangeNotActive}
          />
          not active
        </label>
        <label htmlFor={`${employee.lastName}-active`}>
          <input
            id={`${employee.lastName}-active`}
            name={`${employee.lastName}-action`}
            type="radio"
            checked={isActive}
            onChange={handleChangeActive}
          />
          active
        </label>
      </fieldset>
    </div>
  );
};
