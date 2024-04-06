const User = require('../models/User');

exports.getProfile = (req, res) => {
    const userId = req.userId;

    User.findById(userId)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        })
        .catch(err => {
            console.error('Error retrieving user profile:', err);
            res.status(500).json({ message: 'Internal server error' });
        });
};

exports.updateProfile = (req, res) => {
    const userId = req.userId;

    const { username, email, bio } = req.body;

    User.findByIdAndUpdate(userId, { username, email, bio }, { new: true })
        .then(updatedUser => {
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(updatedUser);
        })
        .catch(err => {
            console.error('Error updating user profile:', err);
            res.status(500).json({ message: 'Internal server error' });
        });
};

exports.deleteProfile = (req, res) => {
    const userId = req.userId;

    User.findByIdAndDelete(userId)
        .then(deletedUser => {
            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User account deleted successfully' });
        })
        .catch(err => {
            console.error('Error deleting user account:', err);
            res.status(500).json({ message: 'Internal server error' });
        });
};
