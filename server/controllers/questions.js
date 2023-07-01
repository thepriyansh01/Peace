import Questions from "../models/questions.js";

export const addQuestion = async (req, res, next) => {
    const { question, options } = req.body;
    try {
        const newQuestion = new Questions({
            question: question,
            options: options
        });
        await newQuestion.save();
        res.status(201).json({ message: "Question Added" });
    } catch (error) {
        next(error);
    }
};

export const getAllQuestions = async (req, res, next) => {
    try {
        const questions = await Questions.find();
        res.status(200).json(questions);
    } catch (error) {
        next(error);
    }
};

export const deleteQuestion = async (req, res, next) => {
    const questionId = req.body.id;

    try {
        const deletedQuestion = await Questions.findByIdAndDelete(questionId);
        if (!deletedQuestion) {
            return res.status(404).json({ error: "Question not found" });
        }
        res.status(200).json({ message: "Question deleted successfully" });
    } catch (error) {
        next(error);
    }
};