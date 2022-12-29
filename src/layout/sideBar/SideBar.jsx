import React, {useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {useDispatch} from "react-redux";
import {saveCurFeature} from "../../redux/slice/pageSlice";
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import ImageIcon from '@mui/icons-material/Image';
import {useNavigate} from "react-router-dom";
import image_1 from "../../assets/one.svg";
import image_2 from "../../assets/two.svg";
import image_3 from "../../assets/three.svg";
import image_4 from "../../assets/four.svg";
import image_5 from "../../assets/five.svg";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


const SideBar = ({page, features}) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [heading, setHeading] = useState(features[0]);
    const curPage = window.location.pathname.split("/")[1];
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleBtmClick = (feature) => {
        navigate(`/${feature.toLowerCase()}`);
    }

    const icons = (name) => {
        switch (name) {
            case "Home":
                return <HomeIcon sx={{
                    color: curPage === "home" ? "#fff" : "#707070",
                }}/>
            case "Chat":
                return <ChatIcon
                    sx={{
                        color: curPage === "chat" ? "#fff" : "#707070",
                    }}
                />
            case "Image":
                return <ImageIcon
                    sx={{
                        color: curPage === "image" ? "#fff" : "#707070",
                    }}
                />
            default:
                return <HomeIcon
                    sx={{
                        color: curPage === "home" ? "primary.main" : "text.primary",
                    }}
                />
        }
    }

    const order = (index) => {
        switch (index) {
            case 0:
                return image_1;
            case 1:
                return image_2;
            case 2:
                return image_3;
            case 3:
                return image_4;
            case 4:
                return image_5;
        }
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {heading}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Home', 'Chat', 'Image'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{
                            display: 'block',
                            backgroundColor: curPage === text.toLowerCase() ? '#1e8fff' : 'white',
                            color: curPage === text.toLowerCase() ? 'white' : 'black',
                        }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                                onClick={e=>handleBtmClick(text)}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {icons(text)}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                {features?.map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block',
                    backgroundColor: heading === text ? '#1d89f5' : 'white',
                    color: heading === text ? 'white' : 'black', }}>
                        <ListItemButton
                            onClick={e=>{
                                setHeading(text);
                                dispatch(saveCurFeature(text));
                            }}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <img height={25} src={order(index)} alt=""/>
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, display: 'flex'
            , flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            }}>
                <DrawerHeader />
                {page}
            </Box>
        </Box>
    );
};

export default SideBar;
