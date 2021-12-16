const express = require("express")
const app = express()
const axios = require('axios')

let heroes = require("../superHeroes.json")


const checkHero = (req, res, next) => {
  const { slug } = req.params
  const hero = heroes.find(hero => hero.slug === slug)

  if (!hero) {
    res.status(404).send("Hero not found")
  } else {
    next()
  }
}

const toAddHero = (req, res, next) => {
  const { name } = req.body
  const hero = heroes.find(hero => hero.name === name)

  if (hero) {
    res.status(409).send("This hero already exist")
  } else {
    next()
  }
}

const validateHero = (req, res, next) => {
  const a = Object.keys(heroes[0])
  const b = Object.keys(req.body)

 
}


// GET

app.get("/", (req, res) => {
  res.json(heroes)
})

app.get("/:slug", checkHero, (req, res) => {
  const { slug } = req.params
  // = const slug = req.params.slug
  const hero = heroes.find(hero => hero.slug === slug)

  res.json(hero)
})

app.get("/:slug/powers", checkHero, (req, res) => {
  const { slug } = req.params
  const hero = heroes.find(hero => hero.slug === slug)

  res.json(hero.power)
})


// POST

app.post("/", toAddHero, (req, res) => {
  const hero = {
    slug: req.body.name.toLowerCase(),
    ...req.body 
  }
  heroes = [ ...heroes, hero ]

  res.json(hero)
})


// PUT

app.put("/:slug", validateHero, (req, res) => {
  const { slug } = req.params
  const hero = {
    ...req.body
  }
  const index = heroes.findIndex(hero => hero.slug === slug)
  // heroes.splice(index, 1, hero)

  heroes[index] = {
    ...heroes[index],
    ...req.body,
  }

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

app.delete("/:slug", checkHero,  (req, res) => {
  const { slug } = req.params
  const hero = heroes.find(hero => hero.slug === slug)
  heroes = heroes.filter(hero => hero.slug !== slug)

  res.json(`${hero.name} a été effacé`)
})

app.delete("/:slug/power/:power", checkHero, (req, res) => {
  const { slug, power } = req.params
  let hero = heroes.find(hero => hero.slug === slug)
  hero.power = hero.power.filter(p => p !== power)

  res.json(`Le pouvoir ${power} de ${hero.name} a été effacé`)
})

module.exports = app
