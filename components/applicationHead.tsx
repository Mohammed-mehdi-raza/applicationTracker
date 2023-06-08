import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import {green} from '@mui/material/colors'

const ApplicationHead = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
            <Toolbar className='app'>
                <Typography color={green[500]}>Name</Typography>
                <Typography color={green[500]}>Role</Typography>
                <Typography color={green[500]}>Location</Typography>
                <Typography color={green[500]}>CTC</Typography>
                <Typography color={green[500]}>Status</Typography>
                <Button variant='text' color="secondary" disabled >Edit</Button>
                <Button variant='text' color="error" disabled >Delete</Button>
            </Toolbar>
        </AppBar>
        </Box>
    )
}

export default ApplicationHead;
