import { Schema, model } from 'mongoose';
// Define the User schema
const userSchema = new Schema({
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
}, {
    toJSON: {
        virtuals: true,
    },
    timestamps: true,
});
// Create a virtual property for friendCount
userSchema
    .virtual('friendCount')
    .get(function () {
    return this.friends.length;
});
const User = model('User', userSchema);
export default User;
