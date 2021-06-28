# React Native: Clean Architecture - Lesson 1
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