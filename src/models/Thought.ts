import { Schema, model, type Document } from 'mongoose';

// Define the Thought interface
interface IThought extends Document {
    thoughtText: string;
    createdAt: Date;
    username: string;
    reactions: Schema.Types.ObjectId[];
}

// Define the Thought schema
const thoughtSchema = new Schema<IThought>(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (value: Date) => { // use a virtual
                return value.toDateString();
            },
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Reaction', // case sensitive
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        timestamps: true,
    },
);

const Thought = model<IThought>('Thought', thoughtSchema);

export default Thought;