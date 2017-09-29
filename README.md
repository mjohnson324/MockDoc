# MockDoc
-----
**Link to Site:** [MockDoc](https://www.mockdoc.live/)


MockDoc is a full-stack web application based off ZocDoc, an appointment-booking app. I employed **React.js** with **Redux** as the architectural framework on the frontend. On the backend I'm using **Ruby on Rails** and a **PostgreSQL** database. Styling was accomplished with **Sass**.

* **APIs:** [Google maps API](https://developers.google.com/maps/documentation/javascript/)
* **Gems:** [Ruby Geocoder](https://github.com/alexreisner/geocoder)
* **JS Libraries:** [moment.js](https://momentjs.com/docs/)
* **Ruby version:** 2.3.1
* **Rails version:** 5.1.3
* **PostgreSQL version:** 9.6

* **Additional Technologies:**
  - webpack, for bundling files and managing transpilation
  - node.js, for managing JS packages
  - lodash.js, for various helper functions

## Features & Implementation
-----
### Authentication:
**Backend:**

**Frontend:**

---
### Doctor Profiles:
**Backend:** For demo purposes, doctors are treated like business profiles on Yelp rather than a second set of users.
- Doctors have associations with specialties, certifications, reviews, and appointments. Each doctor's data is stored with several attributes including specialty, education and location.
- Locations are inputted as postal addresses and stored as geographic coordinates with the aid of the _Geocoder_ gem.
- Geocoder is also used get addresses from coordinates to display to users on the frontend.

Specialties and certifications were made into independent tables in spite of their limited nature (only ~30 boards and ~50 specialties are recognized in the US) because of the _many-to-many_ relationship existing between them and doctors. Doctors are associated with certifications and specialties via join tables.

**Frontend:** When a doctor's profile is loaded their associated appointments, reviews, specialties and certifications are loaded along with them. Google maps displays their work address for the patient.
- Appointments and reviews are stored in separate slices of state.
- Doctors have arrays of review and appointment IDs used to retrieve relevant appointments and reviews to render.

![image of MockDoc doctor profile](./docs/images/doctor-profile.png)

-----
### Searching for Doctors:
**Backend:** Search filter parameters are sent as data in _GET_ requests for doctors. The app searches for doctors in a given area around the specified location, then filters the results by the specialty indicated by the user.

```
def index
  processed_specialty = params[:specialty].downcase
  doctors = Doctor.near(params[:address], 30)
    .includes(:specialties, :certifications, :reviews, :appointments)
    .joins(:specialties).where(specialties: { name: processed_specialty })

  @doctors = doctors.select do |doctor|
    doctor.specialties.pluck(:name).include?(processed_specialty)
  end
end
```
- Geocoder simplifies the process of searching for doctors near a given address (up to 30 miles away by default)
- To improve runtime speed the app applies _eager loading_, retrieving all associated information for all doctors in _one_ query to the database.
- To reduce loading time only appointments a week in advance of the current date are retrieved for each doctor. Doctors can potentially schedule appointments months in advance which could result in significant loading times.

**Frontend:** Users can start searching for doctors before logging in. By default the search feature looks for primary care doctors in New York, but users can search for doctors anywhere based on specialty.
- A _filter_ slice of state manages the current search query and is updated based on the inputs to the search bar.

On the search index page each index consists of a miniature profile with links to the doctor's page and available appointments. Google maps is also integrated showing the doctors' location on a map which remains on the page as the user scrolls through search results. The UI is very similar to  ZocDoc in organization:

![image of MockDoc search index](./docs/images/search-index.png)

-----
### Scheduling Appointments:
**Backend:**


**Frontend:**

-----
### Reviews:
**Backend:**


**Frontend:**
-----
## Next Steps: Future Directions for the Project

Beyond completing the present features and improving the site's performance I intend to implement the
following features in the near future.

**Fuzzy Searches**

Right now the search functionality is limited in what it accepts and provides no hints as to how to make successful queries. I intend to change that, implementing more robust search functionality that will enable patients to find doctors more easily.

**Other Potential Directions:**
* Responsive design: make it mobile-friendly.
* Multiple users: doctors are paid users with a different set of privileges than patients.
* Photographed insurance: Patients can take photos of their insurance ID for faster booking.
* Online form fill-out: Patients can fill out forms for doctors ahead of the appointment online.
* Wellness plans: Healthcare guidelines are provided to the user based on demographics.
