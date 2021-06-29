# React Native: Clean Architecture - Lesson 1

## About
This is the first example building a React Native (RN) app using Clean Architecture implementation.

This is something I have always implemented in my code, Android development to be specific.

Now that I'm slowly moving to Cross-Platform development, I would like to carry the wisdom with me.

I have used this [video](https://www.youtube.com/watch?v=qOH2X5hciiA), by Progressive Dev, to build the sample app.

The goal being able to split a project into separate layers that are independent of each other.

In the example, we shall have three layers: 
- presentation layer - where views are contained
- application/business logic layer - describe use cases
- infrastructure layer - supply data for the project

The nature of dependencies between the layers occures in the following manner:
- presentation layer imports the application layer to use its data, this happens through use of E6 imports
- infrastructure layer - uses Depencency Injection (DI) and Inversion of Control (IOC) to inject its methods and data into the application layer

## Run app
First, you will start metro server (JavaScript bundler that ships with React Native).

To start, run the command;

```
$ react-native start
```

OR 

```
$ react-native start --port=8082
```

OR

```
$ yarn start --port=8082 --reset-cache
```

*NB: Port is optional but necessary when you get an error such as `error listen EADDRINUSE: address already in use :::8081`. In that case you will have to use a different one*

Then plug in your device via USB to your development machine and run the command below;


```
$ npx react-native run-android
```

Somestimes you might get the error below, whereby the default port i.e. 8081 is in use. In that case you can specify the port

```
$ npx react-native run-android --port=8082
```