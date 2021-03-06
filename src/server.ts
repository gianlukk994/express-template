import app from './app'

import { databaseConnection } from './config'
import { appUrl, port } from './config/dotenv'

databaseConnection.create().then(() => {
  app.listen(port, () => {
    console.log(`The server is up and running here: http://${appUrl}:${port}`)
  })
})

export default app
