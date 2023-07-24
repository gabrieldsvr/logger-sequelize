const config = {
    production: {
        dialect: 'mysql',
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_LOG,
        define: {
            timestamps: false
        },
        logging: false
    },
};

module.exports = config;