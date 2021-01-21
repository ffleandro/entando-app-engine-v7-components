import React from 'react';

import { BANNERS } from '../mocks';
import Banner from '../widgets/Banner';

export default {
  title: 'Widgets/Banner',
  component: Banner,
};

const Template = (args) => <Banner {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  banners: BANNERS,
};
