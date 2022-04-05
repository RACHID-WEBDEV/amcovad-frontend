import Select from '@/components/form/Select';
import HookForm from '@/components/form/Form';

const SelectStories = {
  title: 'Components/Select',
  component: Select
};

export default SelectStories;

const testData = [
  { id: 1, title: 'Become a Mobile App Developer', value: 'Mobileapp' },
  { id: 2, title: ' Become a Software Developer', value: 'softwaredeveloper' },
  { id: 3, title: ' Become a Products Designer', value: 'productdesigner' }
];

const defaultParameters = {
  name: 'select',
  label: 'Which Tech Skill did Preffered ?'
};

const Template = (args) => (
  <HookForm>
    <Select {...args} />
  </HookForm>
);

export const Default = Template.bind({});

Default.args = defaultParameters;

export const withDefaultOption = Template.bind({});
withDefaultOption.args = {
  ...defaultParameters,
  defaultOption: 'Select make your best decision'
};

export const withSeveralOptions = Template.bind({});
withSeveralOptions.args = {
  ...defaultParameters,
  defaultOption: 'Kindly choose best wisely',
  options: testData
};
