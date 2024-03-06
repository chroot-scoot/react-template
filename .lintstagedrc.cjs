module.exports = {
  '*.{ts, tsx, cjs}': [
    'eslint ----report-unused-disable-directives --max-warnings 0',
    'prettier --write',
  ],
  '*.{css, html, md, json, yaml, yml}': ['prettier --write'],
};
const a = 4;
