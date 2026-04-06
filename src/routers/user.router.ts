import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import { asyncHandler } from "../middlewares/asyncHandler.middleware.js";
import * as validate from "../middlewares/validator.middleware.js";

const router = Router();

router.get("/", asyncHandler(userController.getAll));
router.get("/:id", validate.getUserById, asyncHandler(userController.getById));
router.post("/", validate.addUser, asyncHandler(userController.add));
router.patch("/:id", validate.updateUser, asyncHandler(userController.update));
router.delete("/:id", validate.deleteUser, asyncHandler(userController.remove));

export default router;