import Service from "../models/service.model";

export const getServices = async (req, res) => {
    try {
        const services = await Service.findAll();
        res.status(200).json(services);
    } catch (err) {
        res.status(500).json(err);
    }
}