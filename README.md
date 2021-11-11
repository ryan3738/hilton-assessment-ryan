## Hilton Dev Assessment

For this code assessment, we expect you to make the changes listed in the `Deliverables` sections and then email us the link to your codesandbox instance that has your changes. (As soon as you make a change and save it, it will fork this project and create a unique url for you).

## Setup

You need to sign up for an OpenWeather API key. Instructions are here: https://openweathermap.org/appid

After you get your API, add that as API_KEY in city-weather.tsx

## Mock bug report

Steps to reproduce:

1. Type a valid US city in the "Weather Search" box
1. Press {enter}

Expected results
User should see the current weather results for that city

Actual Results:
App crashes

## Deliverable 1:

1. Fix the bug
   - Treating this like a bug ticket, identify the bug in the application and provide a fix.
2. Talk about your changes
   - Write a short description about what was the underlying cause of the bug and how you fixed it

   The following error message was received when putting in a valid city. Uncaught TypeError: can't access property "main", weatherResult is null. The above error occurred in the          `<CityWeather>` component.
   
   The fix was to add an if statement to check if weather data is null

      `if (!weatherResult) return <div>Loading...</div>`
   
   This was done to keep the app from sending weatherData that is null to the CityWeather component and crashing the app.

   I like this solution because it provides the user with feedback that the app is working and prevents the crash. I would also implement error handling to the API call to make sure that the app doesn't crash when the user enters an invalid city.
## Deliverable 2:

1. Create a city-weather-refactor.tsx file, in which you refactor the city-weather component to use react hooks rather than React.Component. Incorporate the following:

   1. Match the design
      - A designer has provided a comp on how this app should look (see design.png)
        - To match the design you may need to use different fields that are returned from the openweathermap API. For example, the weather condition three digit code can be [mapped to the icons here](https://openweathermap.org/weather-conditions)
      - Tailwindcss is installed and configured for you
   2. Improve web accessibility
      - Ensure that clicking on the label "Weather Search" puts focus into the text-input.
      - Make sure any loading states are correctly announced to a screen reader
   3. Make the tests better
      - There was a test written for this feature but it clearly didn't catch the bug, make the test better (you can open a new terminal in the bottom right of code sandbox and `yarn test`)

2. Talk about your changes
   - For the refactor and other accompanying tasks, include any other thoughts, assumptions, or known compromises in how you approached the work.

I refactored the component to use react hooks. I used async and await instead of fetch(). I believe it is easier to read and understand. The useState hook is used to keep track of the weather data. The useEffect hook makes sure that the component is only rendered when the city prop changes. 
