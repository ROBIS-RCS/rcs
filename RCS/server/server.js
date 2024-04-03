import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken'
import supabase from './config.mjs';
// import cookieParser from 'cookie-parser';

const app = express();

app.use(cors()) // {origin : 'http://localhost:3000', credentials : true}
app.use(express.json())
// app.use(cookieParser());

app.post('/login', async (req, res) => {
    let userId = req.body.emp_id;
    let pass = req.body.password;
    let role = req.body.role;
    console.log(userId, pass, role);
    let user_det = {
        id: '',
        name: '',
        emp_id: '',
        role: '',
        password: ''
    }
    try {
        const {
            data: users,
            error
        } = await supabase
            .from('users')
            .select("*").eq('emp_id', userId)
        // console.log(users);

        if (!users || users?.length === 0) return res.json({
            data: users,
            success: false,
            message: "There's no such user!"
        })
        user_det.id = users[0].id;
        user_det.name = users[0].name;
        user_det.emp_id = users[0].emp_id;
        user_det.role = users[0].role;
        user_det.password = users[0].password;
        // console.log(user_det);
    } catch (error) {
        return res.json({
            message: 'problem while retrieving from supabase',
            err: error
        })
    }
    if (role !== user_det?.role) return res.json({
        success: false,
        message: 'no such role, vro!'
    })
    if (pass !== user_det?.password) return res.json({
        success: false,
        message: 'wrong password!'
    })
    const jwtToken = jwt.sign({
            id: user_det.id,
            user: user_det.name,
            role: user_det.role
        },
        '8F6DAD2C3EAFB7B7C3A9FDC71B81E8D3B6A88C6A7850B6A74CD12CCE1FAD4C92', { // secret_key
            expiresIn: "1h"
        });
    res.json({
        success: true,
        user_data: user_det,
        message: 'Logged in, and Welcome back',
        token: jwtToken,
    })
});


app.listen(4000, () => {
    console.log('Connected successfully!');
})