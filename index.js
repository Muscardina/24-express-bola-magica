const express = require('express')
const app = express()
const port = 3000

//app.get('/magia', (req, res) => {
//res.send('Hello World!')
//})

const respuestas = ["It is certain", "Reply hazy", "Try again", "Don’t count on it", "It is decidedly so", "Ask again later", "My reply is no",
"Without a doubt", "Better not tell you now", "My sources say no", "Yes definitely", "Cannot predict now", "Outlook not so good", "You may rely on it",
"Concentrate and ask again", "Very doubtful", "As I see it- yes", "Most likely", "Outlook good", "Yes", "Signs point to yes"];

app.get("/magia", (req, res) => {
    pregunta = respuestas[Math.floor(Math.random() * respuestas.length)];
    res.send(pregunta);
})


app.listen(port, () => {
  console.log(`Esto chufla en el puerto ${port}`)
})

