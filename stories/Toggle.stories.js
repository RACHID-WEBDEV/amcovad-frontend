import Toggle from '@/components/form/Toggle';
import HookForm from '@/components/form/Form';

const ToggleStories = {
  title: 'Components/Toggle',
  component: Toggle
};

export default ToggleStories;

const defaultParameters = {
  name: 'toggle',
  label: 'Click the Toggle'
};

const Template = (args) => (
  <HookForm>
    <Toggle {...args} />
  </HookForm>
);

export const Default = Template.bind({});

Default.args = defaultParameters;
