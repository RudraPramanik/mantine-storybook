// stories/Header.stories.tsx
import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Meta } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Header',
  component: Header,
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  query: '',
  onSearch: (e) => console.log('Search:', e),
  onFetch: () => console.log('Fetch'),
};

export const WithQuery = Template.bind({});
WithQuery.args = {
  query: 'Nature',
  onSearch: (e) => console.log('Search:', e),
  onFetch: () => console.log('Fetch'),
};
