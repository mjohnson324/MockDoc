# MockDoc

**Link to Site:** [MockDoc](https://www.mockdoc.live/)

MockDoc is a full-stack web application based off ZocDoc, an appointment-booking app.

---
## Technologies:
* Frontend Framework: **React** 15.X.X & **ReduX** 3.X.X
* Backend: **Ruby on Rails** 5.1.3 as an API (**Ruby** 2.3.1)
* Database: **PostgresQL** 9.6
* Styling: **Sass** preprocessor
* **Other APIs:** [Google maps API](https://developers.google.com/maps/documentation/javascript/)
* **Gems:** [Ruby Geocoder](https://github.com/alexreisner/geocoder)
* **JS Libraries:** [Moment.js](https://momentjs.com/docs/), [Lodash.js](https://lodash.com), [React Router](https://github.com/ReactTraining/react-router)
* **Webpack 2**, for bundling files and managing transpilation
* **Node 6.10.1**, for package management

---
## Features & Implementation
**TL;DR Summary:**
  - MockDoc implements some of the core features of ZocDoc:
    1. User _**authentication**_
    2. Doctor _**profiles**_: Displays doctor information including reviews and open appointments.
    3. _**Search**_ functionality: Search for doctors by specialty and location
      - Google Maps allows displaying doctor offices near a patient's home
      - Geocoder enables searching for doctors a given distance (default 30 miles) from the search address
    4. _**Appointment**_ scheduling
    5. Appointment _**reviews**_: Leave a review after an appointment has taken place.
  * The redux store is kept normalized at all times with separate slices of state for Doctors, Reviews, Appointments, and login credentials. This prevents the state from becoming too complex over time.


### Database Layout:

* [DB schema][schema]
[schema]: docs/schema.md

**Key Details:**
 - Join tables exist between doctors & specialties and doctors & certifications because doctors can have more than one of each.
 - Doctor addresses are stored as latitude and longitude (lat and lng, respectively) to interface with Google Maps API and Ruby Geocoder.

### Authentication:

**Backend:** Passwords are encrypted with  _**BCRypt**_ prior to storage. New session tokens are created on login and logout to protect users against _**CSRF**_ attacks.

**Frontend:** A user's login status is preserved via _**bootstrapping**_.
  - User information is added to the _**Redux store**_,
  - This information is then deleted from the window.
  - Site access is restricted until users log in with the following code:

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

### Doctor Profiles:

**Backend:** For demo purposes, doctors are treated like business profiles instead of users.

**Frontend:** Doctors have arrays of review and appointment IDs used to look up related data for rendering while keeping the state normalized.

![image of MockDoc doctor profile](./docs/images/doctor-profile.png)

### Searching for Doctors:

**Backend:** To reduce loading time only a limited number of appointments are retrieved for each doctor returned in a search request, specifically unbooked appointments up to a week from the initial start day:

```ruby
def index
  processed_specialty = params[:specialty].downcase
  doctors = Doctor.near(params[:address], 30)
    .includes(:specialties, :certifications, :reviews, :appointments)
    .joins(:specialties, :appointments).where(
      specialties: { name: processed_specialty },
      appointments: {
        start_time: (Time.now)..(Time.now + 6.day),
        patient_id: nil
        })

  @doctors = doctors.select do |doctor|
    doctor.specialties.pluck(:name).include?(processed_specialty)
  end
end
```

- To improve runtime speed the app also applies _**eager loading**_, retrieving all associated information for all doctors in _**one**_ query to the database.

**Frontend:** Users can search for doctors of many specialties anywhere (default search area New York).

- A _filter_ slice of state manages the current search query and is updated based on the inputs to the search bar. The search results UI is very similar to  ZocDoc in organization:

![image of MockDoc search index](./docs/images/search-index.png)

-----
### Scheduling Appointments:
** - Book appointments by selecting from a doctor's available upcoming appointments. **

##### ** This was by far the most challenging portion of the app to implement. Rendering appointments was difficult for several reasons:

- Appointments need to be sorted and displayed by start time, but making comparisons with _Date_ objects in JS (and formatting them) is difficult.
- Initially the sorting process was also very slow.

**Backend:** Initially I sped up the app with custom _SQL_ applied in a scope argument to the appointments association for doctors:

- Essentially, Only the next week of unbooked appointments was retrieved in the association.
  + This approach permitted eager loading for doctors without having to retrieve all the doctor's appointments.
  + The downside was its inflexibility; only appointments up to a week in advance of the current date could ever be seen.
  + This dilemna was easily solved with an additional join on the appointments table, filtering by time ranges.

**Frontend:** Sorting, formatting and displaying of appointment times is simplified with the _moment.js_ library. In search results appointments are first sorted by doctor, then by day. This way, appointments are displayed such that appointments for a given day and doctor appear in order:

![image of MockDoc appointments layout](./docs/images/appointments.png)

-----
### Reviews:

##### ** Implementing reviews did not come without challenges. At this point I learned I had set model associations in such a way that I wasn't retrieving the right information for doctors, forcing me to rethink all my associations.


**Backend:** Reviews are retrieved with doctors much in the same manner as appointments.
  - To keep the state normalized appointments, reviews and doctors are sent as independent JSON objects built using jbuilder.
  - Doctors maintain references to their appointments and reviews with arrays of ids that can be used to retrieve them for display on the frontend.
  - Patient reviews and appointments are retrieved in much the same way.
Additionally an average rating is computed from all of a doctor's reviews based on the average of the overall rating score.

**Frontend:**
-----
## Next Steps: Future Directions for the Project

Beyond improving the site's performance I intend to implement the following features in the near future:

**Fuzzy Searches**

Right now the search functionality is limited in what it accepts and provides no hints as to how to make successful queries. I intend to change that, implementing more robust search functionality that will enable patients to find doctors more easily.

**Appointment Scrolling**

ZocDoc has a feature where users can appointment availability over the next three-day time span for a doctor with just the click of a button. I intend to implement a similar feature by manipulating the state of the search index and doctor profiles.

**Other Potential Directions:**
* Responsive design: make it mobile-friendly.
* Multiple users: doctors are paid users with a different set of privileges than patients.
* Photographed insurance: Patients can take photos of their insurance ID for faster booking.
* Online form fill-out: Patients can fill out forms for doctors ahead of the appointment online.
* Wellness plans: Healthcare guidelines are provided to the user based on demographics.
