import { Request, Response } from 'express';
import Thought from '../models/Thought.js';

export const getAllThoughts = async (_req: Request, res: Response)=> {
    try {
        const thoughts = await Thought.find();

        res.json(thoughts);
    } catch (error: any) {
        res.status(500).json({
        message: error.message
        });
    }
}

export const getThoughtById = async (req: Request, res: Response) => {
    const { thoughtId } = req.params;
    try {
        const thought = await Thought.findById(thoughtId);

        if (thought) {
            res.json(thought);
        } else {
            res.status(404).json({ message: 'Thought not found' });
        }

    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const createThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.create(req.body);
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const updateThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        );
        if (!thought) {
            res.status(404).json({ message: 'Thought not found' });
    }
    
        res.json(thought);
        } catch (error: any) {
            res.status(400).json({
                message: error.message
        });  
    }
};

export const deleteThought = async (req: Request, res: Response): Promise<void> => {
    try {
        const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
        if (!thought) {
            res.status(404).json({ message: 'Thought not found' 
            });
            return;
    }
    
    res.json({ message: 'Thought and associated reactions deleted' });
    return
    } catch (err) {
        res.status(500).json(err);
        return;
    }
}

export const addReaction = async (req: Request, res: Response): Promise<void> => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        );
        if (!thought) {
            res.status(404).json({ message: 'Thought not found' });
            return;
    }
    
    res.json(thought);
    return;
    } catch (err) {
        res.status(500).json(err);
        return;
    }
};

export const deleteReaction = async (req: Request, res: Response) => {
    const { thoughtId, reactionId } = req.params;
    console.log(req.params);

    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: thoughtId },
            { $pull: { reactions: { _id: reactionId } } },
            { new: true }
        );

        if (!thought) {
            return res.status(404).json({ message: 'Reaction not found' });
    }
    
    return res.json({ message: 'Reaction deleted' });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};