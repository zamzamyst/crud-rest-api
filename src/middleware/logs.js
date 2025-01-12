const logRequest = (req, res, next) => {
    console.log("\nTerjadi permintaan log ke path", req.path);
    next();
} 

module.exports = logRequest;