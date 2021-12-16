import { createContext } from "react"

const HeroesContext = createContext({})

const HeroesProvider = ({ children }) => {
  // const [newHero, setNewHero] = useState(null)

  const getHeroes = () => {
    return fetch(`http://localhost:5000/heroes`)
      .then(response => response.json())
      .then(data => console.log(data) )
  }

  const getHero = (slug) => {
    return fetch(`http://localhost:5000/heroes/${slug}`)
      .then(response => response.json())
      .then(data => data)
  }

  const deleteHero = slug => {
    return fetch(`http://localhost:5000/heroes/${slug}`, {
      method : 'delete'
    })
    .then(response => response)
  }

  const value = {
    getHeroes,
    getHero,
    deleteHero,
    // newHero,
    // setNewHero
  }

  return (
    <HeroesContext.Provider value={value}>
      {children}
    </HeroesContext.Provider>
  )
}

export {
  HeroesContext,
  HeroesProvider
}