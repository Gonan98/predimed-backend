import EstablishmentSpecialties from "../models/establishment-specialties.model";

export const addEstablishmentSpecialty = async (req, res) => {
  const { establishmentCode, specialtyCode } = req.body;

  try {
    await EstablishmentSpecialties.create({
      establishmentCode,
      specialtyCode,
    });

    res.status(201).json({
      message: "Establishment Specialty added successfuly",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllEstablishmentSpecialties = async (req, res) => {
  try {
    const establishmentSpecialties = await EstablishmentSpecialties.findAll();

    res.status(200).json(establishmentSpecialties);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getEstablismentSpecialtyByEstablishment = async (req, res) => {
  const pestablishment = req.params.establishment;
  if (!pestablishment)
    return res
      .status(400)
      .json({ message: "Query parameter <pestablishment> is missing" });

  try {
    const establishmentSpecialties = await EstablishmentSpecialties.findAll({
      where: { establishment_code: pestablishment },
      order: [["specialty_code", "ASC"]],
    });

    res.status(200).json(establishmentSpecialties);
  } catch (err) {
    res.status(500).json(err);
  }
};
