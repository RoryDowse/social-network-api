import db from '../config/connection.js';
import { User, Thought } from '../models/index.js';
import cleanDB from './cleanDB.js';
import { getRandomName, getRandomThought } from './data.js';
try {
    await db();
    await cleanDB();
    // Create empty array to hold the users
    const users = [];
    // Loop 20 times -- add users to the users array
    for (let i = 0; i < 20; i++) {
        // Get some random thought objects using a helper function that we imported from ./data
        const thoughts = getRandomThought(5);
        const username = getRandomName();
        const first = username.split(' ')[0];
        // const last = username.split(' ')[1];
        const email = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}@example.com`;
        users.push({
            username,
            email,
            thoughts,
            friends: [],
        });
    }
    // Add users to the collection and await the results
    const userData = await User.create(users);
    // Add thoughts to the collection and await the results
    await Thought.create({
        thoughtText: [...userData.map(({ thoughts }) => thoughts)],
        username: [...userData.map(({ username }) => username)],
        reactions: [],
    });
    // Log out the seed data to indicate what should appear in the database
    console.table(users);
    console.info('Seeding complete! 🌱');
    process.exit(0);
}
catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
}
