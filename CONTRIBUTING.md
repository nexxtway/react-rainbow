# Contributing

We are excited that you are interested in contributing to this project! Thank you for helping us make this project great and being a part of the React Rainbow community. Here are a few guidelines that will help you along the way.

## Create an issue

You can help us improve React Rainbow Components, the first step to begin collaborate is to [Create an Issue](https://github.com/nexxtway/react-rainbow/issues/new/choose) before submitting a pull request, it's always good to file an issue, so we can discuss the details of your approach or suggestion.

When you create an issue, you will need to select one of these issue types and follow the specific instructions for each type:

1. Bug report (Create a bug report to help us improve React Rainbow Components)
2. Feature request (Suggest an idea for React Rainbow Components)
3. New Component (Suggest a new component idea for React Rainbow Components)
4. Discussion (Suggest an improvements, implementation questions, or any issues that may merit discussion)

When you write the issue title please follow this convention: `type: [description]`.This issue title follows the same convention of the commit message. See: [How to Write a Git Commit Message](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) for a great explanation.

## Discussion

While using our components on your project and/or collaborating with the development of any of the the react-rainbow-components, you have suggestions for improvements, implementation questions, or any issues that may merit discussion. We recommend creating a “Discussions” issue type in Github.

## Submitting a pull request

React Rainbow Components is a community project, so pull requests are always welcome, but, before working on a large change, it is best to open an issue first to discuss it.
When in doubt, keep your pull requests small. To give a PR the best chance of getting accepted, don't bundle more than one feature or bug fix per pull request. It's always best to create two smaller PRs than one big one.
As with issues, please begin the title with `type: [ imperative commit message ]`.[How to Write a Git Commit Message](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits) for a great explanation.

When adding new features or modifying existing ones, please attempt to include all necessary tests to confirm the new behavior.

### Branch Structure

All stable releases are tagged ([view tags](https://github.com/nexxtway/react-rainbow/tags)).
At any given time, `master` represents the latest development version of the library. Patches or hotfix releases are prepared on an independent branch. Follow the repository's naming branch conventions `[name-branch]`.

#### `master` is unsafe

We will do our best to keep `master` in good shape, with tests passing at all times.

### How to increase the chance of being accepted?

We will only accept a pull request for which all tests pass. Make sure the following is true:

-   The branch is not behind `master`.
-   If a feature is being added: - If the result was already achievable with the core library, explain why this feature needs to be added to the core. - It includes relevant tests. - If this is a common use case, considered adding an example to the documentation.
-   If a bug is being fixed, test cases that fail without the fix are included.
-   LCode linting is a requirement (run yarn lint).
-   The PR title follows the pattern type: Imperative commit message. [How to Write a Git Commit Message](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) for a great explanation.

## Getting started

Begining to collaborate in React Rainbow Component is simple. Just have to go through the following steps:

1. Fork the React Rainbow Components repository on Github.
2. Clone your fork to your local machine `git clone git@github.com:<yourname>/react-rainbow.git`
3. Create a branch `git checkout -b my-topic-branch`
4. Make your changes, lint, then push to GitHub with `git push origin my-topic-branch`
5. Visit GitHub and make your pull request.
   If you have an existing local repository, please update it before you start, to minimize the chance of merge conflicts.

## Managing Node/Yarn versions with [Volta](https://volta.sh/)

Our project runs with specific Node/Yarn versions contrains, as a good practice you should consider to install [Volta](https://volta.sh/)
that it will take care of managing seamlessly Node/Yarn versions for you. 

- [Getting started with volta](https://docs.volta.sh/guide/getting-started)

### Testing

Test coverage is at +80% at the moment, but we are working to add more tests to the components when possible, please add tests for any changes you make. Tests can be run with `yarn test`

### Updating the component API documentation

Updating the component API documentation is easy. There are two ways:

1. Press the Edit button in the Properties and Methods table and edit the component PropTypes description.
2. Submit a PR editing the component PropTypes description in the index.js file in the component folder.  
   When the PR is merged, the documentation component will be auto-generated.

### Coding styles

React Rainbow Components is migrating to `styled-components` the styles of the component.

React Rainbow Components uses eslint, if possible, enable linting in your editor to get real-time feedback. The linting rules can be run manually with the following command yarn lint.
When pushing the changes they will run and the commit will not be pushed if they fail.
Finally, when you submit a pull request, they will run again by Circle CI, hopefully, by then, your code is already clean!

## How do I add a new Interactive Example in the documentation?

It is simple. There are two ways:

1. Press the Edit Interactive Example button.
2. Submit a PR adding the new example in the `readme.md` file in the component folder.

Let’s say you want to add a new Interactive Example for buttons component, then you have to go through the following steps:

1. Edit the component `readme.md` file.
   In this case, edit the readme.md file to the following directory:
   `src/components/Button/readme.md`
2. Add the code in the `readme.md` file.

```sh
#####Brand buttons
Sometimes, you need a Brand button to make your app looks **Brand**. Yea ...
```

```sh
<Button
  label="Button Brand"
  onClick={() => alert('clicked!')}
  variant="brand" />
```

3. Submit the PR with the code of the new Interactive Example.
4. You are done 🎉!

## How do I add a new Component?

It is simple. Only have to go through the following steps:

1. Following this directory `src/components/` create a folder with the component name. The component folder has to follow this convention `[ComponentName]` in camelcase.

    - Create all basic files for the components: 
         - `index.js` This is the file where is the main logic of the component, props and methods showed in the documentation. 
         - `styled` In this folder will be the file `index.js` with the styles of the component using `styled-components`  
         - `readme.md` The have the Interactive Example for the component.
    - Depending on the functionality and complexity of the component it will be necessary also to add: 
         - `_test_` In this folder will be the files `componentName.spec.js` with the tests of the component.
         - `pageObject` In this folder will be the file index.js with the Page Object of the component.(If the component need integrationTest)

2. If the component needs Integration Test then follow this directory `integration/specs/`, create a folder with the component name. The component folder has to follow this convention `[ComponentName]` in camelcase.
    - Create all necessary files and update the tutorial.json file for the components integration test:
         - `[componentName]-[number].spec.js` .The `[number]` is the assigned number to the Interactive Example to be tested. Numbers are assigned to the Interactive Example in consecutive odd numbers. I.e 1, 3, 5 etc. 
         - Update the tutorial.json file. Add this code:

```sh
"componentName": {
     "title": "ComponentName page object"
}
```

3. If the component needs Tutorial then following this directory `tutorial/` create a file with the component name. The component name has to follow this convention `[componentName]` in camelcase.

    - `componentName.md`

4. Add the code to the files
5. Submit the PR with the code of the new example
6. You are done🎉

Note: Depending on the functionality and complexity of the component it maybe necessary to add the Integration Test. If a component needs Integration Test then it needs Page Object and each Page Object needs a Tutorial.

## License

By contributing your code to the nexxtway/react-rainbow GitHub repository, you agree to license your contribution under the MIT license.
