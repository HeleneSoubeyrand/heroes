import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

// import SelectInput from "../components/SelectInput"

const colorOptions = [
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    { value: "yellow", label: "Yellow" },
    { value: "green", label: "Green" },
    { value: "white", label: "White" },
    { value: "black", label: "Black" },
];


const Form = () => {
      const formik = useFormik({
        initialValues: {
            name: '', 
            image: '',
            age: 0,
            isAlive: true,
            power: '',
        },
        // validate={values => {
        //     const errors = {};
        //     if (!values.email) {
        //         errors.email = 'Required';
        //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        //         errors.email = 'Invalid email address';
        //     }
        //         return errors;
        // }}
        onSubmit: values => {
            fetch('http://localhost:5000/heroes', {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
              })
                .then(response => response.json())
                // .catch(error => setError("Hero existe deja"))
        }
    }) 

    return (
        <>
            <Box  
                sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    mt: 2,
                }}
            >
                <Typography 
                    variant="h6"
                    mb={2}
                >
                    + Add your heroes
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <Box
                        sx={{ 
                            width: 270,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,

                        }}
                    >
                        <TextField
                            type="texte"
                            name="name"
                            label="Name"
                            id="standard-basic"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            autoComplete='off'
                            inputStyle={{ color: "#FFFFFF" }}
                        />
                        <TextField
                            type="texte"
                            name="power"
                            id="standard-basic"
                            variant="outlined"
                            label="Power"
                            value={formik.values.power}
                            onChange={formik.handleChange}
                            autoComplete='off'
                        />
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Color"
                            value={formik.values.color}
                            onChange={formik.setFieldValue}
                        >
                            {colorOptions.map((option) => (
                                <MenuItem
                                    key={option.label}
                                    value={option.name}
                                >
                                    {option.name}
                                </MenuItem>
                            ))}
                        </Select>   
                        <TextField
                            type="checkbox"
                            name="isAlive"
                            id="demo-helper-text-aligned-no-helper"
                            label="Is alive ?"
                            value={formik.values.isAlive}
                            onChange={formik.handleChange}
                            autoComplete='off'
                            sx={{ input: { color: 'white' } }}
                        />
                        <TextField
                            type="number"
                            name="age"
                            id="outlined-number"
                            label="Age"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={formik.values.age}
                            onChange={formik.handleChange}
                            autoComplete='off'
                        />
                         <TextField
                            type="texte"
                            name="image"
                            id="outlined-basic"
                            variant="outlined"
                            label="Image Url"
                            value={formik.values.image}
                            onChange={formik.handleChange}
                            autoComplete='off'
                        />
                        <Button 
                            type="submit"
                            size="small" 
                            variant="contained"
                        >
                            Submit
                        </Button>
                    </Box>
                </form> 
            </Box>
        </>
    )
}

export default Form

// const handleSubmit = e => {
//     e.preventDefault()

    // fetch('http://localhost:5000/heroes', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(hero)
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     setNewHero(data)
    //     navigate('/validation')
    //     getHeroes()
    //     setError("")
    // })