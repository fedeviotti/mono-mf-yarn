import React, { MouseEventHandler } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ButtonLib from '../components/button-lib';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ButtonLib',
  component: ButtonLib,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ButtonLib>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonLib> = (args) => (
  <ButtonLib {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'primary',
  text: 'Button',
  onClick: () => window.console.log('Click'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  text: 'Button',
  onClick: () => window.console.log('Click'),
};

export const Large = Template.bind({});
Large.args = {
  type: 'error',
  text: 'Button',
  onClick: () => window.console.log('Click'),
};
