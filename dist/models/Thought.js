import { Schema, model, Types } from 'mongoose';
// Define the Reaction schema
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(), // Automatically generate a new ObjectID
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Schema.Types.Date, // Moongoose-specific date type
        default: Date.now,
        get: (value) => value.toDateString(), // Getter to format the date
    },
}, {
    toJSON: {
        virtuals: true,
        getters: true,
    },
});
// Define the Thought schema
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Schema.Types.Date,
        default: Date.now,
        get: (value) => value.toDateString(), // Getter to format the date
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema], // Use Reaction as a subdocument
}, {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    timestamps: true,
});
// Create a virtual property for reactionCount
thoughtSchema
    .virtual('reactionCount')
    .get(function () {
    return this.reactions.length;
});
const Thought = model('Thought', thoughtSchema);
export default Thought;
