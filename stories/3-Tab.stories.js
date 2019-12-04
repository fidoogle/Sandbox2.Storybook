import React from 'react';
import TabMUI from '../src/components/TabMUI'; 

import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
    title: 'Tab',
    decorators: [withKnobs],
    component: TabMUI,
};


export const tabs = () => (<TabMUI></TabMUI>);
