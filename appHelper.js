const appCallback = () => {
  serverHostAndPort = `${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`
  message = `Server is running on ${serverHostAndPort}`
  
  console.log(message)
}

module.exports = { appCallback }