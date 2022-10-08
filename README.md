# SFU Surge React Component Library Template

<img src=".github/assets/surge.svg" alt="SFU Surge Logo" />

A project template for creating a React component library.

## From Template

You will need to make a couple changes to the template:

**.github/actions/workflows/publish.yml**

```diff
- name: {{PROJECT_NAME}}
+ name: my-project
...

@@ jobs.lint
      with:
        workflow-ref: "v1"
-       cache-key: {{PROJECT_NAME}}
+       cache-key: "my-project"
        package: "."

@@ jobs.publish
      with:
        workflow-ref: "v1"
-       cache-key: {{PROJECT_NAME}}
+       cache-key: "my-project"
        package: "."
        publish-gpr: ${{ startsWith(github.ref, 'refs/tags/v') }}
        replace-version: "${{ github.ref_name }}"
```


## Contributing

Before you are able to contribute, you will need to install the project dependencies:

```bash
npm install
```

### Scripts

The following `npm` scripts are provided:

 * **npm run build** &mdash; builds the project
 * **npm run test** &mdash; runs tests
 * **npm run lint** &mdash; checks for linting and formatting errors
 * **npm run format** &mdash; reformats the code

### Committing

Before creating a commit, please reformat your changes (`npm run format`) and ensure all lints (`npm run lint`) and tests (`npm run test`) pass.

### Releasing

To release a new package, create and push a new tag in the format of `v1.2.3`. The CI will automatically publish the packages with the version `1.2.3`.
