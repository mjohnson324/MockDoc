# MockDoc

**Link to Site:** [MockDoc](https://www.mockdoc.live/)

MockDoc is a full-stack web application based off ZocDoc, an appointment-booking app. It imitates the site's core features (searching for doctors, scheduling appointments, leaving reviews) with a light satirical spin: fake doctors of questionable qualifications offering free services to the public.

Hosted on Heroku.

---

## Technologies

* Frontend Framework: **React** 16.X.X & **ReduX** 3.X.X
* Backend: **Ruby on Rails** 5.1.3 as an API (**Ruby** 2.3.1)
* Database: **PostgresQL** 10.5
* Styling: **Sass** preprocessor

* **External APIs:**
  * [Google maps API](https://developers.google.com/maps/documentation/javascript/)
* **Gems:**
  * [Ruby Geocoder](https://github.com/alexreisner/geocoder)
  * [Paperclip](https://github.com/thoughtbot/paperclip)
  * [AWS-SDK-Ruby](https://github.com/aws/aws-sdk-ruby)

* **JS Libraries:**
  * [Moment.js](https://momentjs.com/docs/)
  * [Lodash.js](https://lodash.com)
  * [React Router](https://github.com/ReactTraining/react-router)

* **Webpack 3**, for bundling files and managing transpilation
* **Node 8.11.3**, for package management

---

## Features & Implementation

**TL;DR Summary:**

* Core features:
  1. User _**authentication**_
  2. Doctor _**profiles**_: Displays doctor information including reviews and open appointments.
  3. _**Search**_ functionality: Search for doctors by specialty and location
  4. _**Appointment**_ scheduling: Users can book appointments just by clicking on a link.
  5. Appointment _**reviews**_: Leave a review after an appointment has taken place.
  * Google Maps allows displaying doctor offices near a patient's home
  * Geocoder enables searching for doctors a given distance (default 30 miles) from the search address
  * The redux store is kept normalized at all times with separate slices of state for Doctors, Reviews, Appointments, and login credentials. This prevents the state from becoming too complex over time.

* [API Endpoints][API Endpoints]
* [Component Hierarchy][hierarchy]
* [Sample State][state]
* [Schema][schema]

  [API Endpoints]: docs/api-endpoints.md
  [hierarchy]: docs/component-hierarchy.md
  [state]: docs/sample-state.md
  [schema]: docs/schema.md

### Details on Extra Tech Integrated with Rails and React/Redux

#### Backend

* Passwords are encrypted with  _**BCRypt**_ prior to storage. New session tokens are created on login and logout to protect users against _**CSRF**_ attacks.
* **Paperclip** and **AWS-SDK** are integrated to store and load images on AWS S3.

#### Frontend

* A user's login status is preserved via _**bootstrapping**_.
* **Babel** transpiles JavaScript for multi-browser compatibility.
* **Jquery** handles _**AJAX**_ requests.
* **Lodash** has various helper functions for sorting and merging data.
* **Moment** is essential for comparing and sorting time-based data between the backend and frontend.
* **React router** simplifies the setup of frontend routes and transitions between components.
* **ESlint** is very handy for maintaining consistent code style throughout the frontend and spotting errors.

### Sample Code

```javascript
const Auth = ({ component: Component, path, loggedIn }) => {
  return(<Route path={path} render={(props) => (
    !loggedIn ? (
      <Redirect to="/signin" />
    ) : (
      <Component {...props} />
    )
  )} />);
};
```

### Site Pictures (coming soon)

<!-- ![image of MockDoc doctor profile](./docs/images/doctor-profile.png) -->
Doctor Profile

<!-- ![image of MockDoc search index](./docs/images/search-index.png) -->
Search Results

<!-- ![image of MockDoc appointments layout] (./docs/images/appointments.png) -->
Sorted Appointments

---

## Next Steps: Future Directions for the Project

Beyond improving the site's performance and refactoring code I intend to implement the following features in the near future:

* **Appointment Scrolling:** ZocDoc has a feature where users can check appointment availability over the next three-day time span for a doctor with just the click of a button, indicating many appointments are retrieved at once. I intend to implement a similar feature by manipulating the state of the search index and doctor profiles.

* **Responsive Design:** Make the website presentable on mobile devices.

* **Photos for Doctors:** Doctors have profile pictures on ZocDoc. AWS will help in the implementation for storing photos.
