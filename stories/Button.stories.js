import Button from '../components/form/Button';

const Stories = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  }
};

export default Stories;

const defaultParameters = {
  children: 'Sign in',
  outline: false
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = defaultParameters;

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultParameters,
  color: 'secondary'
};
