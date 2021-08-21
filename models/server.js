const express = require('express');
const cors = require('cors');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        // this.usersPath = '/api/users'
        this.pokemonPath = '/pokemones';

        //MIDDLEWARE
        this.middleware();

        //ROUTES
        this.routes();

    }

    middleware() {
        //CORS
        this.app.use(cors());
        //LECTURA Y PARSEO DEL BODY
        this.app.use(express.json());

        //DIRECTORIO PUBLICO
        this.app.use(express.static('public'));
    }

    routes() {

        // this.app.use(this.usersPath, require('../routes/users.routes'));
        this.app.use(this.pokemonPath, require('../routes/pokemones.routes'));

    }

    start() {
        this.app.listen(this.port, () => {
            console.log('Server is running on port: ' + this.port);
        });
    }
}


module.exports = Server;