import { Router } from 'express'; // Import Router from express
const router = Router(); // Create a new router instance
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} from '../../controllers/userController.js'; // Import user-related controller functions

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:id
router
    .route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser); // ensure controller removes user thoughts

// /api/users/:userId/friends
router
    .route('/:userId/friends/:friendId')
    // @ts-expect-error temporary
    .post(addFriend);

// /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    // @ts-expect-error temporary
    .delete(removeFriend);

export { router as userRouter };