import express from "express";
import {
  createAccount,
  loginAccount,
  getAllUsers,
  getUserProfile,
  createInOurDoor,
  getAllInOutDoor,
  getInOutDoorByID,
  getCountInOutDoor,
} from "../controllers/users.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/admin/create-account", verifyToken ,createAccount);
router.get("/admin/all-users", verifyToken ,getAllUsers);
router.post("/admin/create-in-out-door", verifyToken, createInOurDoor);
router.get("/admin/get-all-in-out-door", verifyToken, getAllInOutDoor);
router.get("/admin/get-id-in-out-door", verifyToken, getInOutDoorByID);
router.get("/admin/get-count-in-out-door", verifyToken, getCountInOutDoor);


router.post("/login", loginAccount);
router.get("/get-user-profile" , verifyToken , getUserProfile);

export default router;
