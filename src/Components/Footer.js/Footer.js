import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Footer = () => {
    return (
        <Box>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8} xl={3}>
                            <Item>xs=8</Item>
                        </Grid>
                        <Grid item xs={4} xl={3}>
                            <Item>xs=4</Item>
                        </Grid>
                        <Grid item xs={4} xl={3}>
                            <Item>xs=4</Item>
                        </Grid>
                        <Grid item xs={8} xl={3}>
                            <Item>xs=8</Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;