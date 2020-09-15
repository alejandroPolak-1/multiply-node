const fs = require('fs')
const {} = require('colors');

let listTable = (base, limit = 10) => {

    console.log('================================'.green);
    console.log(`Tabla de base ${base} hasta factor ${limit}`.cyan);
    console.log('================================'.green);

    for (let i = 1; i <= limit; i++) {
        console.log((`${base} * ${i} = ${base * i} \n `).red);

    }
}


let createFile = (base, limit = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`The value you enter ${base} is not a number`)
            return;
        }

        let data = '';

        for (let i = 1; i <= limit; i++) {
            data += (`${base} * ${i} = ${base * i} \n `);
        }

        fs.writeFile(`./tablas/table-${base}-limit-${limit}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`table-${base}-limit-${limit}.txt`)
        });

    })
}

module.exports = {
    createFile,
    listTable
}