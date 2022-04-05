import Navbar from '@/components/Navbar';

const HeaderStories = {
  title: 'Components/Header',
  component: Navbar
};

export default HeaderStories;

const defaultParameters = {
  authPageOnly: false
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});

export const MobileAuthPage = Template.bind({});
MobileAuthPage.args = {
  ...defaultParameters
};
