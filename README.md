<div align="center">
  <br />
  <p>
    <a href="https://infotition.de"><img src="https://i.imgur.com/JopXqvx.png" width=600px alt="infotition logo" /></a>
  </p>
  <h1>Petron</h1>
  <p>Petron is a <a href="https://github.com/carbon-app/carbon">carbon</a> based code formatting API.</p>
  <br>
  <p>
    <a href="https://david-dm.org/Infotition/petron" title="dependencies status">
      <img src="https://status.david-dm.org/gh/Infotition/petron.svg"/>
    </a>
    <a href="https://david-dm.org/Infotition/petron?type=dev" title="devDependencies status">
      <img src="https://status.david-dm.org/gh/Infotition/petron.svg?type=dev"/>
    </a>
    <br>
    <a href="https://github.com/Infotition/petron/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/Infotition/petron" alt="Lizens" />
    </a> 
    <a href="https://discord.gg/NpxrDGYDwV">
      <img src="https://img.shields.io/discord/792139920260464670?color=7289da&logo=discord&logoColor=white" alt="Discord server" />
    </a>
  </p>
  <br>
</div>


# About
Petron is a <a href="https://github.com/carbon-app/carbon">carbon</a> based code formatting API. It uses the npm module pupetteer to visit https://carbon.now.sh with custom configuration in the request header in a faceless browser. To save the picture, the api takes a screenshot of the code field to save it on a public url for 24 hours.

This project uses [carbon](https://github.com/carbon-app/carbon) and also was heavily inspired by [carbonara](https://github.com/petersolopov/carbonara).

# Getting Started

For now the api is only deployed for Infotition so you have to deploy/host it for yourself.

## Development
**Requirements**: [Node.js](https://nodejs.org/en/) for running javascript code without a browser and [NPM](https://www.npmjs.com/) (Node package manager) to install npm modules.

If you want to start it locally from source code, you can simply clone this repository from terminal and install all the node modules.

```bash
# Clone this git repository
git clone https://github.com/Infotition/petron.git

# Move to the project root directory
cd petron

# Install the dependencies with npm package manager
npm install
```

Now everything should be installed. For petron to work, you still have to create and configure some files.

If you want your API to be public you don't have to change anything. But if you want to be protected, then navigate to the `config` folder in your project directory and choose the environment you want to set the token (production or development). Now change the value of the `TOKEN` field to anything you want. Keep in mind, that this is your token secret, so something similar to a password and should be a random string.

Also Configure the server environments from `production.env` and `development.env` as you like. Now everything should be ready to start.

Open up a terminal and move to your project directory and run following command to start the server:
```bash
npm run start:dev 
# or
npm start
```
The command `npm start` uses the `production.env` file and is used for deployment while `npm run start:dev` the `development.env`file for the local dev server. 

Now the api is up and running and if everything worked, you can send now requests to it.

## Docker

**Requirements**: [Docker Desktop](https://www.docker.com/products/docker-desktop) for Mac and Windows or [Docker Engine](https://docs.docker.com/engine/install/ubuntu/) for Linux.

If you just want to deploy or run the api server, then you can pull the provided docker container and run it:

```bash
# Pull the docker container from docker hub
docker pull infotition/petron
# Run the Container and open the Port 3000 to access it
docker run -p 3000:3000 -it --cap-add=SYS_ADMIN infotition/petron
```

You can also run docker-compose within the project directory after running the `npm run webpack:build` command.

```bash
docker-compose up --build
```

# Routes

## GET `/api/petron/petronize`
The `Body` of the request must be in JSON formatwith the following parameters (* means required):

| parameter | default | type | description |
| --------- | ------  | ---- | ----------- |
| `code`*   |         | string | Code snippet |
| `token`   | '' | string | Auth token for the api|
| `format` | `'url` | string | Response format |
| `theme`  | `'material'` | string | Theme of the code |
| `options` | `''` | object | Configuration of carbon

<br>

The `token` parameter is only required, if the api is configured with an token. Also the token in the request must be equal to the one in node envrionment.

The `format` parameter defines the response of the api with following options:
- 'url' - Sends the url of the image
- 'img' - Sends the image as binary

The `theme` is a preset of `options` for quick requests. You can still define more options but the `theme` overwrites the equal paramaters in `options`.
Supported Theme configurations (overwrites the option parameter):

- panda, zenburn, solarized_light, material

You can choose as respone `format` between 
- url, image

<br>

The `options` Object must be constructed like so:

| Field                | default            | type    |
| -------------------- | ------------------ | ------- |
| `paddingVertical`      | `'56px'`             | string  |
| `paddingHorizontal`    | `'56px'`             | string  |
| `backgroundColor`      | `'rgba(41,45,62,1)'` | string  |
| `dropShadow`           | `true`               | boolean |
| `dropShadowOffsetY`    | `'3px'`              | string  |
| `dropShadowBlurRadius` | `'13px'`             | string  |
| `theme`                | `'material'`         | string  |
| `windowTheme`          | `'sharp'`            | string  |
| `language`             | `'auto'`             | string  |
| `fontFamily`           | `'Hack'`             | string  |
| `fontSize`             | `'14px'`             | string  |
| `lineHeight`           | `'133%'`             | string  |
| `windowControls`       | `true`               | boolean |
| `widthAdjustment`      | `true`               | boolean |
| `lineNumbers`          | `false`              | boolean |
| `firstLineNumber`      | `1`                  | number  |
| `exportSize`           | `'4x'`               | string  |
| `watermark`            | `false`              | boolean |

For easy way to configure the request visit https://carbon.now.sh, set the appearance you wish, click on settings (Gear Icon) → misc → export config to download a json your current settings. Now you can add the values to the equal parameters of the config object and send the request.

<br>

**RESPONSE**: URL to the image of the code snippet or the image itself.

## Unsupported Parameters

Petron visits the carbon website with URL Headers which does not support every configuration possible on carbon: 
- backgroundImage, backgroundImageSelection, backgroundMode, squaredImage, hiddenCharacters, name, loading, icon, isVisible, width

# Contributing

Before creating an issue, please ensure that it hasn't already been reported/suggested and double-check the current features.

See the [contribution guide](https://github.com/Infotition/petron/blob/main/.github/CONTRIBUTING.md) if you'd like to submit a Pull request.

# Help

If you are experiencing problems while installing/coding petron, need hints or everything else you need another person to help you, please dont't hesitate to join our official [Infotition Discord Server](https://discord.gg/NpxrDGYDwV).

# License

Petron is available under the MIT License, see the [LICENSE](https://github.com/Infotition/petron/blob/main/LICENSE) file for more information.
