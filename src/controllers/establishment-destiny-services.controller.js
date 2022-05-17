import EstablishmentDestinyServices from "../models/establishment-destiny-services.model";

export const addEstablishmentDestinyServices = async (req, res) => {
  const { establishmentCode, destinyServiceCode } = req.body;

  try {
    await EstablishmentDestinyServices.create({
      establishmentCode,
      destinyServiceCode,
    });

    res.status(201).json({
      message: "Establishment Destinty Service added successfuly",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllEstablishmentDestinyServices = async (req, res) => {
  try {
    const establishmentDestinyService =
      await EstablishmentDestinyServices.findAll();

    res.status(200).json(establishmentDestinyService);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getEstablishmentDestinyServicesByEstablishment = async (
  req,
  res
) => {
  const pestablishment = req.params.establishment;
  if (!pestablishment)
    return res
      .status(400)
      .json({ message: "Query parameter <pestablishment> is missing" });

  try {
    const establishmentSpecialties = await EstablishmentDestinyServices.findAll(
      {
        where: { establishment_code: pestablishment },
        order: [["destiny_service_code", "ASC"]],
      }
    );

    res.status(200).json(establishmentSpecialties);
  } catch (err) {
    res.status(500).json(err);
  }
};
