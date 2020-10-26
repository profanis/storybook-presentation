import { SelectComponent } from '@my-lib';
import { Meta, Story } from '@storybook/angular';
// @ts-ignore
import notes from './select.notes.md';


export default {
  title: 'Essential/Select',
  component: SelectComponent,
  argTypes: { select: { action: 'select' } },
  parameters: {
    notes: { markdown: notes }
  }
} as Meta;

const Template: Story<SelectComponent> = (args: SelectComponent) => ({
  component: SelectComponent,
  props: args,
  moduleMetadata: {
    declarations: [SelectComponent]
  },
});


export const Default = Template.bind({});
Default.args = {
  items: [
          {key: 1, value: 'Greece'},
          {key: 2, value: 'Poland'}
        ]
};
