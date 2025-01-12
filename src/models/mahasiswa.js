const db = require('../config/database')

// CREATE Query
const insert_dataMahasiswa = (body) => {
    const sqlQuery = `INSERT INTO data_mahasiswa (nim, nama, jurusan, fakultas, domisili)
                        VALUES (${body.nim}, '${body.nama}', '${body.jurusan}', '${body.fakultas}', '${body.domisili}')`;

    return db.execute(sqlQuery)
}

// READ (All) Query
const selectAll_dataMahasiswa = () => {
    const sqlQuery = `SELECT * FROM data_mahasiswa`;
    
    return db.execute(sqlQuery);
}

// READ (by NIM) Query
const select_dataMahasiswa = (nim) => {
    const sqlQuery = `SELECT * FROM data_mahasiswa
                        WHERE nim = '${nim}'`;

    return db.execute(sqlQuery);
}

// UPDATE (by NIM) Query
const update_dataMahasiswa = (body, nim) => {
    const sqlQuery = `UPDATE data_mahasiswa
                        SET nim = '${body.nim}',
                            nama = '${body.nama}', 
                            jurusan = '${body.jurusan}', 
                            fakultas = '${body.fakultas}', 
                            domisili = '${body.domisili}'
                        WHERE nim = '${nim}'`;

    return db.execute(sqlQuery)
}

// DELETE (by NIM) Query
const delete_dataMahasiswa = (nim) => {
    const sqlQuery = `DELETE FROM data_mahasiswa
                        WHERE nim = '${nim}'`
                        
    return db.execute(sqlQuery)
}

module.exports = {
    insert_dataMahasiswa,
    selectAll_dataMahasiswa, 
    select_dataMahasiswa, 
    update_dataMahasiswa,
    delete_dataMahasiswa,
}