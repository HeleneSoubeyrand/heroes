import { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom"
import { HeroesContext } from "../context/Heroes"

import HeroCard from "../components/HeroCard"
import Box from '@mui/material/Box';


const List = () => {
    const { getHeroes } = useContext(HeroesContext)
    const [heroes, setHeroes] = useState([])
    // let { slug } = useParams();

    useEffect(() => {
        getHeroes()
        .then(response => setHeroes(response))
    }, [])

    return (
        <Box  
            sx={{  
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
            }}
        >
            {heroes.map((hero, index) => (
                <HeroCard 
                    key={index} 
                    hero={hero}
                    slug={hero.slug}
                />
            ))}
        </Box>
    )
}

export default List