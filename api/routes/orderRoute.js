import express from "express"
import authMiddleware from "../midlleware/auth.js"
import { autreOrder, listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from "../controllers/orderController.js";




const orderRouter = express.Router()

orderRouter.post("/place", authMiddleware,placeOrder);
orderRouter.post("/autre", authMiddleware,autreOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders", authMiddleware,userOrders);
orderRouter.get("/list",listOrders);
orderRouter.post("/status",updateStatus);

export default orderRouter;