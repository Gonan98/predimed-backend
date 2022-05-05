import app from './app';
import config from './config';
import sequelize from './db';

async function main() {
    try {
        // await sequelize.sync({ alter: true });
        await sequelize.sync({ force: true });
        console.log('Database connected');
    } catch (error) {
        console.error('Unable to connect to database');
    }

    app.listen(config.port, () => {
        console.log('Server listening on port', config.port);
    });
}

main();
