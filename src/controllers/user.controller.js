import generator from 'generate-password';
import Cryptojs from 'crypto-js';
import User from '../models/user.model';

export const createUser = async (req, res) => {
    const { firstName, lastName, contactCenter } = req.body;

    if (!firstName || !lastName || !contactCenter)
        return res.status(400).json({ message: 'Some data is missing' });

    try {

        const username = 'med' + firstName.slice(0,1).toLowerCase() + lastName.slice(0,3).toLowerCase();

        const password = generator.generate({
            length: 10,
            numbers: true
        });

        const hashedPassword = Cryptojs.AES.encrypt(
            password,
            process.env.CRYPTO_SECRET
        ).toString();

        await User.create({
            firstName,
            lastName,
            contactCenter,
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
            process.env.CRYPTO_SECRET
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
    const { firstName, lastName, contactCenter } = req.body;

    try {
        await User.update(
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