# Screenshots
<img src="https://github.com/shikhar2817/confusion-React-/blob/main/public/img_screenshots/one.png">
<img src="https://github.com/shikhar2817/confusion-React-/blob/main/public/img_screenshots/two.png">
<img src="https://github.com/shikhar2817/confusion-React-/blob/main/public/img_screenshots/three.png">
<img src="https://github.com/shikhar2817/confusion-React-/blob/main/public/img_screenshots/four.png">
<img src="https://github.com/shikhar2817/confusion-React-/blob/main/public/img_screenshots/five.png">

# Start Json server
### `json-server --watch db.json -p 3001 -d 2000`

This should start up a server at port number 3001 on your machine. The data from this server can be accessed by typing the following addresses into your browser address bar:
[http://localhost:3001/dishes]
[http://localhost:3001/promotions]
[http://localhost:3001/leaders]
[http://localhost:3001/feedback]

Type these addresses into the browser address and see the JSON data being served up by the server. This data is obtained from the db.json file
The json-server also provides a static web server. Any resources that you put in a folder named public in the json-server folder above, will be served by the server at the following address:
[http://localhost:3001/]

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
