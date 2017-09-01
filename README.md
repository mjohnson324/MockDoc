# MockDoc
-----
**Link to Site:** [MockDoc on Heroku](https://mockdoc.herokuapp.com/)


MockDoc is a full-stack web application based off [ZocDoc](https://www.zocdoc.com). I employed _**React.js**_ with _**Redux**_ as the architectural framework on the frontend. On the backend I'm using _**Ruby on Rails**_ and a _**PostgreSQL**_ database. Styling was accomplished with _**Sass**_.

* APIs: [Google maps API](https://developers.google.com/maps/documentation/javascript/)
* Gems: [Ruby Geocoder](https://github.com/alexreisner/geocoder)
* JS Libraries: [moment.js](https://momentjs.com/docs/)
* Ruby version: 2.3.1
* Rails version: 5.1.3
* PostgreSQL version: 9.6

## Features & Implementation
-----
### Searching for Doctors:
**Backend:**


**Frontend:**

---
### Doctor Profiles:
**Backend** For demo purposes doctors are treated like business profiles on Yelp rather than a second set of users. In the database doctors are stored with several attributes including specialty, education and location. Locations are inputted as postal addresses and stored as geographic coordinates with the aid of the Geocoder gem. Doctors have associations with specialties, certifications, and appointments.
Specialties and certifications were made into independent tables in spite of their limited nature (only ~30 boards and ~50 specialties are recognized in the US) because of the many-to-many relationship existing between them. Doctors are associated with certifications and specialties via a join table.


**Frontend:** Doctors are handled in several places on the frontend. On the search index page each index consists of a miniature profile with links to the doctor's page and available appointments. Google maps is also integrated showing the doctors' location on a map which remains on the page as the user scrolls through search results. The UI is very similar ZocDoc in organization:

![image of MockDoc search index](./docs/wireframes/search-index.png)

-----
### Scheduling Appointments:
**Backend:**


**Frontend:**

-----
## Next Steps: Future Directions for the Project

Beyond completing the present features and improving the site's performance I intend to implement the
following features in the near future.

**Reviews**

Leaving reviews is a core feature of ZocDoc and a critical part of the site's appeal. Reviews are heavily vetted to ensure they are impartial, objective, and fair, and only written by patients who've
seen the doctor in question. I intend to have reviews working in a similar manner.

**Fuzzy Searches**

Right now the search functionality is limited in what it accepts and provides no hints as to how to make successful queries. I intend to change that, implementing more robust search functionality that will enable patients to find doctors more easily.

**Other Potential Directions:**
* Responsive design: make it mobile-friendly.
* Multiple users: doctors are paid users with a different set of privileges than patients.
* Photographed insurance: Patients can take photos of their insurance ID for faster booking.
* Online form fill-out: Patients can fill out forms for doctors ahead of the appointment online.
* Wellness plans: Healthcare guidelines are provided to the user based on demographics.
