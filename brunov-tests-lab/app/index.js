const express = require('express')
const app = express()
const port = 5000

app.get('/stats', (req, res) => {
  res.json({
    items: [
      { title: "Alcelora", text: "Bom pra tosse", subtext: "fruta" },
      { title: "Alcelora", text: "Bom pra gripe", subtext: "fruta" },
      { title: "Limao", text: "Natural", subtext: "fruta" },
      { title: "Limao", text: "nao natural", subtext: "fruta" }
    ],
    link: "mylink",
    refresh: 5000,
    type: "four-stats"
  })
})

app.listen(port, () => {
  console.log(`Mock API listening at http://localhost:${port}`)
})
