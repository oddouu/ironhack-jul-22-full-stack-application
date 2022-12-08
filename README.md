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

- HomePage => Should display a random quote
- QuoteDisplayAllPage => Should display all quotes
- QuoteDisplaySinglePage => Should display a specific quote
- QuoteCreatePage => Should display a form to create a new quote
- QuoteEditPage => Should display a form to change an existing quote

### Components
- QuoteContent => It's going to be used to render a single quote (whether random or not)
- QuoteList => It's going to be used to render multiple quotes
- QuoteForm => It's going to be used to create or update a quote
- QuoteButton => It's going to be used to delete a quote
- Navbar

### Services
- quoteLoadSingle -> GET /quotes/:id
- quoteLoadAll -> GET /quotes
- quoteLoadRandom -> GET /quotes/random
- quoteAdd -> POST /quotes
- quoteEdit -> PATCH /quotes/:id
- quoteDelete -> DELETE /quotes/:id