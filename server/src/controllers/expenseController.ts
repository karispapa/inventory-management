import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getExpensesBycategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const expensesByCategorySummaryRaw =
      await prisma.expenseByCategory.findMany({
        orderBy: {
          date: "desc",
        },
      });

    const expenseByCategorySummary = expensesByCategorySummaryRaw.map(
      (item) => ({ ...item, amount: item.amount.toString() })
    );
    res.json(expenseByCategorySummary);
  } catch (error) {
    res
      .status(500)
      .json({ Message: "Error retrieving expenses bu=y category" });
  }
};
