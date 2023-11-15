# nitrodeploy Github Action

![nitrodeploy Github Action](https://github.com/nitrodeploy/nitrodeploy-github-action/blob/main/.github/assets/nitro-deploy-cover.png?raw=true)

Nitrodeploy Github Action is a Github Action that allows you to deploy your nitro based project to a own server.

[Website](https://nitrodeploy.com)
[Status](https://status.nitrodeploy.com)

This action allows you to integrate NitroDeploy's deployment capabilities directly into your GitHub workflows. It's designed to streamline the deployment process of your applications using NitroDeploy services.

## Inputs

### `NITRO_DEPLOY_TOKEN`

**Required** This token authenticates your access to NitroDeploy services. You can set it as an environment variable `NITRO_DEPLOY_TOKEN`. If not set, it can be provided as an input. Note: The `TOKEN` input is deprecated.

### `BUILD_COMMAND`

The build command for your project. This input specifies the command that builds your project for deployment.

Example:
```yaml
buildCommand: npm run build
```

### `EXPORT_FOLDER`

This input defines the directory where your exported files will be stored after the build process.

Example:
```yaml
exportFolder: build
```

### `TAG`

A tag for your deployment. This can be any string that helps you identify the deployment version or environment.

Example:
```yaml
tag: production
```

### `AUTO_BUILD`

Determines whether the action should automatically build your project. Set this to `true` to enable automatic building of your project.

Example:
```yaml
autobuild: 'true'
```

## Usage

Below is an example of how to use NitroDeploy GitHub Action in your workflow.

```yaml
- name: Nitro Deploy
  uses: nitrodeploy/nitrodeploy-github-action@v0.3.0
  env:
    NITRO_DEPLOY_TOKEN: ${{ secrets.NITRO_DEPLOY_TOKEN }}
  with:
    BUILD_COMMAND: npm run build
    EXPORT_FOLDER: build
    TAG: production
    AUTO_BUILD: 'true'
```

This configuration will authenticate with NitroDeploy, build your project using the specified `BUILD_COMMAND`, export the build to the `EXPORT_FOLDER`, tag the deployment, and, if `AUTO_BUILD` is set to `true`, it will handle the build process automatically.

## Support

For any issues, questions, or feature requests, please open an issue on the GitHub repository or refer to the NitroDeploy documentation.
