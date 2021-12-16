import List from '../components/List'
import Form from '../components/Form'
import Box from '@mui/material/Box';


const Home = () => {
    return (
    <>
        <Box
            sx={{  
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <List /> 
            <Form />
        </Box>
    </>
    )
}

export default Home
