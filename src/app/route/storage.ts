import StorageController from "../controllers/StorageController";
import s3 from "..//..//infrastructure/s3";
import { Router } from "express";
const router = Router();
router.get("/upload", s3.single("file"), StorageController.uploadSingleFile);
router.post("/upload", s3.single("file"), StorageController.uploadSingleFile);
export default router;