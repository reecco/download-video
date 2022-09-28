import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/pt-br', (req, res) => {
    res.render('pt-br/index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/about/:lang', (req, res) => {
    let lang = req.params.lang;
    if (lang == 'pt-br') {
        res.render('pt-br/about');
    } else {
        res.render('not-found', { message: 'This page was not found' });
    }
});

router.get('/:any', (req, res) => {
    let any = req.params.any;
    res.render('not-found', { message: 'This page was not found' });
});

export default router;