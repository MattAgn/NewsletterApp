# The app

It is a single screen app where you can enter an email to subscribe to a newsletter. If you enter a valid email, you have a success message but if your email is badly formatted, you'll receive an error message. For simplicity's sake, the api used does not really subscribe you to any newsletter, it only checks whether the email given is valid or not.

# Architecture of the project

This project contains two different versions of the same app :

- a basic version : using nothing but internal state and basic components
- a complex version : using formik, redux and sagas

To switch versions, go to the [index]('./index.js') and use the App component corresponding to the version you want to use

# Install the app

Clone the repo and then, at its root, run
`yarn`
or
`npm i`

Then open up a simulator or connect a real device and run
`react-native-run-ios`
or
`react-native-run-android`

# Tests

## Write the first test

Go to [this file]('./src/basic-version/pages/Home/__tests__/Home.test.tsx') and follow this [article]()

## Run the tests

Just run `yarn jest`. You can add `--coverage` to find out how much code the tests cover
