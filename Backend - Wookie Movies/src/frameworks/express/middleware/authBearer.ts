import { Request, Response, NextFunction } from "express";

// Middleware function to authenticate Bearer token
const authBearer = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    const bearerToken = process.env.BEARER_TOKEN ;

    // Check if token exists and matches the expected token
    if (token !== `Bearer ${bearerToken}`) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  
    // If token is valid, proceed to the next middleware
    next();
  };
  
  export default authBearer;
  