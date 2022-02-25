import Location from '../models/location.model';

export const createLocation = async (req, res) => {
    const { department, city, district } = req.body;

    if (!department || !city || !district) return res.status(400).json({ message: 'Some data is missing' });

    try {
        await Location.create({
            department,
            city,
            district
        });

        res.status(201).json({
            message: 'Patient created successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
}

export const getLocations = async (req, res) => {

    try {
        const locations = await Location.findAll();

        res.status(200).json(locations);
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }

}