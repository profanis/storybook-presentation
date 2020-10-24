
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

// export const decorators = [
//   (storyFunc) => {
//     const story = storyFunc()

//     return {
//       ...story,
//       template: `<div style="border: 1px solid #cccccc; border-radius:5px;  padding: 10px">${story.template}</div>`
//     }
//   }
// ]
