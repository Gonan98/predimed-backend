import Incidence from "../models/incidence.model";

export const addIncidence = async (req, res) => {
  const {
    status,
    subject,
    phone,
    description,
    priority,
    incidenceType,
    createdAt,
    userId,
  } = req.body;

  try {
    await Incidence.create({
      status,
      subject,
      phone,
      description,
      priority,
      incidenceType,
      createdAt,
      userId,
    });

    res.status(201).json({
      message: "Incidence added successfuly",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllIncidences = async (req, res) => {
  try {
    const incidences = await Incidence.findAll();

    res.status(200).json(incidences);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getIncidenceByUserId = async (req, res) => {
  const puserid = req.params.userId;
  if (!puserid)
    return res
      .status(400)
      .json({ message: "Query parameter <puserid> is missing" });

  try {
    const incidences = await Incidence.findAll({
      where: { user_id: puserid },
      order: [["created_at", "DESC"]],
    });

    res.status(200).json(incidences);
  } catch (err) {
    res.status(500).json(err);
  }
};
