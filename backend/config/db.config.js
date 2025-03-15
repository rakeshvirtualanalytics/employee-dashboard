require('dotenv').config();

module.exports = {
    HOST: process.env.NODE_DB_HOST,
    USER: process.env.NODE_DB_USER,
    PASSWORD: process.env.NODE_DB_PASSWORD,
    DATABASE: process.env.NODE_DB_NAME
};