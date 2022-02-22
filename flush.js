module.exports = async () => {
  try {
    const {CliUx} = require('./lib')
    await CliUx.ux.flush()
  } catch {}
}
