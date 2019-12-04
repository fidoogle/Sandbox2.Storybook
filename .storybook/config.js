import { configure } from '@storybook/react';
import React from 'react'
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';

const ThemeDecorator = storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;
addDecorator(ThemeDecorator);

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
