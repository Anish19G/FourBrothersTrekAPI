import express from 'express'
import { verifyUser } from '../utils/verifyToken.js';
import { createBooking, getBooking, getallBooking } from '../controllers/bookingController.js';

const router = express.Router();

router.post('/', verifyUser, createBooking);
router.get('/:id', verifyUser, getBooking);
router.get('/', verifyUser, getallBooking);

export default router