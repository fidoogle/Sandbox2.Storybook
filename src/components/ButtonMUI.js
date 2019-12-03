import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonMUI = ({color, variant}) => (
    <Button variant={variant} color={color} style={{
        fontWeight: "600"
    }}>
        Material UI
    </Button>
);

export default ButtonMUI