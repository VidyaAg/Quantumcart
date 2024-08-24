'use client';

import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { ShoppingCart, Person } from '@mui/icons-material';

const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" className="py-4" 
        style={{backgroundImage: "linear-gradient(to right top, #ba67bd, #a85cc3, #9053c9, #704dd0, #3949d8)"}}>
            <Toolbar className="container mx-auto flex justify-between items-center max-w-8xl">
                {/* Logo */}
                <Typography variant="h6" className="text-white">
                    <a href="/" className="flex items-center">
                        <img src="logo.png" alt="Logo" className="h-10" />
                    </a>
                </Typography>

                {/* Right Side Items */}
                <div className="flex items-center space-x-4 relative">
                    <IconButton color="inherit" href="/cart">
                        <ShoppingCart />
                        <span className="bg-red-600 text-white text-xs font-semibold rounded-full px-2 py-1 absolute top-0 right-0 -mr-2 -mt-2">
                            3
                        </span>
                    </IconButton>
                    <IconButton color="inherit" onClick={handleProfileMenuOpen}>
                        <Person />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose} component="a" href="/profile">
                            Profile
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component="a" href="/orders">
                            Orders
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component="a" href="/settings">
                            Settings
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component="a" href="/logout">
                            Logout
                        </MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
