// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { object, withKnobs } from '@storybook/addon-knobs';
import { Meta, storiesOf, Story } from '@storybook/angular';
import { SelectComponent } from 'projects/my-lib/src/public-api';
import { SelectDocComponent } from './select-doc/select-doc.component';
// @ts-ignore
import essentialNotes from './select.essential-notes.md';
// @ts-ignore
import notes from './select.notes.md';


/**
 * Essential Controls
 */
export default {
  title: 'Essential/Select',
  component: SelectComponent,
  argTypes: { select: { action: 'clicked' } },
  parameters: {
    // docs: { page: null } , // ! DISABLE THE DOCS
    notes: { markdown: essentialNotes } // ! ADD NOTES
  }
} as Meta;

const Template: Story<SelectComponent> = (args: SelectComponent) => ({
  component: SelectComponent,
  props: args,
});


export const Default = Template.bind({});
Default.args = {
  items: [
    {key: 1, value: 'Greece'},
    {key: 2, value: 'Poland'}
  ]
};
// Default.parameters = {
//   docs: { page: null } , // ! DISABLE THE DOCS
//   notes: { markdown: notes } // ! ADD NOTES
// }


const selectDocComponent: Story<SelectDocComponent> = (args: SelectDocComponent) => ({
  component: SelectDocComponent,
  moduleMetadata: {
    declarations: [SelectComponent]
  },
  props: args,
});

export const Example = selectDocComponent.bind({});


/**
 * Manual documentation
 */
const selectStories = storiesOf('Example/Select', module)
selectStories.addDecorator(withKnobs)

selectStories
  .add(
    'Default',
    () => ({
      component: SelectComponent,
      props:  {
        items: object('items', [
          {key: 1, value: 'Greece'},
          {key: 2, value: 'Poland'}
        ])
      },
    }),
    {
      notes: { markdown: notes },
    }
  )
  .add(
    'Examples',
    () => ({
      component: SelectDocComponent,
      moduleMetadata: {
        declarations: [SelectComponent]
      }
    }),
    {
      notes: { markdown: notes },
    }
  )
