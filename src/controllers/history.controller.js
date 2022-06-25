import History from "../models/history.model";

export const addHistory = async (req, res) => {
  const {
    weight,
    height,
    pressure,
    temperature,
    heartRate,
    respirationRate,
    anamnesis,
    examSummary,
    labExam,
    patientId
  } = req.body;

  try {
    const newHistory = await History.create({
      weight,
      height,
      pressure,
      temperature,
      heartRate,
      respirationRate,
      anamnesis,
      examSummary,
      labExam,
      patientId,
    });
    
    res.status(201).json({
      message: "History added successfuly",
      id: newHistory.id
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getHistoriesByPatient = async (req, res) => {
  const { patientId } = req.params;

  try {
    const histories = await History.findAll({
      where: { patientId },
      order: [["created_at", "DESC"]],
    });

    res.status(200).json(histories);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllHistories = async (req, res) => {
  try {
    const histories = await History.findAll();

    res.status(200).json(histories);
  } catch (err) {
    res.status(500).json(err);
  }
};
