import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Hero = () => {
    let { slug } = useParams();
    const [hero, setHero] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:5000/heroes/${slug}`)
          .then(response => response.json())
          .then(data => setHero(data))
    }, [slug])

    if (!hero) {
        return <p>This hero does'nt exist</p>;
    }

    return (
        <Box
            sx={{ 
                display: 'flex',
                justifyContent: 'center,'
            }} 
        >
            <Card
                sx={{ 
                    border: '1px solid grey',
                    borderRadius: '10px',
                    bgcolor: `${hero.color}`,
                    width: 600,
                }}
            >
                <CardMedia
                    component="img"
                    height="350"
                    image={hero.image}
                    alt={`superHero ${hero.slug}`}
                />
                <CardContent>
                    <Typography 
                        variant="h3"
                        sx={{ 
                           my:2,
                        }}
                    >
                        {hero.name}
                    </Typography>
                    <Box
                        sx={{  
                            display: 'flex',
                            justifyContent: 'space-between',
                            mr: 4,
                        }}
                    >
                        <Box>
                            <Typography 
                                variant="body1"
                                my={1}
                            >
                                Age: {hero.age}
                            </Typography>
                            {hero.isAlive ? (
                            <Typography
                                variant="body1"
                                my={1}
                            >
                                Your hero is alive
                            </Typography>
                            ) : (
                            <Typography
                                variant="body1"
                                my={1}
                            >
                                Your hero is not alive
                            </Typography>
                            )}
                            <Typography 
                                variant="body1"
                                my={1}
                            >
                                Color: {hero.color}
                            </Typography>
                        </Box>
            
                        <Box>
                            <Typography 
                                variant="body1"
                                my={1}
                            >
                                Powers:  
                            </Typography>
                            {hero.power.map(powers => (  
                                <Typography 
                                    variant="body1"
                                    my={1}
                                    key={hero.index}
                                >
                                    {powers}
                                </Typography>
                            ))}
                            <Button 
                                size="small"
                                variant="text"
                                color="primary"
                            >
                                Add a power
                            </Button>
                        </Box>
                
                    </Box>

                </CardContent>
            </Card>
        </Box>
        
    )
}

export default Hero