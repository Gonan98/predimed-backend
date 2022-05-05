import Department from "../models/department.model"
import District from "../models/district.model";
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

    const { departmentId } = req.query;

    if (!departmentId) return res.status(400).json({
        message: 'departmentId query is missing'
    });

    try {
        const provinces = await Province.findAll({
            where: {
                departmentId
            }
        });

        res.status(200).json(provinces);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getDistrictsByProvinceId = async (req, res) => {
    const { provinceId } = req.query;

    if (!provinceId) return res.status(400).json({
        message: 'provinceId query is missing'
    });
    
    try {
        const districts = await District.findAll({
            where: {
                provinceId
            }
        });

        res.status(200).json(districts);
    } catch (err) {
        res.status(500).json(err);
    }
}