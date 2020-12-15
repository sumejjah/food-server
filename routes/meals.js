import express from 'express';

import { getMeals, downloadMeal } from '../controllers/meals';

const router = express.Router();

router.post("/search", getMeals);
router.post("/meal/download", downloadMeal);

export default router;