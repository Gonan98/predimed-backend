import DestinyService from "../models/destiny-service.model";
import Establishment from "../models/establishment.model"
import Service from "../models/service.model";
import Specialty from "../models/specialty.model";
import User from "../models/user.model";

export const getEstablishmentById = async (req, res) => {
    const { id } = req.params;

    try {
        const establishment = await Establishment.findByPk(id);
        res.status(200).json(establishment);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getDestinyEstablishments = async (req, res) => {
    try {
        const establishments = await Establishment.findAll({
            where: {
                code: [5987, 6213, 6210, 23159]
            }
        });
        res.status(200).json(establishments);
    } catch (err) {
        res.status(500).json(err)
    }
}

export const getMyEstablishment = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, {
            include: Establishment
        });
        res.status(200).json(user.establishment);
    } catch (err) {
        res.status(500).json(err)
    }
}

export const getEstablishmentServices = async (req, res) => {
    const { code } = req.params;
    try {
        const services = await Establishment.findByPk(code, {
            include: Service
        });
        res.status(200).json(services);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

export const getEstablishmentSpecialties = async (req, res) => {
    const { code } = req.params;
    try {
        const specialties = await Establishment.findByPk(code, {
            include: Specialty
        });
        res.status(200).json(specialties);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

export const getEstablishmentDestinyServices = async (req, res) => {
    const { code } = req.params;
    try {
        const destinyServices = await Establishment.findByPk(code, {
            include: DestinyService
        });
        res.status(200).json(destinyServices);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}