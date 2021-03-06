// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { ToggleComponent } from '@my-lib';
import { Meta, Story } from '@storybook/angular';
import { ToggleModule } from '../../../../my-lib/src/lib/components/toggle/toggle.module';
// @ts-ignore
import notes from './toggle-notes.md';


/**
 * Essential Controls
 */
export default {
  title: 'Essential/Toggle',
  argTypes: { toggle: { action: 'toggle state' } },
  parameters: {
    notes: { markdown: notes }
  },
  decorators: [
    (storyFunc) => {
      const story = storyFunc()

      return {
        ...story,
        template: `<div style="border: 1px solid #cccccc; border-radius:5px;  padding: 10px">${story.template}</div>`
      }
    }
  ]
} as Meta;

const Template: Story<ToggleComponent> = (args: ToggleComponent) => ({
  component: ToggleComponent,
  props: args,
  moduleMetadata: {
    imports: [ToggleModule]
  },
  template: '<app-toggle [status]="status" [label]="label" [textInLeft]="textInLeft" (toggle)="toggle($event)"></app-toggle>'
});


export const Default = Template.bind({});
Default.args = {
  status: true,
  label: 'Switch me :) ',
  textInLeft: true
};
Default.storyName = 'Default Story Name'

