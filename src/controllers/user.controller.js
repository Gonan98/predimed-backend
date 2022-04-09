import generator from 'generate-password';
import Cryptojs from 'crypto-js';
import User from '../models/user.model';

export const add = async (req, res) => {
    const { firstName, lastName, contactCenter, username, password, isAdmin, gender, profession, establishment, employeeStatus, workingCondition,  documentNumber, documentMedic } = req.body;

    try {

        if (isAdmin === true) {
            const existUserName = await User.count({ where: { username: username } })
            if (existUserName > 0) {
                throw "USERNAME EXISTED"
            }
        }

        let usernameDoc = username
        if (!isAdmin)
            usernameDoc = 'med' + firstName.slice(0, 1).toLowerCase() + lastName.slice(0, 3).toLowerCase();

        const hashedPassword = Cryptojs.AES.encrypt(
            password,
            process.env.CRYPTO_SECRET
        ).toString();

        await User.create({
            firstName,
            lastName,
            contactCenter,
            gender: gender ?? '',
            profession: profession ?? '',
            "establishment_id": establishment ?? null,
            employeeStatus: employeeStatus ?? '',
            workingCondition: workingCondition ?? '',
            username: usernameDoc,
            password: hashedPassword,
            documentNumber,
            documentMedic
        });

        res.status(201).json({
            message: 'User created successfully',
        });

    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
};

export const getCredentials = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            attributes: ['username', 'password']
        });

        if (!user) return res.status(404).json({
            message: 'User not found'
        });

        const originalPassword = Cryptojs.AES.decrypt(
            user.password,
            process.env.CRYPTO_SECRET
        ).toString(Cryptojs.enc.Utf8);

        user.password = originalPassword;

        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
}

export const getAll = async (req, res) => {
    const { isAdmin } = req.query
    try {
        let users = []
        if (!isAdmin) {
            users = await User.findAll({
                attributes: { exclude: ['password', 'isAdmin'] },
                where: { isAdmin: isAdmin }
            });
        } else {
            users = await User.findAll({ attributes: { exclude: ['password', 'isAdmin'] } });
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
};

export const getById = async (req, res) => {
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
            message: error,
        });
    }
};

export const updateById = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, contactCenter, username, password, isAdmin, gender, profession, establishment, employeeStatus, workingCondition, documentNumber, documentMedic } = req.body;
    console.log('body => ', req.body)
    try {
        if (isAdmin === true) {
            await User.update(
                {
                    firstName,
                    lastName,
                    contactCenter,
                    username
                },
                {
                    where: {
                        id,
                    },
                }
            );
        } else {
            const usernameDoc = 'med' + firstName.slice(0, 1).toLowerCase() + lastName.slice(0, 3).toLowerCase();
            await User.update(
                {
                    firstName,
                    lastName,
                    contactCenter,
                    gender,
                    username: usernameDoc,
                    profession,
                    "establishment_id": establishment,
                    employeeStatus,
                    workingCondition,
                    documentNumber,
                    documentMedic
                },
                {
                    where: {
                        id,
                    },
                }
            );
        }

        res.status(200).json({
            message: 'User updated successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
};

export const deleteById = async (req, res) => {
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
            message: error,
        });
    }
};