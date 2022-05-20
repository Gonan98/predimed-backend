import Department from "../models/department.model"
import District from "../models/district.model";
import Establishment from "../models/establishment.model";
import Patient from "../models/patient.model";
import Province from "../models/province.model";

export const getDepartments = async (req, res) => {
    try {
        const departments = await Department.findAll();
        res.status(200).json(departments);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getProvincesByDepartmentId = async (req, res) => {

    const { departmentId } = req.params;

    try {
        const provinces = await Province.findAll({
            where: {
                departmentId
            },
            include: Department
        });

        res.status(200).json(provinces);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getDistrictsByProvinceId = async (req, res) => {
    const { provinceId } = req.params;
    
    try {
        const districts = await District.findAll({
            where: {
                provinceId
            },
            include: Province
        });

        res.status(200).json(districts);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getDistrictById = async (req, res) => {
    const { id } = req.params;

    try {
        const district = await District.findByPk(id, { include: [Province, Department] });
        res.status(200).json(district);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getEstablishmentsByUbigeo = async (req, res) => {

    const { id } = req.params;

    try {
        const establishments = await Establishment.findAll({
            where: {
                ubigeoId: id
            },
            order: ['name']
        });

        res.status(200).json(establishments)
    } catch (err) {
        res.status(500).json(err)
    }
}

export const getPatientsByUbigeo = async (req, res) => {
    const { id } = req.params;

    try {
        const establishments = await Patient.findAll({
            where: {
                ubigeoId: id
            }
        });

        res.status(200).json(establishments)
    } catch (err) {
        res.status(500).json(err)
    }
}