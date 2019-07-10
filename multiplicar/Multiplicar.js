const fs = require('fs');

let crearTablas = async (base) => {
    
    let tabla = "";
    for(let i = 1;i<=10;i++){
        tabla += `${base} * ${i} = ${base*i}\n`;
    }
    await fs.writeFile(`./tablas/tabla-${base}.txt`,tabla,(err)=>{
        if(err) console.log(err)
        console.log("Tabla creada con éxito");
    })

    return tabla
}

module.exports={
    crearTablas
}