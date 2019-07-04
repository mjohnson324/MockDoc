# Design Choices

Project details outlining library and design choices are listed here.

## Backend

* Passwords are encrypted with  _**BCRypt**_ prior to storage. New session tokens are created on login and logout to protect users against _**CSRF**_ attacks.
* **Paperclip** and **AWS-SDK** are integrated to store and load images from AWS S3 buckets.
* API keys are encrypted via **Rails secrets** to prevent malicious users from stealing keys.
* Geocoder was chosen to handle GPS queries on the backend. Doctor addresses are stored as GPS coordinates and decoded on the frontend via **Google Maps**

## Frontend

* A user's login status is preserved via _**bootstrapping**_.
* **Babel** transpiles JavaScript for multi-browser compatibility.
* **Jquery** handles _**AJAX**_ requests.
* **Lodash** has various helper functions for sorting and merging data in the browser.
* **Moment** is essential for comparing and sorting time-based data between the backend and frontend.
* **React router** simplifies the setup of frontend routes and transitions between components.
* **ESlint** is used to maintain consistent code style throughout the frontend and for spotting errors.
* **Google Maps** renders doctor addresses for a visual display and handles address autofill.
