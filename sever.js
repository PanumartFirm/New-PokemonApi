const app = require('./app')   // ชื่อไฟล์
const port = 3000

app.listen(port, () => console.log(`Pokemon API listening on port ${port}!`))