const express = require('express');
const lib = require('../multiavatar');
const svg2img = require('svg2img');

const app = express();

const port = 3000

app.get('/:string', async (req, res) => {
    try {
        if (!req.params.string) throw 'Wrong parameter';


        const svg = lib.multiavatar(req.params.string);
        if (!svg) throw 'Something went wrong';

        // if (req.query.render) {
        res.send(svg)
        // }
        // else {
        //     svg2img(svg, { 'width': 1024, 'height': 1024 }, function (error, buffer) {
        //         console.log(error);

        //         res.send(buffer)
        //     });
        // }


    } catch (error) {
        console.log(error);
        res.status(500).json({ error })
    }
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})