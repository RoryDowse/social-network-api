import { Request, Response } from 'express';
// import { ObjectId } from 'mongodb';
import User from '../models/User.js';

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