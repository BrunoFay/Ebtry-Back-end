import { ErrorRequestHandler } from 'express';

class HandleGenericsErrors {
  handleError: ErrorRequestHandler = (err, req, res, _next) => {
    console.log(err.message);
    if (err.message) return res.status(400).json({ message: err.message });
    return res.status(500).json({ message: 'Internal server error' });
  };
}
export default HandleGenericsErrors;
