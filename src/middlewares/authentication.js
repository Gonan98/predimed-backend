import jwt from 'jsonwebtoken';
import config from '../config';

export const verifyToken = (req, res, next) => {
    const { authorization } = req.headers;
    
    if (authorization) {
        const token = authorization.split(' ')[1];
        jwt.verify(token, config.jwtSecret, (err, payload) => {
            if (err) return res.status(403).json({
                auth: false,
                message: 'Token is not valid!'
            });
            req.user = payload;
            next();
        });
    } else {
        return res.status(401).json({
            message: 'You are not authenticated'
        });
    }
}

export const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            return res.status(403).json({
                message: 'You are not alowed to do that'
            });
        }
    });
}