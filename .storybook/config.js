import { configure } from '@storybook/react';
// automatically import all files ending in *.stories.js
console.log(' process.env', process.env);
const req = require.context('../src/stories', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
