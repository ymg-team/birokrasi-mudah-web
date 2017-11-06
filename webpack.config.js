const { env } = process
const defaultConf = require('./config/webpack/index')
const productionConf = require('./config/webpack/production')

let Config = defaultConf

if(env.NODE_ENV === 'production') Config.plugins.push(productionConf)

module.exports = Config