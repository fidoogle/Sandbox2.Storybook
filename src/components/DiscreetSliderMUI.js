import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
    root: {
        width: 300,
    },
    margin: {
        height: theme.spacing(2),
    },
}));

const defaultmarks = [
    {
        value: 0,
        label: '$0',
    },
    {
        value: 25,
        label: '$25',
    },
    {
        value: 50,
        label: '$50',
    },
    {
        value: 75,
        label: '$75',
    },
    {
        value: 100,
        label: '$100',
    },
];

function valuetext(value) {
    return `$${value}`;
}

const DiscreteSlider = ({defaultValue=20, marks=defaultmarks, step=5}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography id="discrete-slider-custom" gutterBottom>
                Discreet Slider
            </Typography>
            <Slider
                defaultValue={defaultValue}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-custom"
                step={step}
                valueLabelDisplay="auto"
                marks={marks}
            />
        </div>
    );
}

export default DiscreteSlider;