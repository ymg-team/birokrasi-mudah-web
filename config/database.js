export default {
    development: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'birokrasimudah'
    },
    staging: {
        host: '192.168.12.51',
        user: 'db3sbdev',
        password: 'garansiapi12tahunj0s',
        database: 'db3sbdev'
    },
    production: {
        host: '192.168.12.51',
        user: 'db3sbdev',
        password: 'garansiapi12tahunj0s',
        database: 'db3sbdev'
    }
}
