const express = require('express');
const app = express();
app.get("/:id", (req, res) => {
    const id = req.params.id
    res.json({message: Number(id)+1})
} )

app.listen(3000, () =>{
    console.log('servidor está rodando na porta 3000')
})