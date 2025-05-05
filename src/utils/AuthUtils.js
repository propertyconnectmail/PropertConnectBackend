const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

const AuthUtils = {
    signToken: (payload) => {
        return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN || '7d' });
    },

    verifyToken: (token) => {
        try {
            return jwt.verify(token, JWT_SECRET);
        } catch (error) {
            return null;
        }
    },

    decodeToken: (token) => {
        return jwt.decode(token);
    }
};

module.exports = AuthUtils;
