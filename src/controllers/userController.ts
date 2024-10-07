import { Request, Response } from 'express';
// import { ObjectId } from 'mongodb';
import User from '../models/User.js';
import Thought from '../models/Thought.js';

// Get all users
export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find();

        res.json(users);
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
}

// Get a single user
export const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId)
        .populate('thoughts')
        .populate('friends');

        if (user) {
            res.json({
                user,
                thoughts: user.thoughts,
                friends: user.friends, 
                friendCount:
                user.friendCount
            });
        } else {
            res.status(404).json({
                message: 'User not found'
            });
        }
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Create a new user
export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}

// Delete a user
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.userId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' 
            });
        }
        
        // Remove user's associated thoughts
        await Thought.deleteMany({ _id: { $in: user.thoughts } });

        return res.json({ message: 'User and associated thoughts deleted' });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}