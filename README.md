
## Built With :package:

- [HTML5](https://www.w3schools.com/html/)
- [CSS3](https://www.w3schools.com/css/)
- [JavaScript](https://www.w3schools.com/js/DEFAULT.asp)
- [TypeScript](https://www.typescriptlang.org/)
- [Angular](https://angular.io/)
- [NodeJS](https://nodejs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Google Font](https://fonts.google.com/) for the fonts
- [FontAwesome](https://fontawesome.com/) for the icons
- [GitHub Pages](https://pages.github.com/) for hosting
- [Apify](https://apify.com/) for generating screenshot of website
- [SmartMockups](https://smartmockups.com/) for adding mockups/desktop background to screenshot


## How to run locally? :dart:

  Make sure you have [Node](https://nodejs.org/en/) and [git](https://git-scm.com/) installed.

  ```bash
  node --version
  git --version
  ```

- Clone the repository :
    - With HTTPS:
      ```bash
      git clone https://github.com/cthulhu897/cthulhu897.github.io.git
      ```
    - With SSH:
      ```bash
      git@github.com:cthulhu897/cthulhu897.github.io.git
      ```
      
- Navigate to working Directory and **main** branch

	```bash
	cd cthulhu897.github.io
	git switch main
	```

- Install the dependencies:

  ```bash
  npm install -f
  ```
	- Installs all the dependencies required by the project.


- Fire up a development server:

  ```bash
  ng serve
  ```
    - Runs the app in the `development` mode.
    - Open [http://localhost:4200/](http://localhost:4200/) to view it in the Default Browser.
    - The page will reload if you make edits.
    - You will also see any lint errors in the console.


- Deploy code to GitHub Pages (gh-pages):
  
  ```bash
  ng deploy --base-href="/"
  ```
    - Builds the application for production to the `build` folder & deploys application on `GitHub Pages`.
    - It correctly bundles Angular in production mode and optimizes the build for the best performance.
    - The build is minified and the filenames include the hashes.
  

- Create a new branch:

  ```bash
  git checkout -b "<NAME-OF-THE-BRANCH>"
  ```

- Add, Commit & Push the local changes to remote repository:

  ```bash
  git add .
  git commit -m "<COMMIT-MESSAGE>"
  git push origin <NAME-OF-THE-BRANCH>
  ```

**For Docker Users**

Make sure you have [Docker](https://www.docker.com/products/docker-desktop/) installed.

```bash
docker --version
```

  - To pull the [GitHub Container Registry](https://github.com/cthulhu897/cthulhu897.github.io/pkgs/container/cthulhu897.github.io) Image:
    ```bash
    docker pull ghcr.io/cthulhu897/cthulhu897.github.io:latest
    ```
  
  - To pull the [Dockerhub](https://hub.docker.com/r/cthulhu897/cthulhu897.github.io) Image:
    ```bash
    docker pull cthulhu897/cthulhu897.github.io:latest
    ```
  
  - To automatically pull and run the [GitHub Container Registry](https://github.com/cthulhu897/cthulhu897.github.io/pkgs/container/cthulhu897.github.io) Image:
    ```bash
    docker run -d -p 4200:80 ghcr.io/cthulhu897/cthulhu897.github.io:latest
    ```

  - To automatically pull and run the [Dockerhub](https://hub.docker.com/r/cthulhu897/cthulhu897.github.io) Image:
    ```bash
    docker run -d -p 4200:80 cthulhu897/cthulhu897.github.io:latest
    ```

    Open [http://localhost:4200/](http://localhost:4200/) to view it in the Default Browser.


## Code adaptations and Rebranding
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://cthulhu897.github.io"><img src="https://avatars.githubusercontent.com/u/11900241?v=4?s=100" width="100px;" alt="Francisco Díaz"/><br /><sub><b>Francisco Díaz</b></sub></a><br /><a href="https://github.com/cthulhu897/cthulhu897.github.io/commits?author=cthulhu897" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.<br/>
Copyright &copy; 2021 Francisco Díaz. All rights reserved. 

## 📝 Credits

Original template forked from https://github.com/JayantGoel001/JayantGoel001.github.io
