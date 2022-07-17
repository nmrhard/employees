import * as React from 'react';
import { useSelector } from 'react-redux';

import { getMonthName, formatDate } from './utils';

import './style.css';

export const EmployeesBirthdayInfo = () => {
  const selectedEmployees = useSelector(
    (state) => state.employeesBirthday.selectedEmployees,
  );
  const monthsJSX = [];
  const months = {};

  selectedEmployees.forEach(({ id, firstName, lastName, dob }) => {
    const month = getMonthName(dob);

    if (months[month]) {
      months[month].push(
        <EmployeeInfo
          key={id}
          firstName={firstName}
          lastName={lastName}
          dob={dob}
        />,
      );
    } else {
      months[month] = [
        <EmployeeInfo
          key={id}
          firstName={firstName}
          lastName={lastName}
          dob={dob}
        />,
      ];
    }
  });

  for (const [month, employeeJSX] of Object.entries(months)) {
    employeeJSX &&
      monthsJSX.push(
        <li key={month}>
          <p className="employee-letter">{month}</p>
          {employeeJSX}
        </li>,
      );
  }

  return (
    <section className="bd-col">
      <h2>Employees Birthday</h2>
      <ul>
        {selectedEmployees.length ? (
          monthsJSX
        ) : (
          <li>Employees List is empty</li>
        )}
      </ul>
    </section>
  );
};

const EmployeeInfo = ({ firstName, lastName, dob }) => {
  const fullDob = formatDate(dob);
  return (
    <p className="bd-employee">{`${firstName} ${lastName} - ${fullDob}`}</p>
  );
};
