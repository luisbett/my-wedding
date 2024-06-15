# My Wedding

A front-end application designed to provide information about my wedding party to guests and allow them to record videos of the event, built using React (JavaScript, HTML, and CSS) + TypeScript.

## Live Link

[wedding-luis-e-le.web.app](https://wedding-luis-e-le.web.app/)

## Project Status

This project is completed.

## Project Screen Shots

![screenshot_1](/public/screenshot_1.png)

![screenshot_2](/public/screenshot_2.png)

![screenshot_3](/public/screenshot_3.png)

## About

This was my fourth project built using React JS + TypeScript, and the objective was to create a web app where my guests could record videos at my wedding party and automatically upload them to my Firebase Storage folder after finishing recording it. This way, they wouldn't need to send the video manually after recording it.

I used the [Firebase Storage](https://firebase.google.com/products/storage) service to save the videos from my guests.

After creating this feature I decided to make the app able to give important information about my wedding party to my guests as well. On it they could see the schedule of the night, the menu, the wishlist for presents and my PIX key used in Brazil to send money, that they could give as a present as well.

In this project, I used different packages:

* [**firebase**](https://www.npmjs.com/package/firebase) for connecting to firebase storage and saving the videos in the project;
* [**i18next**](https://www.npmjs.com/package/i18next) for implementing internationalization in the project;
* [**react-hot-toast**](https://www.npmjs.com/package/react-hot-toast) for the notifications in the project;
* [**react-i18next**](https://www.npmjs.com/package/react-i18next) for integrating i18next with React in the project;
* [**react-icons**](https://www.npmjs.com/package/react-icons) for the icons in the project;
* [**react-loading-icons**](https://www.npmjs.com/package/react-loading-icons) for the loading icons in the project;
* [**react-media-recorder-2**](https://www.npmjs.com/package/react-media-recorder-2) for recording video streams in the project;

I chose to use the react-media-recorder-2 package instead of react-media-recorder because the latter had some bugs affecting its functionalities.

I chose to use Vite to minimize the initial setup and invest more time in working on the project's business logic.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm run dev`

To Visit App:

`localhost:5173`