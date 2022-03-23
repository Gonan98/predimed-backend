import 'dotenv/config';
import app from './app';
import sequelize from './db';

const port = process.env.PORT || 5001;

async function main() {
    try {
        await sequelize.sync({ alter: true });
        console.log('Database connected');
    } catch (error) {
        console.error('Unable to connect to database');
    }

    app.listen(port, () => {
        console.log('Server listening on port', port);
    });
}

main();
