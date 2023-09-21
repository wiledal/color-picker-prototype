# Color Picker Prototype

A color picker prototype, based on React, SCSS-modules, boxed up in a Next.js 13 (app router) package.

My first approach would be to build this with Tailwind, but the requirements stated CSS or CSS-in-JS. Since CSS-in-JS is the work of sadists, I went with SCSS-modules. Since this is mostly an exercise in code, and a showcase of TypeScript and organization, I did not spend too much time on graphics, but added some nice touches.

⚡️ Live Preview: https://bits-color-picker.on.hugos.computer

### How to run:
1. Clone the repo
2. `yarn`
3. `yarn dev`

### Features:
- 💅 Pick a color 
  1. Using manual input, and pressing `<Return>`
  2. Using the native color picker, accessed via a button
  3. Using a randomized color from a set palette, accessed via a button
- 🟪 Fancy shifting color preview shape
- 🌚 Dark mode

### If I had unlimited resources, I would:
- [ ] Build up a framework of reusable mixins and tools in the scss-modules, for things like
  - Query selectors
  - Colors
  - Typography
  - Magins
  - etc.
- [ ] Add unit tests using Jest and React-Testing-Library
- [ ] Add e2e tests using Playwright
- [ ] Improve on design and accessibility
- [ ] Nicer effect on the rainbow button (flashing when unhovering)