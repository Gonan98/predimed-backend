import app from './app';
import config from './config';
import sequelize from './db';

import './models';

async function main() {
    try {
        await sequelize.drop();
        await sequelize.sync();
        console.log('Database connected');
    } catch (error) {
        console.error('Unable to connect to database');
    }

    app.listen(config.port, () => {
        console.log('Server listening on port', config.port);
    });
}

main();
