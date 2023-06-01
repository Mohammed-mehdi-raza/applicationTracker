import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const ApplicationHead = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
            <Toolbar className='app'>
                <Typography>Name</Typography>
                <Typography>Role</Typography>
                <Typography>Location</Typography>
                <Typography>CTC</Typography>
                <Typography>Status</Typography>
                <Button variant='text' color="secondary" disabled >Edit</Button>
                <Button variant='text' color="error" disabled >Delete</Button>
            </Toolbar>
        </AppBar>
        </Box>
    )
}

export default ApplicationHead;
