import Cryptojs from 'crypto-js';
import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../models/user.model';

export const signUp = async (req, res) => {
    const { firstName, lastName, contactCenter, username, password, isAdmin } = req.body;

    if (!firstName || !lastName || !contactCenter || !username || !password)
        return res.status(400).json({
            message: 'Some data is missing'
        });

    const hashedPassword = Cryptojs.AES.encrypt(
        password,
        config.cryptoSecret
    ).toString();

    try {
        await User.create({
            firstName,
            lastName,
            contactCenter,
            username,
            password: hashedPassword,
            isAdmin
        });

        res.status(201).json({
            message: 'User registered successfully'
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

export const signIn = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            message: 'Some data is missing'
        })
    }

    try {

        const userDB = await User.findOne({
            where: { username }
        });

        if (!userDB) return res.status(400).json({ message: 'Incorrect username or password' });

        const hashedPassword = Cryptojs.AES.decrypt(
            userDB.password,
            config.cryptoSecret
        );

        const originalPassword = hashedPassword.toString(Cryptojs.enc.Utf8);

        if (password !== originalPassword) return res.status(400).json({ message: 'Incorrect username or password' });

        const token = jwt.sign({ id: userDB.id, isAdmin: userDB.isAdmin }, config.jwtSecret, { expiresIn: 86400 });

        res.status(200).json({
            token,
            isAdmin: userDB.isAdmin
        });

    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
}

export const myProfile = async (req, res) => {
    try {
        const userDB = await User.findByPk(req.user.id, {
            attributes: {
                exclude: ['password']
            },
        });

        if (!userDB) return res.status(404).json({ message: 'User not found' });

        res.status(200).json(userDB);
    } catch (error) {
        res.status(500).json({
            message: 'An error has occurred'
        });
    }
}

