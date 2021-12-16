import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import NavBar from './NavBar';

const Header = () => {
    return (
        <>
            <Box 
                sx={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    m: 2,
                }}
            >
                <Typography 
                    variant="h2"
                    sx={{ 
                        fontFamily: 'Keania One' 
                    }}
                >
                    SUPER HEROES
                </Typography>
                <NavBar/>
            </Box>
          
        </>
    )
}

export default Header

