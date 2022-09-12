const express = require('express');
const cors = require('cors');
const app = express();

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares()

        //Rutas
        this.routes()
    }

    middlewares(){
        // CORS
        this.app.use(cors())

        // Lectura y parseo del body a JSON
        // Esto para poder recibir el body de los POST/PUT
        this.app.use( express.json() );

        // Directorio publico (para listar los archivos html, css, js y similar)
        this.app.use( express.static('public') )
    }

    routes() {
        // middleware condicional, puedo especificar la ruta y luego pasarle el archivo con estas
        // sin /api ni nada similar, ya que lo manejo aca
        this.app.use(this.usuariosPath, require('../routes/user.routes'));
    }

    listen() {
        //process.env => Para acceder a .env 
        //PORT viene a ser mi variable
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        });
    }
}

module.exports = Server