const express = require('express');
const mahasiswaController = require('../controller/mahasiswa');

const router = express.Router();

router.post("/", mahasiswaController.createMahasiswa);

router.get("/", mahasiswaController.readAllMahasiswa);

router.get("/:nim", mahasiswaController.readMahasiswa);

router.patch("/:nim", mahasiswaController.updateMahasiswa);

router.delete("/:nim", mahasiswaController.deleteMahasiswa);

module.exports = router;