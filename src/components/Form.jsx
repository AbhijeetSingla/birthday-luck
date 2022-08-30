import { Button, Box, Container, FormControl, TextField, Stack, Typography } from "@mui/material";
import { transparentColorBox } from "../theme/styles";
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useState } from "react";
import luckCheck from "../utils/luckCheck";

function Form() {

    const [birthDate, setBirthDate] = useState("");
    const [luckyNumber, setLuckyNumber] = useState("");
    const [output,setOutput]= useState("");

    const inputProps = {
        step: 1,
        min: 1
    }

    function submitForm(event) {
        event.preventDefault();
        setOutput(luckCheck(birthDate.format("DDMMYYYY"), luckyNumber)?"You're Lucky":"You're not Lucky");
    } 

    return ( 
        <>
            <Box sx={transparentColorBox} component="form" onSubmit={(event) => submitForm(event)} >
                <Container maxWidth="md" align="center" >
                    <FormControl sx={{ my:1, mr: "3rem" , minWidth: 220 }} >
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            <Stack spacing={3}>
                                <DesktopDatePicker
                                label="Birth Date"
                                inputFormat="DD/MM/YYYY"
                                value={birthDate}
                                onChange={(value)=> setBirthDate(value)}
                                renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>
                    </FormControl>
                    <FormControl sx={{ my: 1, ml:"3rem", minWidth: 120 }} >
                        <TextField error={luckyNumber < 0} required inputProps={inputProps} type="number" id="luckyNumber" label="Lucky Number" variant="standard" onChange={(e) => {setLuckyNumber(e.target.value)}} />
                    </FormControl>
                </Container>
                <Container maxWidth="md" align="center" sx={{ mt: 5}}>
                    <Button variant="contained" type="submit">Check</Button>
                </Container>
            </Box>
            <Container maxWidth="md" align="center" sx={{ mt:5 }}>
                    { <Typography variant="h1" component="p">{output}</Typography> }
            </Container>
        </>
     );
}

export default Form;