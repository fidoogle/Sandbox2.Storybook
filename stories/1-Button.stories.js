import React from 'react';
import { action } from '@storybook/addon-actions';
//import { Button } from '@storybook/react/demo';
import Button from '../src/components/Button';
import ButtonMUI from '../src/components/ButtonMUI';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';

import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: 'Button',
  decorators: [withKnobs]
};


export const primary_contained = () => (<ButtonMUI
  color="primary"
  variant="contained"
  startIcon={<CheckCircleIcon />}
  endIcon={<CheckCircleOutlinedIcon />} disabled={boolean("Disabled", false)}>Primary Contained</ButtonMUI>);

export const primary_outlined = () => (<ButtonMUI
  color="primary"
  variant="outlined"
  startIcon={<CheckCircleIcon />}
  endIcon={<CheckCircleOutlinedIcon />} disabled={boolean("Disabled", false)}>Primary Outlined</ButtonMUI>);

export const primary_plain = () => (<ButtonMUI
  color="primary"
  startIcon={<CheckCircleIcon />}
  endIcon={<CheckCircleOutlinedIcon />} disabled={boolean("Disabled", false)}>Primary Plain</ButtonMUI>);

export const secondary_contained = () => (<ButtonMUI
  color="secondary"
  variant="contained"
  startIcon={<CheckCircleIcon />}
  endIcon={<CheckCircleOutlinedIcon />} disabled={boolean("Disabled", false)}>Secondary Contained</ButtonMUI>);

export const secondary_outlined = () => (<ButtonMUI
  color="secondary"
  variant="outlined"
  startIcon={<CheckCircleIcon />}
  endIcon={<CheckCircleOutlinedIcon />} disabled={boolean("Disabled", false)}>Secondary Outlined</ButtonMUI>);

export const secondary_plain = () => (<ButtonMUI
  color="secondary"
  startIcon={<CheckCircleIcon />}
  endIcon={<CheckCircleOutlinedIcon />} disabled={boolean("Disabled", false)}>Secondary Plain</ButtonMUI>);
  
