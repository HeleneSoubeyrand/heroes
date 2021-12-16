import { Link } from "react-router-dom";
import Button from '@mui/material/Button';


const NavBar = () => {
    return (
        <>
            <Link
                to={"/heroes/"}
                style={{
                    textDecoration: "none",
                }}
            >
                    <Button 
                        size="large"
                        variant="text"
                        color="primary"
                        sx={{ ml: 4 }}
                    >
                        HOME
                    </Button>
            </Link>
        </>
    )
}

export default NavBar