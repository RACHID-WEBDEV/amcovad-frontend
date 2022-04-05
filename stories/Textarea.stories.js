import Textarea from '@/components/form/Textarea';
import HookForm from '@/components/form/Form';

const TextareaStories = {
  title: 'Components/Textarea',
  component: Textarea
};

export default TextareaStories;

const defaultParameters = {
  label: 'Your message',
  name: 'message',
  className: 'bg-amcovad-secondary-200'
};

const Template = (args) => (
  <HookForm>
    <Textarea {...args} />
  </HookForm>
);

export const Default = Template.bind({});

Default.args = defaultParameters;
