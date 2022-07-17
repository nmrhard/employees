import { STATUS } from '../../constants/status';

export const LoadingIndicator = ({ status, error, data }) => {
  if (status === STATUS.LOADING) {
    return <span>Loading...</span>;
  }
  if (status === STATUS.ERROR) {
    return <span>Error: {error.message}</span>;
  }

  return data;
};
