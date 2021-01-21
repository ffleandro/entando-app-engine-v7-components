import React from 'react';

import { PRODUCT_CATEGORIES } from '../mocks';
import Menu from '../widgets/Menu';

export default {
  title: 'Widgets/Menu',
  component: Menu,
};

const Template = (args) => <Menu {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  categories: PRODUCT_CATEGORIES,
};
