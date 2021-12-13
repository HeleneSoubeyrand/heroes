const express = require("express")
const app = express()
const axios = require('axios')

let heroes = require("../superHeroes.json")


const checkHero = (req, res, next) => {
  const { slug } = req.params
  const hero = heroes.find(hero => hero.slug === slug)

  if (!hero) {
    res.status(404).send("Not found")
  } else {
    next()
  }
}

const addHero = (req, res, next) => {
  const { slug } = req.params
  const hero = heroes.find(hero => hero.slug === slug)

  if (hero) {
    res.status(404).send("This hero already exist")
  } else {
    next()
  }
}

const validateHero = (req, res, next) => {
  const a = Object.keys(heroes[0])
  const b = Object.keys(req.body)

  if (JSON.stringify(a) === JSON.stringify(b)) {
    next()
  } else {
    res.status(404).send("Not found")
  }
}


// GET

app.get("/", (req, res) => {
    res.json(heroes)
})

app.get("/:slug", checkHero, (req, res) => {
  const { slug } = req.params
  const hero = heroes.find(hero => hero.slug === slug)
  res.json(hero)
})

app.get("/:slug/powers", checkHero, (req, res) => {
  const { slug } = req.params
  const hero = heroes.find(hero => hero.slug === slug)
  const power = hero.power.map (e => e)
  res.json(power)
})


// POST

app.post("/:slug", addHero, (req, res) => {
  const hero = {
    ...req.body
  }
  heroes = [ ...heroes, hero ]
  res.json(hero)
})


// PUT

app.put("/:slug", validateHero, (req, res) => {
  const { slug } = req.params
  const index = heroes.findIndex(hero => hero.slug === slug)
  hero = {
    ...req.body
  }
  heroes.splice(index, 1, hero)
  res.json(hero)
})

app.put("/:slug/powers", checkHero, (req, res) => {
  const { slug } = req.params
  const { power } = req.body
  const hero = heroes.find(hero => hero.slug === slug)
  hero.power = [...hero.power, power]

  res.json(hero)
})


// DELETE

app.delete("/:slug", validateHero, (req, res) => {
  const { slug } = req.params
  const hero = heroes.find(hero => hero.slug === slug)
  heroes = heroes.filter(hero => hero.slug !== slug)
  res.json(`${hero.name} a été effacé`)
})

app.delete("/:slug/power/:power", checkHero, (req, res) => {
  const { slug, power } = req.params
  let hero = heroes.find(hero => hero.slug === slug)
  newPowers = hero.power.filter(e => e !== power)
  hero.power = newPowers
  res.json(`Le pouvoir ${power} de ${hero.name} a été effacé`)
})

module.exports = app
