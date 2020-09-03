// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { withKnobs, object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { SelectComponent } from 'projects/my-lib/src/public-api';
import { SelectDocComponent } from './select-doc/select-doc.component';
// @ts-ignore
import notes from './select.notes.md';


const selectStories = storiesOf('Select', module)
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
