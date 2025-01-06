import express from "express";
import itemActions from "./modules/item/itemActions";

const router = express.Router();

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

export default router;
