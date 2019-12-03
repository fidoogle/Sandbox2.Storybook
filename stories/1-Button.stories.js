import React from 'react';
import { action } from '@storybook/addon-actions';
//import { Button } from '@storybook/react/demo';
import Button from '../src/components/Button';
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: 'Button',
  decorators: [withKnobs]
};


export const primary = () => <Button onClick={action('clicked')} primary disabled={boolean("Disabled", false)}>Primary</Button>;

export const secondary = () => <Button onClick={action('clicked')} secondary disabled={boolean("Disabled", false)}>Secondary</Button>;

export const normal = () => <Button onClick={action('clicked')} disabled={boolean("Disabled", false)}>Normal</Button>;



export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
