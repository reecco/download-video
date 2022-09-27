import express from "express";
import ytdl from "ytdl-core";
import Video from "./Video.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/pt-br', (req, res) => {
    res.render('index-ptbr');
});

router.post('/download', async (req, res) => {
    let link = req.body.link;

    if (!ytdl.validateURL(link)) {
        res.render('invalid-url');
    }

    try {
        ytdl(link, { format: 'mp4' }).pipe(res);
        
        let infos = await Video.getInfoVideo(link);
        console.log(infos);
        res.header('Content-Disposition', `attachment; filename=${infos.title}.mp4`);
    } catch (error) {
        res.render('error', {error: error});
    }
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/:any', (req, res) => {
    let any = req.params.any;
    res.render('not-found');
});

export default router;