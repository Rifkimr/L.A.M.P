import express from "express";
import { Request, Response } from 'express';
import createTeacher, { userLogin } from "../service/auth.service";
import * as bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import multer, { Multer } from 'multer';
import cloudinary from 'cloudinary';
import jwt from 'jsonwebtoken'; // Import library JWT
import * as cookie from 'cookie';
const db = new PrismaClient();

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send("ini v1")
})

router.post('/auth/register', async (req: Request, res: Response) => {
    try {
        const data = req.body;

        console.log("ini reqbody", data);

        const newUser = await createTeacher(data)


        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
});

router.post('/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userLogin(email)

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Incorrect email or password.' });
        }

        const token = jwt.sign({ userId: user.id, name: user.name, role: user.role, attachment: user.attachment }, 'kuncinyabroh', {
            expiresIn: '1h',
        });

        res.setHeader(
            'Set-Cookie',
            cookie.serialize('token', token, {
                httpOnly: true,
                maxAge: 3600,
                sameSite: 'strict',
                path: '/',
            })
        );

        res.status(200).json({ message: 'Authentication successful.', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while attempting to log in.' });
    }
});




cloudinary.v2.config({
    cloud_name: 'djhgxoqqh',
    api_key: '524875873527981',
    api_secret: 'vdySQK--pQjVIz6l6vUcENdHowQ',
});

const storage = multer.memoryStorage();
const upload: Multer = multer({ storage });


router.post('/video', upload.single('video'), async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No video file uploaded' });
        }

        // Mengunggah video ke Cloudinary
        cloudinary.v2.uploader.upload_stream({ resource_type: 'video' }, async (error, result) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ error: 'Failed to upload video to Cloudinary' });
            }

            // Dapatkan URL video dari Cloudinary
            const videoUrl = result?.secure_url;

            try {
                // Simpan URL video ke database atau lakukan tindakan lain yang Anda butuhkan
                // Di sini, Anda bisa menyimpan URL video ke database jika diperlukan
                // contoh: await saveVideoUrlToDatabase(videoUrl);

                // Kemudian, Anda dapat mengirimkan respons dengan URL video
                res.status(201).json({ videoUrl });
            } catch (updateError) {
                console.error(updateError);
                res.status(500).json({ error: 'Failed to save video URL' });
            }
        }).end(req.file.buffer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
});






export default router;