import { Router } from "express";
import {
  createdUserController,
  deleteUserController,
  getUsersController,
  updateUserController,
  userRetriveController,
} from "../controllers/User/usersControllers";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";
import { getUserCarsController } from "../controllers/Cars/carsControllers";
import { ensureUserExists } from "../middleware/User/userDoesntExist.middleware";

const userRouter = Router();

userRouter.post("", ensureUserExists, createdUserController);

userRouter.get("", getUsersController);

userRouter.get("/:id", userRetriveController);

userRouter.get("/:id/cars", getUserCarsController);

userRouter.patch("", ensureAuthMiddleware, updateUserController);

userRouter.delete("", ensureAuthMiddleware, deleteUserController);

export default userRouter;
