import RadioGroup from '@/components/form/RadioGroup';
import HookForm from '@/components/form/Form';

const RadioGroupStories = {
  title: 'Components/RadioGroup',
  component: RadioGroup
};

export default RadioGroupStories;

const testData = [
  { id: 1, label: 'Mobile App Developer', value: 'Mobileapp' },
  { id: 2, label: 'Software Developer', value: 'softwaredeveloper' },
  { id: 3, label: 'Products Designer', value: 'productdesigner' }
];

const defaultParameters = {
  name: 'radio',
  options: testData
};

const Template = (args) => (
  <HookForm>
    <RadioGroup {...args} />
  </HookForm>
);

export const Default = Template.bind({});

Default.args = defaultParameters;

export const withColumnStyle = Template.bind({});
withColumnStyle.args = {
  ...defaultParameters,
  column: true
};
