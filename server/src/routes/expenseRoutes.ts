import { Router } from "express";
import { getExpensesBycategory } from "../controllers/expenseController";

const router = Router();

router.get("/", getExpensesBycategory);

export default router;
