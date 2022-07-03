import { ErrorRequestHandler } from 'express';

class HandleGenericsErrors {
  handleError: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err.message);

    res.status(500).json({ message: 'Internal server error' });
  }
}
export default HandleGenericsErrors;