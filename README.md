# AMDB Project Overview

The AMDB (IMDB Clone) project is developed as part of a task from IO Factory, aiming to create a comprehensive database system that associates actors and producers with movies. This README outlines the technologies used in the backend and provides a brief overview of the data models implemented in the project.

## Technologies Used

The backend of AMDB is built using the following technologies and libraries:

- **Node.js** as the runtime environment.
- **Express.js** (`express`: `^4.18.2`) for the web server framework.
- **MongoDB** as the database, with **Mongoose** (`mongoose`: `^8.1.3`) for object data modeling.
- **bcryptjs** (`bcryptjs`: `^2.4.3`) for hashing and managing user passwords.
- **jsonwebtoken** (`jsonwebtoken`: `^9.0.2`) for generating JWTs for authentication.
- **cookie-parser** (`cookie-parser`: `^1.4.6`) for parsing and setting cookies.
- **dotenv** (`dotenv`: `^16.4.5`) for managing environment variables.
- **cors** (`cors`: `^2.8.5`) to enable CORS with various options.

## Data Models

### Actor Model

The `Actor` model represents individuals who act in movies. It includes their name, gender, and date of birth.

```js
const actorSchema = new Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: String, required: true },
});

const Actor = mongoose.model("Actor", actorSchema);
```

### Producer Model

The `Producer` model represents producers of movies. It captures details like the producer's name, country, date of birth, and a bio.

```js
const producerSchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  dob: { type: String, required: true },
  bio: { type: String, required: true },
});

const Producer = mongoose.model("Producer", producerSchema);
```

### Movie Model

The `Movie` model relates to the movies in the database. It includes the movie's name, year of release, plot, poster name, associated actors, and the producer.

```js
const movieSchema = new Schema({
  movieName: { type: String, required: true },
  yearOfRelease: { type: Number, required: true },
  plot: { type: String, required: true },
  posterName: { type: String, required: true },
  actors: [{ type: Schema.Types.ObjectId, ref: "Actor" }],
  producer: { type: Schema.Types.ObjectId, ref: "Producer", required: true },
});

const Movie = mongoose.model("Movie", movieSchema);
```
