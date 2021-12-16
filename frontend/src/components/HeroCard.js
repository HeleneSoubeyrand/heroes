import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton'; 


const HeroCard = ({ hero }) => {
    return (
        <Card 
            sx={{ 
                width: 230,
                m: 2, 
                border: 1,
                borderColor: "rgba(255, 255, 255, 0.30)",
                bgcolor: `${hero.color}`
            }}
        >
            <CardMedia
                component="img"
                alt="super"
                height="200"
                image={hero.image}
            />
            <CardContent>
                <Typography 
                    variant="h4"
                    sx={{  
                        display: 'flex',
                        justifyContent: 'flex-start',
                    }}
                >
                    {hero.name}
                </Typography>
            </CardContent>
            <CardActions 
                sx={{  
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Link
                    to={`/heroes/${hero.slug}`}
                    style={{
                        textDecoration: "none",
                      }}
                >
                    <Button 
                        size="small" 
                        variant="text"
                        color="primary"
                        sx={{ ml: 1 }}
                    >
                        + Learn More
                    </Button>
                </Link>
                <IconButton 
                    aria-label="delete"
                    color="primary"
                >
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default HeroCard;  