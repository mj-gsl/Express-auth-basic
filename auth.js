import express from 'express';
import bcrypt from 'bcryptjs';

const router = express.Router();
const users = {};

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users[username];

    if (user && await bcrypt.compare(password, user.password)) {
        req.session.userId = user.id;
        res.status(200).send('Logged in');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users[username] = { username, password: hashedPassword };
    res.status(201).send('User registered');
});

export default router;
