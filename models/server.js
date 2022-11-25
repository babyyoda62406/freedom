const cors = require('cors')
const express = require('express')
const fileUpload= require('express-fileupload')

class Server {
    constructor(arg){
        this.app = express()
        this.port = arg 
        this.middlewares()
        this.db_upload()
        this.routes()
        this.run(arg)            
    }
    db_upload(){
        console.log("DB Online")
    }
    middlewares(){
        // Configuracion del Cors
        this.app.use(cors())
        // Captura de rutas privadas

        // Directorio publico
        this.app.use(express.static('public'))
        // Lectura y parseo del body
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
        // Subida de archivos
        this.app.use(fileUpload({
            useTempFiles: true , 
            tempFileDir: '/temp/'
        }))
    }
    routes(){
        // User
            // Get

            // Post

        // Admin
            // Get

            // Post
    }
    run(arg){
        this.app.listen(arg , ()=>{
            console.log(`Server runing on port: ${arg}`)
        })
    }

}

module.exports = Server