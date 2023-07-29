import httpStatus from 'http-status';

const errors = {
  USER_ERROR_1: {
    message: 'User does not exist',
    status: httpStatus.NOT_FOUND,
  },
};

export default errors;
