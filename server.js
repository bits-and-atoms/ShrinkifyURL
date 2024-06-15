const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()

mongoose.connect('mongodb://0.0.0.0:27017/', {
  // useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
// app.set('view engine', 'ejs'): Sets EJS as the templating engine.
// app.use(express.urlencoded({ extended: false })): Parses URL-encoded data from the body of requests.
app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.render('index', { shortUrls: shortUrls })
})
// Retrieves all shortened URLs from the database using ShortUrl.find().
// Renders the index.ejs template, passing the list of shortened URLs as shortUrls.
app.post('/shortUrls', async (req, res) => {
  await ShortUrl.create({ full: req.body.completeUrl })

  res.redirect('/')
})
// Creates a new shortened URL entry in the database with the full URL provided in the form (via req.body.completeUrl).
// Redirects back to the home page (/).
app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)

  shortUrl.clicks++
  shortUrl.save()

  res.redirect(shortUrl.full)
})
// Searches for a shortened URL entry matching the shortUrl parameter in the database.
// If not found, sends a 404 status (res.sendStatus(404)).
// If found, increments the clicks count for the short URL.
// Redirects to the full URL.
app.listen(process.env.PORT || 5000);