
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;


        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }


        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();


        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;


        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }


        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }


        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });


        res.status(200).json({ token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


exports.logout = async (req, res) => {
    try {

        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Error logging out:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


exports.getUserDetails = async (req, res) => {
    try {

        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ user });
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



