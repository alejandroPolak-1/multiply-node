const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('list', 'print the multiplication table', opts)
    .command('create', 'generates a file with the multiplication table', opts)
    .help()
    .argv

module.exports = {
    argv
}