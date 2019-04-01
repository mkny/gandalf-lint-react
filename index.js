module.exports = {
  extends: ["@softboxlab/eslint-config-gandalf-lint", "./rules/gandalf"].map(
    require.resolve
  ),
  plugins: ["eslint-plugin-react"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  }
};
