const Category = require('../models/categoriesModel');

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

const getCategoryById = async (req, res) => {
    const categoryId = req.params.id;

    try {
        const category = await Category.findById(categoryId);
        if (!category) {
            res.status(404).json({ message: 'Category not found' });
        } else {
            res.status(200).json(category);
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

const addNewCategory = async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.status(201).json(newCategory);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

const updateCategoryById = async (req, res) => {
    const categoryId = req.params.id;

    try {
        const updatedCategory = await Category.findByIdAndUpdate(categoryId, req.body, { new: true });
        if (!updatedCategory) {
            res.status(404).json({ message: 'Category not found' });
        } else {
            res.status(200).json(updatedCategory);
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

const removeCategoryById = async (req, res) => {
    const categoryId = req.params.id;

    try {
        const removedCategory = await Category.findByIdAndRemove(categoryId);
        if (!removedCategory) {
            res.status(404).json({ message: 'Category not found' });
        } else {
            res.status(200).json({ message: 'Category deleted successfully' });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllCategories,
    getCategoryById,
    addNewCategory,
    updateCategoryById,
    removeCategoryById,
};

