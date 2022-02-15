import app from "./app";
import sequelize from "./db";

const port = process.env.PORT || 5000;

async function main() {

    try {
        await sequelize.sync();
        console.log('Database connected');
    } catch (error) {
        console.error('Unable to connect to the database');
    }

    app.listen(port);
    console.log('Server listening on port', port);
}

main();
