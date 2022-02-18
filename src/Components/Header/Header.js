import React, { useContext, useEffect, useState } from 'react';

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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Badge, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import { CourseDataContext } from '../../Contexts/CourseDataProvider';
import { FaShoppingCart } from "react-icons/fa";
import Form from '../Form/Form';



const Styles = {
    navLink: {
        color: 'black',
        fontFamily: 'Inter',
        fontSize: '16px',
        fontWeight: '600',
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



const Header = ({ color }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


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


    const [courseList, setCourseList] = useState([]);
    useEffect(() => {
        fetch('/coursedata.json')
            .then(data => data.json())
            .then(data => setCourseList(data))
    }, []);

    const [cart] = useContext(CourseDataContext)

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: color, padding: '15px', boxShadow: '0' }}>
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <img src={logo} alt="" />
                        </Typography>


                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <img src={logo} alt="" />
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center', alignItems: 'center' } }}>
                            <Link to='/home' style={Styles.navLink}>Home</Link>
                            <Link to='' style={Styles.navLink} onClick={handleOpenBrowseMenu}>Browse <KeyboardArrowDownIcon></KeyboardArrowDownIcon></Link>
                            <Link to='' style={Styles.navLink}>Regulated Courses</Link>
                            <Badge badgeContent="New" color="error">
                                <Link to='/allcategories' style={Styles.navLink}>Today's Deal</Link>
                            </Badge>
                            <Link to='/quiz' style={Styles.navLink}>Free Quiz</Link>
                            <Badge badgeContent={cart.length} color='error' sx={{ fontSize: '20px' }}><Link to='/cart' style={{ textDecoration: 'none' }}>
                                < FaShoppingCart />
                            </Link></Badge>
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
                        {user?.email ? <Button variant="contained" onClick={logOut} sx={{ backgroundColor: '#009FE3 !important' }}>SignOut</Button>

                            :
                            <Button variant="contained" sx={{ backgroundColor: '#009FE3 !important', textTransform: 'none', width: '124px', height: '51px', borderRadius: '8px', fontSize: '16px', fontFamily: 'Inter', fontWeight: 'bold', display:{xs:'none', xl:'block', md:'block'} }} onClick={handleOpen}>Sign In</Button>}

                        <Form open={open} handleClose={handleClose} />
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent: 'flex-end'} }}>
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
                                <MenuItem ><Link to='/home' style={Styles.navLink}>Home</Link></MenuItem>
                                <MenuItem ><Link to='' style={Styles.navLink} onClick={handleOpenBrowseMenu}>Browse <KeyboardArrowDownIcon></KeyboardArrowDownIcon></Link></MenuItem>
                                <MenuItem ><Link to='' style={Styles.navLink}>Regulated Courses</Link></MenuItem>
                                <MenuItem ><Badge badgeContent="New" color="error">
                                    <Link to='/allcategories' style={Styles.navLink}>Today's Deal</Link>
                                </Badge></MenuItem>
                                <MenuItem><Button variant="contained" sx={{ backgroundColor: '#009FE3 !important', textTransform: 'none', width: '124px', height: '51px', borderRadius: '8px', fontSize: '16px', fontFamily: 'Inter', fontWeight: 'bold' }} onClick={handleOpen}>Sign In</Button></MenuItem>
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ color: '#009FE3', marginLeft: '0px', fontWeight: 'bold' }}>{user.email}</Typography>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenBrowseMenu} sx={{ p: 0 }}>
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
                                {courseList.map(course => (
                                    <MenuItem key={course.id}><Link to={`/coursedetail/${course.id}`} style={Styles.navLink}>{course.title}</Link></MenuItem>
                                ))}

                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Header;