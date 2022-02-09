import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../Images/Logo.png'
import Link from '@mui/material/Link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Badge, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useAuth from '../../Hooks/useAuth';

const pages = ['Browse', 'Related Courses', 'Todays Deals'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Styles = {
    navLink: {
        color: 'black',
        fontFamily: 'Inter',
        fontSize: '14px',
        fontWeight: '900',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        margin: '0px 20px',
        '&:hover': {
            color: '#0D2A62',
            cursor: 'pointer'
        },
    }
}



const Header = ({ handleOpen }) => {
    const { user, logOut } = useAuth();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenBrowseMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: 'white', padding: '15px', boxShadow: '0' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <img src={logo} alt="" />
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon sx={{ color: 'black' }} />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none', fontFamily: 'Inter' },
                                }}
                            >
                                <MenuItem ><Link sx={Styles.navLink} onClick={handleOpenBrowseMenu}>Browse <KeyboardArrowDownIcon></KeyboardArrowDownIcon></Link></MenuItem>
                                <MenuItem ><Link sx={Styles.navLink}>Regulated Courses</Link></MenuItem>
                                <MenuItem ><Badge badgeContent="New" color="error">
                                    <Link sx={Styles.navLink}>Today's Deal</Link>
                                </Badge></MenuItem>
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <img src={logo} alt="" />
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
                            <Link sx={Styles.navLink} onClick={handleOpenBrowseMenu}>Browse <KeyboardArrowDownIcon></KeyboardArrowDownIcon></Link>
                            <Link sx={Styles.navLink}>Regulated Courses</Link>
                            <Badge badgeContent="New" color="error">
                                <Link sx={Styles.navLink}>Today's Deal</Link>
                            </Badge>
                        </Box>
                        <TextField id="outlined-basic" placeholder="Search" variant="outlined" sx={{ marginRight: '50px', width: '300px', display: { xs: 'none', md: 'flex' } }} InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}></TextField>
                        {user?.email ? <Button variant="contained" onClick={logOut} sx={{backgroundColor:'#009FE3 !important    '}}>SignOut</Button>

                            :
                            <Button variant="contained" sx={{ backgroundColor: '#009FE3 !important', textTransform: 'none' }} onClick={handleOpen}>Sign In</Button>}
                        <Box sx={{ flexGrow: 0, display:'flex', alignItems:'center' }}>
                            <Typography sx={{color:'#009FE3', marginLeft:'20px', fontWeight:'bold'}}>{user.email}</Typography>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenBrowseMenu} sx={{ p: 0 }}>
                                    {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem ><Link sx={Styles.navLink}>Courses</Link></MenuItem>

                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Header;