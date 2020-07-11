# Matthew Sit's website

## Run on local server
```
npm start
```
Sass automatically compiles.
Allows for development with Hot Module Replacement (HMR) for `index.html`.
Browser automatically opens to the `localhost`.
To develop with HMR on another page, run
```
parcel page_name.html
```
instead.
This is due to [this known parcel bug](https://github.com/parcel-bundler/parcel/issues/1931).

## Deploy
```
npm run deploy
```
This also triggers the `predeploy` script before the `deploy` script,
which cleans the `dist` directory before it is committed to the `master` branch
and auto-pushed live. Human-readable edits are made in the other directories on
the `dev` branch, with commits running parallel to the `master` branch.
