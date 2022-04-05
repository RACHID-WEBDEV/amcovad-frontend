import { CheckboxGroup } from '@/components/index';
import HookForm from '@/components/form/Form';
import Link from 'next/link';

const CheckboxGroupStories = {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup
};

export default CheckboxGroupStories;

const defaultParameters = {
  name: 'acceptTerms',
  options: [
    {
      label: (
        <>
          I agree to be contacted by
          <Link href="#" passHref>
            <a className=" text-amcovad-primary-400 hover:text-amcovad-primary-500"> amcovad</a>
          </Link>
        </>
      ),
      value: 'acceptTerms'
    }
  ]
};

const Template = (args) => (
  <HookForm>
    <CheckboxGroup {...args} />
  </HookForm>
);

export const Default = Template.bind({});

Default.args = defaultParameters;

export const withMulitpleCheckbox = Template.bind({});
withMulitpleCheckbox.args = {
  ...defaultParameters,
  name: 'acceptMulti',
  options: [
    {
      label: ' I have read, and I agree to the Terms of Service ',
      value: 'agreeService'
    },
    { label: 'I agree to be contacted by amcovad', value: 'agreeContact' },
    { label: 'I have read, and I agree to the Privacy Policy', value: 'agreePolicy' }
  ]
};
