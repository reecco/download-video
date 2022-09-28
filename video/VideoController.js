import express from 'express';
import ytdl from 'ytdl-core';

import Video from './Video.js';

const router = express.Router();

router.post('/search', async (req, res) => {
    let url = req.body.url;
    let filter = req.body.filter;
    
    if (!ytdl.validateURL(url)) {
        res.render('invalid-url');
    }

    try {
        let infos = await Video.getInfoVideo(url);

        res.render('video', {infos, filter});
    } catch (error) {
        res.render('error', { message: `Ocorreu um erro, verifique se a URL é válida. ${error}` });
    }
});

router.post('/download', (req, res) => {
    let url = req.body.url;
    let filter = req.body.filter;
    let title = req.body.title;

    try {
        if (filter == 'fullvideo') {
            ytdl(url, { format: 'mp4', filter: 'audioandvideo' }).pipe(res);
        } else {
            ytdl(url, {format: 'mp4', filter: 'audioonly'}).pipe(res);
        }
        
        res.header('Content-Disposition', `attachment; filename=${title}.mp4`);
    } catch (error) {
        res.render('error', { message: `Ocorreu um erro, verifique se a URL é válida. Error: ${error}` });
    }
});

export default router;