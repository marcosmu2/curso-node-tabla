const fs = require('fs');
let colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = '';
    let consola = '';

    for (let index = 1; index <= hasta; index++) {
      salida += `${base} x ${index} = ${index * base}\n`;
      consola += colors.green(
        `${base} x ${index} = ${index * base}\n`
      );
    }

    if (listar) {
      console.log('=========================');
      console.log(colors.italic.bold.yellow('     Tabla del ', base));
      console.log('=========================');

      console.log(consola);
    }

    const nombreArchivo = `./salida/tabla-${base}.txt`;

    fs.writeFileSync(nombreArchivo, salida);

    return nombreArchivo;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo: crearArchivo,
};
