import generator from 'generate-password';
import Cryptojs from 'crypto-js';
import User from '../models/user.model';
import config from '../config';

export const createUser = async (req, res) => {
    const { 
        firstName,
        lastName,
        documentNumber,
        documentMedic,
        gender,
        profession,
        college,
        employeeStatus,
        workingCondition
    } = req.body;

    try {

        const username = 'med' + firstName.slice(0,1).toLowerCase() + lastName.slice(0,3).toLowerCase();

        const password = generator.generate({
            length: 12,
            numbers: true
        });

        const hashedPassword = Cryptojs.AES.encrypt(
            password,
            config.cryptoSecret
        ).toString();

        await User.create({
            firstName,
            lastName,
            documentNumber,
            documentMedic,
            gender,
            profession,
            college,
            employeeStatus,
            workingCondition,
            username,
            password: hashedPassword
        });

        res.status(201).json({
            message: 'User created successfully',
        });

    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
};

export const getUserCredentials = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            attributes: ['username', 'password']
        });

        if (!user) return res.status(404).json({
            message: 'User not found'
        });

        const originalPassword = Cryptojs.AES.decrypt(
            user.password,
            config.cryptoSecret
        ).toString(Cryptojs.enc.Utf8);

        user.password = originalPassword;

        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: {
                exclude: ['password', 'isAdmin']
            },
            where: { isAdmin: false }
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            attributes: {
                exclude: ['password', 'isAdmin']
            },
            where: {
                isAdmin: false
            },
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { 
        firstName,
        lastName,
        documentNumber,
        documentMedic,
        gender,
        profession,
        college,
        employeeStatus,
        workingCondition
    } = req.body;

    try {
        await User.update(
            {
                firstName,
                lastName,
                documentNumber,
                documentMedic,
                gender,
                profession,
                college,
                employeeStatus,
                workingCondition
            },
            {
                where: {
                    id,
                },
            }
        );
        res.status(200).json({
            message: 'User updated successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
};

export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(201).json({
            message: 'User deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Database error',
        });
    }
};