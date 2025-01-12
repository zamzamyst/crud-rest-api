const mahasiswaModels = require('../models/mahasiswa'); 

// CREATE Controller
const createMahasiswa = async (req, res) => {
    const body =  req.body; 
    const nim =  body.nim; 

    try {
        const [selectResult] = await mahasiswaModels.select_dataMahasiswa(nim);
        if (selectResult.length === 1) {
            console.log(`\nGAGAL! Data mahasiswa dengan NIM ${nim} sudah terdaftar.\n`, selectResult,);
            return res.status(409).json({
                message: `GAGAL! Data mahasiswa dengan NIM ${nim} sudah terdaftar.`,
                data: null
            })
        }

        const [insertResult] = await mahasiswaModels.insert_dataMahasiswa(body)
        console.log(`\nSUKSES! Data mahasiswa dengan NIM ${nim} berhasil disimpan.\n`, insertResult, `\n`, body);
        res.json({
            message: `SUKSES! Data mahasiswa dengan NIM ${nim} berhasil disimpan.`,
            data: body
        })            

    } catch (error) {
        console.error("\n", error);
        res.status(500).json({
            message: `ERROR! Terjadi kesalahan pada server.`,
            serverMessage: error
        })
    }
}

// READ (All) Controller
const readAllMahasiswa = async (req, res) => {
    
    try {
        const [selectAllResult] = await mahasiswaModels.selectAll_dataMahasiswa();
        console.log(`\nSUKSES! ${selectAllResult.length} data mahasiswa berhasil ditampilkan.`);
        res.json({
            message: `SUKSES! ${selectAllResult.length} data mahasiswa berhasil ditampilkan.`,
            data: selectAllResult
        })

    } catch (error) {
        console.error("\n", error);
        res.status(500).json({
            message: "ERROR! Terjadi kesalahan pada server.",
            serverMessage: error
        })
    } 
}

// READ (by NIM) Controller
const readMahasiswa = async (req, res) => {
    const nim = req.params.nim;

    try {
        const [selectResult] = await mahasiswaModels.select_dataMahasiswa(nim);
        if (selectResult.length === 0) {
            console.log(`\nGAGAL! Data mahasiswa dengan NIM ${nim} tidak terdaftar.\n`, selectResult)
            return res.status(404).json({
                message: `GAGAL! Data mahasiswa dengan NIM ${nim} tidak terdaftar.`,
                data: null
            })
        }

        console.log(`\nSUKSES! Data mahasiswa dengan NIM ${nim} berhasil ditampilkan\n`, selectResult);
        res.json({
            message: `SUKSES! Data mahasiswa dengan NIM ${nim} berhasil ditampilkan.`,
            data: selectResult
        })

    } catch (error) {
        console.error("\n", error);
        res.status(500).json({
            message: "ERROR! Terjadi kesalahan pada server.",
            serverMessage: error
        })
    } 
}

// UPDATE (by NIM) Controller 
const updateMahasiswa = async (req, res) => { 
    const nim = req.params.nim;
    const body =  req.body;

    try { 
        const [selectResult] = await mahasiswaModels.select_dataMahasiswa(nim);
        if (selectResult.length === 0) {
            console.log(`\nGAGAL! Data mahasiswa dengan NIM ${nim} tidak terdaftar.\n`, selectResult);
            return res.status(404).json({
                message: `GAGAL! Data mahasiswa dengan NIM ${nim} tidak terdaftar.`,
                data: null
            })
        }

        const [updateResult] = await mahasiswaModels.update_dataMahasiswa(body, nim);
        console.log(`\nSUKSES! Data mahasiswa dengan NIM ${nim} berhasil diperbarui.\n`, updateResult, `\n`, body);
        res.json({
            message: `SUKSES! Data mahasiswa dengan NIM ${nim} berhasil diperbarui.`,
            data: body
        })

    } catch (error) {
        console.error("\n", error);
        res.status(500).json({
            message: 'ERROR! Terjadi kesalahan pada server.',
        })
    }     
}

//  DELETE (by NIM) Controller
const deleteMahasiswa = async (req, res) => {
    const nim = req.params.nim;
    
    try {
        const [selectResult] = await mahasiswaModels.select_dataMahasiswa(nim);
        if (selectResult.length === 0) {
            console.log(`\nGAGAL! Data mahasiswa dengan NIM ${nim} tidak terdaftar.\n`, selectResult);
            return res.status(404).json({
                message: `GAGAL! Data mahasiswa dengan NIM ${nim} tidak terdaftar.`,
                data: null
            })
        }

        const dataDeleted = selectResult[0]

        const [deleteResult] = await mahasiswaModels.delete_dataMahasiswa(nim);
        console.log(`\nSUKSES! Data mahasiswa dengan NIM ${nim} berhasil dihapus.\n`, deleteResult, `\n`, dataDeleted);
        res.json({
            message: `SUKSES! Data mahasiswa dengan NIM ${nim} berhasil dihapus.`,
            data: null
        })
        
    } catch (error) {
        console.error("\n", error);
        res.status(500).json({
            message: 'ERROR! Terjadi kesalahan pada server.',
        })
    }
}

module.exports = {
    createMahasiswa,
    readAllMahasiswa,
    readMahasiswa,
    updateMahasiswa,
    deleteMahasiswa,
}