import { Schema, model, type Document } from 'mongoose';

// Define the User interface 
interface IUser extends Document {
    username: string;
    email: string;
    thoughts: Schema.Types.ObjectId[]; // array of _id values referencing the Thought model
    friends: Schema.Types.ObjectId[]; // array of _id values referencing the User model
    friendCount: number; // virtual
}

// Define the User schema
const userSchema = new Schema<IUser>(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true // remove whitespace from beginning and end
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought', 
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User', 
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        timestamps: true,
    },
);

// Create a virtual property for friendCount
userSchema
.virtual('friendCount')
.get(function (this: IUser) {
    return this.friends.length;
});

const User = model<IUser>('User', userSchema);

export default User;