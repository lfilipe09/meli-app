## Project

- ✅ Typescript
- ✅ Unit tests
- ✅ End-to-end tests
- ✅ Mobile friendly
- ✅ Deployment on Vercel
- ✅ Docker and Git workflow 

## Techs

- [TypeScript](https://www.typescriptlang.org/)
- [Scss](https://sass-lang.com/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Lint Staged](https://github.com/okonet/lint-staged#readme)
- [Plop](https://plopjs.com/documentation/)

## Access

Access the deployed application using the link below and see the website in action:
```bash
https://meli-app-theta.vercel.app/
```

## Getting Started

First, clone the repository and install the dependencies using the npm install command. Then, run:

```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser and see the result.

## Commands

- start: runs the application on localhost:3000 in development mode
- build: creates the production build version
- lint: runs the linter on all components and pages
- test: runs Jest for tests on all components and pages
- storybook: starts Storybook on localhost:6006
- cy:open: starts Cypress, need to have the application running in localhost:3000
- generate: generate automatically a folder containing all files for a react component

## Automating Workflow with Prettier, ESLint, Plop and Husky + Lint Staged

**Prettier** is a code formatter that helps ensure that my code follows consistent and readable formatting. Prettier is integrated into the workflow so that it runs automatically whenever I save a file, ensuring that code is always clean and consistent.

**ESLint** is a static code analysis tool that helps to identify potential errors and coding inconsistencies. By configuring ESLint, we ensure that the code meets the coding standards and best practices set inside the project.

**Plop** automatizes the generation of files for components. With Plop, we can created templates that generate all the files we need for each new component, including the index file, test file, storybook file, and scss module styles. This saves a lot of time and eliminated the need to manually create each file.

**Lint Staged and Husky** Linting and testing are important parts of any development process, as they help to catch potential errors and ensure code quality. However, it can be easy to forget to run these checks before committing code. To solve this problem, it was integrated Lint Staged with Husky, which ensures that all lints and tests are run before every commit. If something breaks, it won't allow you to make the commit until the issues are fixed. Additionally, it was configured the link to max-warning=0, which enforces the rule that any variable or import must be used, ensuring that the codebase remains clean and organized.

## BEM Methodology SCSS

[BEM](https://getbem.com/introduction/), which stands for Block Element Modifier, is a popular methodology for writing modular and reusable CSS code. The BEM methodology helps developers to create a clear and well-organized CSS structure that is easy to maintain and extend over time.

One of the main benefits of using BEM is that it promotes a consistent naming convention for CSS classes, which helps to reduce naming conflicts and improve code clarity. BEM uses a simple naming convention that consists of three parts: the block, the element, and the modifier. This makes it easy to identify the purpose of each CSS class and to understand how it relates to other classes in the codebase.

In addition to promoting consistency and clarity, BEM also helps to improve code reuse by encouraging developers to create modular CSS components that can be used in multiple places across the application. This can lead to a more efficient and maintainable codebase, as well as a better user experience for end-users.

Because of these benefits, I decided to follow the BEM methodology when writing my SCSS code. By using BEM, I was able to create a well-structured and reusable CSS codebase that is easy to maintain and extend over time.

## Responsiveness

![homepage-adapt](https://github.com/lfilipe09/meli-app/assets/81202572/be2a91ad-3594-4622-9499-830db0830331)
![search-adapt](https://github.com/lfilipe09/meli-app/assets/81202572/2c579658-15b8-4fcb-8d84-192da6bec8ed)
![product-adapt](https://github.com/lfilipe09/meli-app/assets/81202572/d31c2c8d-fd58-46d6-934d-37d4696a60a4)


## Unit tests

![testes unitários](https://github.com/lfilipe09/meli-app/assets/81202572/94c77f42-2836-40d3-9468-ed9656e26ba2)

- Jest + React Test Library
- 100% of unit test coverage in components files
- Component creation using TDD
- 35 unit tests written

## E2E tests

![Cypress](https://github.com/lfilipe09/meli-app/assets/81202572/302d45e8-4164-4ab5-84f8-ea7938b3dfa0)

- Cypress
- Integrating Cypress + TypeScript
- Integrating Cypress + ESLint
- E2E test: test user interaction opening the browser, searching for a product and checking the details

## Docker

![docker](https://github.com/lfilipe09/meli-app/assets/81202572/c6ddee41-ab19-409c-82f6-7641699853dd)

- Build the Docker image 

## Git Workflow

![PRs](https://github.com/lfilipe09/meli-app/assets/81202572/b6f25ce1-5373-4a69-aa82-eff036922852)
![Captura de tela 2023-10-20 121507](https://github.com/lfilipe09/meli-app/assets/81202572/edc0c932-8000-4413-a50a-235d9c7ab1f5)
![ci](https://github.com/lfilipe09/meli-app/assets/81202572/918f16a9-d788-4f73-b42b-41bdf774026a)

- My project follows a feature branch-based Git workflow. This means that new features or changes are developed in separate branches and then merged into the main branch through pull requests. This approach helps keep the main branch clean and ensures that changes are reviewed and tested before they are merged.
- We have a Continuous Integration (CI) setup in place to maintain code quality and ensure that each pull request meets our project's standards.
- **Linting:** We use linters to enforce coding standards, identify code issues, and maintain code consistency. The CI system runs lint checks on all code changes to catch and fix issues early.
- **Testing**:  The CI system automatically runs these tests to ensure that the changes don't introduce new bugs or regressions. If the tests fail, the CI pipeline will provide feedback on what needs to be addressed.

## SEO

![SEO1](https://github.com/lfilipe09/meli-app/assets/81202572/a7ce2f78-71c4-4ee1-942c-eca8d5c79247)
![SEO2](https://github.com/lfilipe09/meli-app/assets/81202572/2e70fd2e-16da-45ae-89e9-dc3cacc2e7d8)
![SEO3](https://github.com/lfilipe09/meli-app/assets/81202572/9b5d8a3f-26a1-4acb-a791-a66db9e24d2a)

- 100% of SEO setup in all pages following the best practises. According to PageSpeed Insights

## Storybook

![storybook](https://github.com/lfilipe09/meli-app/assets/81202572/bd5b9fd2-58bd-4cd5-bd5c-0a14e9eb7ea3)

- Storybook is a powerful tool for developing and testing React components in isolation. It allows developers to create and showcase UI components in a clean, organized and easy-to-use interface, which helps in both maintaining and scaling a project. By showcasing components in isolation, developers can easily identify potential issues and work out the kinks before integrating components into the larger application.

- In addition to being a valuable testing tool, Storybook can also be used as a collaborative space for teams to showcase, discuss and iterate on components. By providing an interactive, visual interface for components, designers and developers can easily collaborate and ensure that components align with the design system.

- Using Storybook in a React project can ultimately save time and resources by streamlining the development process, improving the quality of the codebase, and facilitating collaboration between team members. It is a powerful tool that can help create better, more organized components and applications.
