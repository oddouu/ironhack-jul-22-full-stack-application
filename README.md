# Full Stack Application

## Server

### Models
- Quote
    - message: String, required
    - author: String, required

- Like
    - quote: ObjectId, ref: Quote, required

- Dislike
    - quote: ObjectId, ref: Quote, required

### Endpoints

- GET /quotes - Fetch all quotes
- GET /quotes/:id - Fetch a single quote
- POST /quotes - Post a new quote
- PATCH /quotes/:id - Update a single quote
- DELETE /quotes/:id - Deletes a single quote

## Client

### Pages

### Components

### Services