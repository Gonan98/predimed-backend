import LabExam from "../models/lab-exam.model";
import Referred from "../models/referred.model";

export const addReferred = async (req, res) => {
  const {
    reason,
    sourceEstablishmentCode,
    destinyEstablishmentCode,
    destinyServiceCode,
    serviceCode,
    specialtyCode,
    patientId,
    diseaseCode,
  } = req.body;

  try {
    await Referred.create({
      reason,
      userId: req.user.id,
      sourceEstablishmentCode,
      destinyEstablishmentCode,
      destinyServiceCode,
      serviceCode,
      specialtyCode,
      patientId,
      diseaseCode,
    });

    res.status(201).json({
      message: "Referred added successfuly",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getReferences = async (req, res) => {

  let references = [];

  try {
    if (req.user.isAdmin) {
      references = await Referred.findAll();
    } else {
      references = await Referred.findAll({
        where: {
          userId: req.user.id
        }
      });
    }

    res.status(200).json(references);
  } catch (err) {
    res.status(500).json(err);
  }
}

export const getReferenceById = async (req, res) => {
  const { id } = req.params;
  let reference = null;
  try {
    if (req.user.isAdmin) {
      reference = await Referred.findByPk(id);
    } else {
      reference = await Referred.findOne({
        where: {
          id,
          userId: req.user.id
        }
      });
    }

    if (!reference) return res.status(404).json({ message: 'The reference does not exist' });
    res.status(200).json(reference);
  } catch (err) {
    res.status(500).json(err);
  }
}

export const getReferredsByPatient = async (req, res) => {

  const { patientId } = req.params;

  try {
    const referreds = await Referred.findAll({
      where: { patientId, userId: req.user.id },
      order: [["user_id", "DESC"]],
    });

    res.status(200).json(referreds);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getLabExamsByReferred = async (req, res) => {
  const { id } = req.params;

  try {
    const labExams = await LabExam.findAll({
      where: { referredId: id }
    });
    res.status(200).json(labExams);
  } catch (err) {
    res.status(500).json(err);
  }
}
