import express from 'express';
import {
    getMenuItems,
    getMenuItemsByCategory,
    getMenuItemById,
    createMenuItem,
    updateMenuItem,
    deleteMenuItem
} from '../controllers/menuController';

const router = express.Router();

router.route('/')
    .get(getMenuItems)
    .post(createMenuItem);

router.route('/category/:category')
    .get(getMenuItemsByCategory);

router.route('/:id')
    .get(getMenuItemById)
    .put(updateMenuItem)
    .delete(deleteMenuItem);

export default router;

