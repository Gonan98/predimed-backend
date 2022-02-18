import Medic from '../models/medic.model';

export const createMedic = async (req, res) => {
  const { firstName, lastName, contactCenter } = req.body;

  if (!firstName || !lastName || !contactCenter)
    return res.status(400).json({ message: 'Some data is missing' });

  try {
    await Medic.create({
      firstName,
      lastName,
      contactCenter,
    });

    res.status(201).json({
      message: 'Medic created successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Database error',
    });
  }
};

export const getAllMedics = async (req, res) => {
  try {
    const medics = await Medic.findAll();
    res.status(200).json(medics);
  } catch (error) {
    res.status(500).json({
      message: 'Database error',
    });
  }
};

export const getMedicById = async (req, res) => {
  try {
    const medic = await Medic.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(medic);
  } catch (error) {
    res.status(500).json({
      message: 'Database error',
    });
  }
};

export const updateMedic = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, contactCenter } = req.body;

  try {
    await Medic.update(
      {
        firstName,
        lastName,
        contactCenter,
      },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).json({
      message: 'Medic updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Database error',
    });
  }
};

export const deleteMedic = async (req, res) => {
  try {
    await Medic.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({
      message: 'Medic deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Database error',
    });
  }
};
