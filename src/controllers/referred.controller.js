import Referred from "../models/referred.model";

export const addReferred = async (req, res) => {
  const {
    reason,
    referenceDate,
    userId,
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
      referenceDate,
      userId,
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
  const qPatientId = req.params.patient;
  if (!qPatientId)
    return res
      .status(400)
      .json({ message: "Query parameter <patientId> is missing" });

  try {
    const referreds = await Referred.findAll({
      where: { patientId: qPatientId },
      order: [["user_id", "DESC"]],
    });

    res.status(200).json(referreds);
  } catch (err) {
    res.status(500).json(err);
  }
};
