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

export const getAllReferreds = async (req, res) => {
  try {
    const referreds = await Referred.findAll();

    res.status(200).json(referreds);
  } catch (err) {
    res.status(500).json(err);
  }
};

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
