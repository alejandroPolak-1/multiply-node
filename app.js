const { argv } = require('./config/yargs')
const colors = require('colors/safe');

const { createFile, listTable } = require('./multiply/multiply');


let comand = argv._[0];


switch (comand) {
    case 'list':
        listTable(argv.base, argv.limite)
        break;

    case 'create':
        createFile(argv.base, argv.limite)
            .then(archivo => console.log(`File created: `, colors.green(archivo)))
            .catch(console.log)
        break;

    default:
        console.log("command not recognized".red.bgYellow);
}