// getting mongoose schema for our db
const Article = require('../models/articles');

const getAllArticles = async (req, res, next) => {
    try {
        const articles = await Article.find({});
        res.status(200).json({ articles });
    } catch (error) {
        res.status(500).json({ msg: error })
    }
};

const createArticle = async (req, res, next) => {
    try {
        const article = await Article.create(req.body);
        res.status(201).json({ article });
    } catch (error) {
        res.status(500).json({ message: error })
    }
};

const getArticle = async (req, res, next) => {
    try {
        const { id: articleID } = req.params;
        const article = await Article.findOne({ _id: articleID });
        if (!article) {
            return res.status(404).json({ message: `No article with ID ${articleID} found` });
        }
        res.status(200).json({ article });
    } catch (error) {
        res.status(500).json({ message: error });
    }

};

const updateArticle = async (req, res, next) => {
    try {
        const { id: articleID } = req.params;
        const article = await Article.findOneAndUpdate({ _id: articleID }, req.body, {
            new: true,
            runValidators: true,
        });
        if (!article) {
            return res.status(404).json({ message: `No article with ID of ${articleID} found` });
        }
        res.status(200).json({ article });
    } catch (error) {

    }


};

const deleteArticle = async (req, res, next) => {
    try {
        const { id: articleID } = req.params;
        const article = await Article.findOneAndDelete({ _id: articleID });
        if (!article) {
            return res.status(404).json({ message: `No article with ID of ${article} found` });
        }
        res.status(200).json({ message: `Successfully deleted` });
    } catch (error) {

    }

};



module.exports = {
    getAllArticles,
    createArticle,
    getArticle,
    updateArticle,
    deleteArticle
};