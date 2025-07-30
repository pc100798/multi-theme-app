# Multi-Theme Switcher App [Live-link](https://multi-theme-hipster.netlify.app/)

This is a React + TypeScript project built with [Create React App](https://github.com/facebook/create-react-app).  
The app allows users to switch between **three unique themes** (Light, Dark, and Colorful) with persistent settings across reloads. [Live-link](https://multi-theme-hipster.netlify.app/)

It uses:
- **styled-components** for dynamic theming  
- **React Router v6** for multiple pages (Home, About, Contact)  
- **Fake Store API** to display sample products  
- **Context API + localStorage** for theme management  


## Getting Started

In the project directory, you can run:

### `npm install`
Installs all required dependencies.

### `npm start`
Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  
The page will reload if you make edits. You will also see any lint errors in the console.

### `npm run build`
Builds the app for production into the `build` folder.  
It optimizes the build for the best performance.  
The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!  
See more: [deployment](https://facebook.github.io/create-react-app/docs/deployment).


## Features

- Three Themes:
  - **Light Theme**: Minimalist layout with Roboto font
  - **Dark Theme**: Sidebar-style layout with Merriweather font
  - **Colorful Theme**: Card-grid layout with Pacifico font
- Responsive design for desktop and mobile
- Theme switcher dropdown in the header
- Theme persistence using localStorage
- Multiple pages via React Router
- Subtle animations during theme change


## Project Structure
src/
│── components/ # Reusable components (Header, Card, etc.)
│── context/ # Theme context & provider
│── pages/ # Home, About, Contact, NotFound
│── theme/ # Theme definitions & typings
│── utils/ # Helper functions (localStorage utils, etc.)
│── App.tsx # Routes & layout
│── index.tsx # Application entry point

## Learn More

- [React Documentation](https://reactjs.org/)
- [React Router Docs](https://reactrouter.com/)
- [styled-components Docs](https://styled-components.com/)
- [TypeScript Docs](https://www.typescriptlang.org/)
- [Fake Store API](https://fakestoreapi.com/)

