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
    patientId,
  } = req.body;

  try {
    await History.create({
      weight,
      height,
      pressure,
      temperature,
      heartRate,
      respirationRate,
      anamnesis,
      examSummary,
      patientId,
    });

    res.status(201).json({
      message: "History added successfuly",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getHistoriesByPatient = async (req, res) => {
  const qPatientId = req.params.patient;
  if (!qPatientId)
    return res
      .status(400)
      .json({ message: "Query parameter <patientId> is missing" });

  try {
    const histories = await History.findAll({
      where: { patientId: qPatientId },
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
