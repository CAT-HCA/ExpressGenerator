![enter image description here](https://lh3.googleusercontent.com/GwfTTRqhQ3c0u26XXiCTur3bDSdYslczDTaSTBdf4hr6bD1p8iM8W1zqqAvoiebBu-GM1OOJJTA)


# Express Generator

In this Section we'll user Express Generator to generate an Express App.

## Install Module

```
$ npm install express-generator -g
```

## Generate the App

```
$ cd A_WORKING_DIR_OF_YOUR_CHOICE

$ express --view=hbs demo

   create : demo
   create : demo/package.json
   create : demo/app.js
   create : demo/public
   create : demo/routes
   create : demo/routes/index.js
   create : demo/routes/users.js
   create : demo/views
   create : demo/views/index.hbs
   create : demo/views/layout.hbs
   create : demo/views/error.hbs
   create : demo/bin
   create : demo/bin/www
   create : demo/public/javascripts
   create : demo/public/images
   create : demo/public/stylesheets
   create : demo/public/stylesheets/style.css

   install dependencies:
     $ cd demo && npm install

   run the app:
     $ DEBUG=demo:* npm start


$ cd demo
$ npm install
npm notice created a lockfile as package-lock.json. You should commit this file.
added 83 packages in 5.319s

$ npm start
```

### Launch App

Load [http://localhost:3000/](http://localhost:3000/) in your browser



