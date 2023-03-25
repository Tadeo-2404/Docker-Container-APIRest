import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.json({msg: "hello world"});
});

router.get('/index', (req, res) => {
    res.json({msg: "index"});
});


export default router;