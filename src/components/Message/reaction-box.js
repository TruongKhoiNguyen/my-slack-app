import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';

function ReactionBox() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleReactionSelect = (reaction) => {
        console.log('Selected reaction:', reaction);

        handleClose();
    };

    return (
        <Box>
            <IconButton aria-describedby={id} onClick={handleClick}>
                <AddReactionOutlinedIcon />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
            >
                <Box sx={{px: 2, py: 1, display: 'flex', gap: 2 }}>
                    <span className='emoji-item' onClick={() => handleReactionSelect('👍')}>👍</span>
                    <span className='emoji-item' onClick={() => handleReactionSelect('❤️')}>❤️</span>
                    <span className='emoji-item' onClick={() => handleReactionSelect('😂')}>😂</span>
                    <span className='emoji-item' onClick={() => handleReactionSelect('😯')}>😯</span>
                    <span className='emoji-item' onClick={() => handleReactionSelect('😢')}>😢</span>
                    <span className='emoji-item' onClick={() => handleReactionSelect('😡')}>😡</span>
                </Box>
            </Popover>
        </Box>
    );
}

export default ReactionBox;
