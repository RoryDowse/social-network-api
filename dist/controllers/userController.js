// import { ObjectId } from 'mongodb';
import User from '../models/User.js';
// Get all users
export const getAllUsers = async (_req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
// Get a single user
export const getUserById = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        if (user) {
            res.json({
                user,
                thoughts: await thoughts(userId),
                friends,
                friendCount
            });
        }
    }
    finally { }
};
