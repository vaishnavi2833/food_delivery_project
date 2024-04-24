import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const navigateToProfile = () => {
        navigate('/my-profile');
    };

    const handleLogOut = () => {
        console.log('Logout');
    };

    return (
        <nav className='px-5 z-50 py-[0.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>
            <div className='flex items-center space-x-4'>
                <div className='lg:mr-10 cursor-pointer flex items-center' onClick={() => navigate('/')}>
                    <li className='logo font-semibold text-gray-300 text-2xl'>Zosh Food</li>
                </div>
            </div>
            <div className='flex items-center space-x-5'>
                <IconButton>
                    <SearchIcon sx={{ fontSize: '1.5rem' }} />
                </IconButton>
                
                {true?<span
                 id="basic-button"
                 aria-controls={openMenu ? 'basic-menu' : undefined}
                 aria-haspopup="true"
                 aria-expanded={openMenu ? 'true' : undefined}
                 onClick={handleOpenMenu} 
                 className='font-semibold cursor-pointer'
                >
                    Vaishnavi
                </span>:
                <PersonIcon sx={{ fontSize: '1.5rem' }} onClick={navigateToProfile} className='cursor-pointer'/>}
                
                <Menu
                    id='basic-menu'
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={() => navigate('/admin')}>Profile</MenuItem>
                    <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                </Menu>

                <IconButton onClick={()=>{navigate('/cart')}}>
                    <ShoppingCartIcon sx={{ fontSize: '1.5rem' }} />
                </IconButton>
            </div>
        </nav>
    );
};

export default Navbar;