# git-users

This is a simple user search app that allows to search for Github users by using Github public API.

It contains four different views:
- **Home**: where the user can fetch the data by specifying how many Github users wants to search.
  - A spinner is loaded every time the user fetches data.
- **Users**: where the user can see a list of Github users with their avatar, login and an extra info button. Also, it is possible to:
  - Fetch more users.
  - Go back to Home.
  - Go to the user details.
- **Details**: where more detailed information of the user is rendered, like the ID or the html_url. Also, it is possible to:
  - Go back to Users or Home.
  - Refresh the page without losing data.
- **NotFound**: for the situations when the url doesn't exist.

It also has tests for one of the React components and for two reducers.

### Main technologies:

- **JavaScript ES6**
- **React** to create the user interface.
- **Redux** for a predictable state container.

### Other technologies and tools used:

- **create-react-app** as a started kit.
- **Jest** and **enzyme** for testing.
- **React-Router** as a router.
- **React-Bootstrap** for design.
- **Yarn** as package manager.

### To run the app:

- First clone this repository in your local machine ```git clone https://github.com/mapageKA21/git-users```.
- Go to the project folder ```cd git-users```.
- Then run ```yarn install``` from your terminal to install all required dependencies (you can also run ```npm install```).
- Run ```yarn start``` (or ```npm start```).
- Go to http://localhost:3000/
- To run the tests: ```yarn test``` (or ```npm test```)

### Screenshots:
<img width="440" alt="screen shot 2018-07-04 at 2 03 28 am" src="https://user-images.githubusercontent.com/21932552/42251356-b93f92aa-7f2e-11e8-973a-d4b6f4422410.png">

<img width="606" alt="screen shot 2018-07-04 at 2 04 15 am" src="https://user-images.githubusercontent.com/21932552/42251359-c0414db4-7f2e-11e8-831c-fe1e7d2b852b.png">

<img width="630" alt="screen shot 2018-07-04 at 2 04 25 am" src="https://user-images.githubusercontent.com/21932552/42251364-c47176fc-7f2e-11e8-8334-239771aef3ba.png">

<img width="429" alt="screen shot 2018-07-04 at 2 04 38 am" src="https://user-images.githubusercontent.com/21932552/42251366-c8a19194-7f2e-11e8-9f7d-d61b41490fe9.png">

