import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
  const token = req.cookies.adminToken || req.cookies.doctorToken; // Adjust cookie names as needed

  if (!token) return res.status(403).json({ success: false, message: 'No token provided!' });

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ success: false, message: 'Invalid token!' });
    req.user = user; // Store user info in req
    next();
  });
};

export default authenticateToken;
