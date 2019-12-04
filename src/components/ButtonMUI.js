import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonMUI = ({children, color, endIcon, variant, startIcon, disabled}) => (
    <Button 
        color={color} 
        disabled={disabled} 
        endIcon={endIcon}
        startIcon={startIcon} 
        style={{
            fontWeight: "600"
        }} 
        variant={variant} >
        {children}
    </Button>
);

export default ButtonMUI