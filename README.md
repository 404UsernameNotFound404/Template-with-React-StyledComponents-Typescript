This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running The App

It's a simple create react app with typescript. We are also using yarn in this project.

`yarn install`
`yarn start`

# Architecture

## File Structure

All code goes in a package. This enforces the idea of re-usability. This means whenever you start to write code consider if it could be used elsewhere. If so create a package.
E.X of a package is "date-picker-react".

### There are also three types of packages.

1. Package with only functions and no components. A good example of this could be "home-page-api-calls" this could be several functions that make API calls and parse the response.

2. Another would be a package with components. A good example of this could be "date-input-react" with the package being a component that displays a date picker.

3. The final package type is page. This is where you can include functions/components that won't be needed outside of a certain page of the applications. E.X "login-page-react"
   This package would be what renders when the user is on the login route. It could also have a file "checkLoginInformation.ts" which could contain a simple function that makes sure the email/password follow a regex.

Another thing to note is package types 1/2 should be able to work fine without any state management(react-context) however they can still use it if they, check if it exists first. For instance a package may want to signal to the app that it's loading which can be done through state management. This keeps packages doing specific jobs.

### File Structure Naming

1. The package with only functions should just be it's name E.X "home-page-api-calls"

2. A package with components should end with "-react" E.X "date-input-react"

3. A page package name should end with "-page-react" E.X "login-page-react"

A thing all packages share is that each should have tests.

The reasoning behind this is that it should help reduce dev's solving problems other's have solved. So you should be keeping a list of all the packages we have created and the project it is in. So next time a dev has to solve the problem they at least have as starting point with tests that should probably not drastically change between implementations.

# Packages that come default with template

1.  "loading-react" this is a package that is displayed over the contents of what is being rendered. And is controlled by react-context so any package can trigger the app to show a loading screen. This makes a much better experience for the dev's and users as in a time crunched project we may ignore showing the use something is loading, and if we do the dev needs to take the time to make a component and dynamically render it.
    E.X of use in component

    ```
    const { setIsLoading } = useContext(AppContext);

    const someFunctionYouNeedToTriggerLoadingIn = async () => {
        setIsLoading(true);
        let res = await someAPICall()
        setIsLoading(false);
    }
    ```

2.  "login-page-react" this is a whole login page. It relies on react context providing a login function.

3.  "message-to-user-react" this is similar to "loading-react" expect you are using context to display a message to a user.
    E.X of use in components

    ```
    const { setMessageToUser } = useContext(AppContext);

     const someFunctionYouNeedToShowUserMessage = async () => {
        try {
             if (loggedIn) {
                setMessageToUser({message: "already logged in", variant: "default"})
            }
            if (email.length == 0) {
                throw "ENTER YOUR EMAIL GOD DAMMIT";
            }
            setMessageToUser({message: "logged in", variant: "success"})
        } catch(err) {
            setMessageToUser({message: err, variant: "error"})
        }
    }
    ```
