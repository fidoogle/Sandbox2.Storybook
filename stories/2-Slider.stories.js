import React from 'react';
import DiscreetSliderMUI from '../src/components/DiscreetSliderMUI'; 
import RangeSliderMUI from '../src/components/RangeSliderMUI';

import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: 'Slider',
  decorators: [withKnobs]
};


export const discreet_slider = () => (<DiscreetSliderMUI></DiscreetSliderMUI>);
export const range_slider = () => (<RangeSliderMUI></RangeSliderMUI>);
