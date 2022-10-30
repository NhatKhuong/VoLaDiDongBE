import StorageController from "../controllers/StorageController";
import { Router } from "express";
import cloudinaryUpload from "..//..//infrastructure/cloudinary";
const router = Router();
router.post(
    "/upload",
    cloudinaryUpload.single("file"),
    StorageController.uploadSingleFile
  );
export default router;