# JS Project Template [![Build Status](https://travis-ci.org/avg206/js-project-template.svg?branch=master)](https://travis-ci.org/avg206/js-project-template)

This repository is a template for JS projects.

[Themes of final projects](https://github.com/it-shark-pro/web-school-lectures/blob/master/docs/final_projects.md)

## Get started ##

### Install all dependencies

```bash
npm install
```

### Run unit tests

```bash
npm run test
```

### Lint your code

```bash
npm run lint
```

## How to setup travis-ci
* Open [https://travis-ci.org/](https://travis-ci.org/) and sign in with your github account.
* Activate your forked repo **js-project-template**.
* Edit local README.md file and update all links (just replace all occurrences of `'js-project-template'` with your account name).
* Commit and push updated README.md to github:
```bash
  git add README.md
  git commit -m "(change) travic ci setup"
  git push origin master
```
* Open your repository and test the build icon. Now it will run all tests and update status once you push changes to github. Keep this icon green!