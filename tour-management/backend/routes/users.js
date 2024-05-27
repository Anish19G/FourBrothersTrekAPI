import express from 'express'
import {
    createUser, 
    updateUser, 
    deleteUser, 
    getSingleUser, 
    getAllUser} from '../controllers/userController.js'
import { verifyUser, verifyAdmin } from '../utils/verifyToken.js';


const router = express.Router()


//create new tour
router.post('/', createUser);

//update tour
router.put('/:id', verifyUser, updateUser);

//delete tour
router.delete('/:id',verifyUser, deleteUser);

//get single tour
router.get('/:id', verifyUser, getSingleUser);

//get all tour
router.get('/', verifyAdmin, getAllUser);

export default router;