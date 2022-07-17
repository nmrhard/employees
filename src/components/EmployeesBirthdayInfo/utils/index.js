export const getMonthName = (dob) => {
  const date = new Date(dob);
  return date.toLocaleString('en-GB', { month: 'long' });
};

export const formatDate = (dob) => {
  const date = new Date(dob);

  const year = new Intl.DateTimeFormat('en-GB', { year: 'numeric' }).format(
    date,
  );
  const month = new Intl.DateTimeFormat('en-GB', { month: 'long' }).format(
    date,
  );
  const day = new Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(date);

  return `${day} ${month}, ${year} year`;
};
