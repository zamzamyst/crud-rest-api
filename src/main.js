const express = require('express');
const logRequest = require('./middleware/logs');
const mahasiswaRoutes = require("./routes/mahasiswa");

const PORT = 3000;

const app = express();

app.use(logRequest); 
app.use(express.json());

app.use("/mahasiswa", mahasiswaRoutes);

app.listen(PORT, () => {
    console.log("Program dimulai!");
    console.log("Server berjalan di port", PORT)
})