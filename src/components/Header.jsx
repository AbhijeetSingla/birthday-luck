import { Box, Typography, Container } from '@mui/material';
import { primaryColorBox } from '../theme/styles';

function Header() {

    return ( 
        <>
            <Box component="header" sx={primaryColorBox}>
                <Container maxWidth="md" >
                    <Typography variant="h1" component="h1" align="center">
                        Birthday Luck
                    </Typography>
                </Container>
            </Box>
            <Container sx={{mt: "2rem"}} maxWidth="md" >
                This app checks if your birthday is lucky or not. The date's digits are summed up and then checked if its divisible by your lucky number or not.
            </Container>
        </>
     );
}

export default Header;