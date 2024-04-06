const jwt = require('jsonwebtoken');
const User = require('../Models/User');

const authenticateUser = async (req, res, next) => {
    try {

        const authHeader = req.headers['authorization'];
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        const token = authHeader.split(' ')[1];

        const decoded = jwt.verify(token, 'your_secret_key');

        if (!decoded.userId) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        req.user = user;
        next();
    } catch (error) {

        console.error('Authentication error:', error);
        return res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = {
    authenticateUser,
};
