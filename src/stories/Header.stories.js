import React from 'react';
import 'carbon-components/css/carbon-components.css';

import { Header } from '../widgets/Header';

export default {
  title: 'Widgets/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
