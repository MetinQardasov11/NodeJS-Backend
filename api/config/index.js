module.exports = {
    "LOG LEVEL": process.env.LOG_LEVEL || 'debug',
    "CONNECTION_STRING": process.env.CONNECTION_STRING || 'mongodb://localhost:27017/nodejs_backend',
    "PORT": process.env.PORT || 3000
}