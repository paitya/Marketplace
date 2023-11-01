const express = require('express');
const {
    getAllCategories,
    getCategoryById,
    addNewCategory,
    updateCategoryById,
    removeCategoryById,
} = require('../controllers/categories');
const router = express.Router();

// GET all categories (api/categories)
router.route("/").get(getAllCategories);

// GET category by ID (api/categories/:id)
router.route("/:id").get(getCategoryById);

// POST new category (api/categories)
router.route("/").post(addNewCategory);

// PUT (Update) a category by ID (api/categories/:id)
router.route("/:id").put(updateCategoryById);

// DELETE a category by ID (api/categories/:id)
router.route("/:id").delete(removeCategoryById);

module.exports = router;
