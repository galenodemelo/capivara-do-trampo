import { db } from "../../database/connection"

export default function handler(req, res) {
    const dbConnection = require("../../database/connection")
    
    const reqData = JSON.parse(req.body)
    const phone = reqData.phone.replace(/\D/g,'')
    const name = reqData.name
    dbConnection.run(`INSERT INTO student (phone, name)
                 VALUES ("${phone}", "${name}")`)

    console.log(dbConnection.run("SELECT * FROM student"))

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ message: `Enviamos um convite para o aluno ${name}` }))
}