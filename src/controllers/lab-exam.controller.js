import LabExam from "../models/lab-exam.model";

export const addLabExam = async (req, res) => {
    const { name } = req.body;

    if (!name) return res.status(400).json({ error: 'The name is missing' });

    try {
        await LabExam.create({ name });
        res.status(201).json({ message: 'Laboratory Exam added successfuly' });
    } catch (err) {
        res.status(500).json(err);
    }
}