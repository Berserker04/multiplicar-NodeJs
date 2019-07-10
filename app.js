const {crearTablas} = require("./multiplicar/Multiplicar");



crearTablas(3)
    .then(res=>console.log(res))
    .catch(e=>{console.log("El error fue => ",e)})