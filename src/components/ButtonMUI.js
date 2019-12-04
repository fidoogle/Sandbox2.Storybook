import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

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

ButtonMUI.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    endIcon: PropTypes.node,
    startIcon: PropTypes.node,
    variant: PropTypes.oneOf(['', 'contained', 'outlined']),
};

export default ButtonMUI