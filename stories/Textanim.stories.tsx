import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextAnim,Special } from '../src';
import { TextAnimProps } from '../src/components/textanim';
import { SpecialProps } from '../src/components/special';

const meta: Meta = {
  title: 'Welcome',
  component: Special,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SpecialProps> = args => <Special {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  name:"EMEKA",
  type:"four",
  size:4,
  count:"1",
  color:"orange",
  duration:2
};
