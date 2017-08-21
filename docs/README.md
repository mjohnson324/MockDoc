# MockDoc

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/fHRjMOxC/zocdoc-clone

## Minimum Viable Product

MockDoc is a web application inspired by ZocDoc built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Doctor/Practice Profiles
- [ ] Search/Filters
- [ ] Book Appointments
- [ ] Reviews/ratings
- [ ] Map
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Patient/Doctor Profiles  (1 day)

**Objective:** Patients and doctors can view and edit their profiles.

### Phase 3: Practice Profiles (1 days)

**Objective:** Practices can view and edit their profiles independent of doctors. Patients can view doctor and practice profiles.

### Phase 4: Search/filters (2 days)

**Objective:** Patients can search for doctors through google's api based on multiple parameters including specialty, procedure, illness, location, gender, and insurance information. Other parameters may apply. Patients can search for doctors and view profiles before signing in.

### Phase 5: Book Appointments (2 days)

**Objective:** Patients can book appointments with multiple doctors. Appointments can be created, viewed, updated or destroyed. Appointments belong to a patient and a doctor. Appointments which have taken place can no longer be destroyed.

### Phase 6: Reviews/ratings (1 day)

**Objective:** After an appointment patients can review and rate a doctor. Reviews belong to a patient and a doctor. Ratings consist of three metrics: Overall Rating, Bedside Manner, and Wait Time, each which can be set between one to five stars. A doctor's reviews are displayed on their profile page.

### Phase 7: Map (1 day)

**Objective:** Add visible google maps displaying doctor locations. Maps are viewable from the search page and from doctor and practice profile pages.

### Bonus Features (TBD)
- [ ] Insurance card photos
- [ ] Wellness Guides
- [ ] Online check-in
