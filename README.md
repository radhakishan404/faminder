# Faminder - React Native Project

Faminder is a React Native project designed to provide users with a seamless experience in managing their schedule. The application includes essential features such as a login page, register page, home page, and an add event page. Redux is utilized for temporary authentication storage.

## Overview:

Currently this app have default email and password for login, you can register your account and login.

## Project Structure

The project is organized into distinct directories to facilitate clarity and maintainability:

- **components:** This directory holds common and static components crucial for various parts of the application.

- **containers:** Three primary files make up this directory:
  1. **index.js:** Combines container components, connects to the store, and passes data as props to the container.
  2. **container.js:** Contains the core logic and code for specific functionalities.
  3. **store.js:** Manages the Redux state data, facilitating communication with the container components.

- **helpers:** Essential helper functions are stored in this directory, providing utility across the application.

- **redux:** Handles state management using Redux, with separate folders for authentication (`sessionReducer`) and other state-related functionalities.

- **routes:** This directory consists of four files:
  1. **index.js:** Define public and private routes based on auth.
  1. **PublicNavigation.js:** Defines routes accessible to all users.
  2. **PrivateNavigation.js:** Specifies routes accessible only after authentication.
  2. **withNavigate.js:** Help us to pass the data of useNavigation as props to main container.

## Getting Started

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Explore the `components` directory for reusable UI elements.
5. Review the `containers` directory for the primary logic and state management of different sections.
6. Utilize the `helpers` directory for additional utility functions.
7. Inspect the `redux` directory for authentication and other state-related management.
8. Explore the `routes` directory to understand the available navigation paths.

## Running the Application

Ensure you have the required dependencies and then run:

```bash
npx react-native start
```

You may face some issue when running on different different version, please reach out to me if you face any issue.

## Contributing

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests. Follow the established coding standards and guidelines for a smooth collaboration.

## License

This project is licensed under the [MIT License](LICENSE).
