# Restaurant Data Display for JustEatTakeaway
This is a Next.js application deployed on Vercel at the following link:
[https://jet-test-five.vercel.app](https://jet-test-five.vercel.app)

## Running the Application
The application can also be run locally with the following steps:

1. Ensure that you have Node.js and git installed.
2. Clone the repository locally: ```git clone https://github.com/MichaelShingo/jet-test.git```
3. In the command line, navigate to the folder containing the repository.
3. Install dependencies by running: 
```npm install```
4. Run the local development server: 
```npm run dev```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Assumptions and Unclear Points
- On testing the endpoint with ```fetch()```, my application returned a CORS error and was not able to fetch any data. I used a CORS proxy service to prepended the url, circumventing this issue. I was not sure if it was intended for the server to reject cross-origin requests, or if there might be a better solution.
- The API returns the restaurants in a different order each time, so the first ten restaurants displayed may vary. Perhaps there is a way to sort the returned list if consistency is necessary.

## Improvements
- I added an extra feature that links the user to a Google Maps page for each restaurant address. Although this directs to the correct building, it would be nice to have it link directly to the restaurant's business entry on Google Maps.
- On rare occasions, the first line of the address is unusually long (i.e. Unit 1 & 2 Riverside House, 2A Southwark Bridge Rd). Handling the resulting line break in the first line to make it more visually intuitive to the user would be ideal.