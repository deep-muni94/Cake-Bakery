const express = require('express');
const router = express.Router();
const method = require('../controller/OrderController');

router.get('/getorder', async function (req, res) {
    const data = await method.getOrder();
    res.send(data);
});

module.exports = router;
