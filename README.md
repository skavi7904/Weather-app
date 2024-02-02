# Weather App

This is a simple weather app built with React.js, JavaScript, Tailwind CSS, and the OpenWeatherMap API. It allows users to check the current weather conditions for a specific city.

## Live Demo

Check out the live demo [here](https://weather-app-ten-mauve-38.vercel.app/).

## Features

- **User-Friendly Interface**: Clean and responsive design for a seamless user experience.
- **Real-Time Weather Data**: Fetches real-time weather data using the OpenWeatherMap API.
- **Search Functionality**: Users can input a city name to get the weather report.

## How to Use

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/weather-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd weather-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

    This will open the app in your default web browser.

## Configuration

- The Tailwind CSS configuration can be found in `tailwind.config.js`.
- The main application code is in `src/App.js`.
- Styling is done using Tailwind CSS and can be customized in the `index.css` file.

## API Key

The app uses the OpenWeatherMap API to fetch weather data. Make sure to replace the API key in the `getData` function in `src/App.js` with your own API key. You can obtain a free API key by signing up on the [OpenWeatherMap website](https://openweathermap.org/).

```javascript
// Replace 'YOUR_API_KEY' with your actual API key
const weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=YOUR_API_KEY`);
```

## Deployment

This app is deployed using Vercel. You can deploy your own instance by following the deployment instructions provided by Vercel or any other hosting service of your choice.

## Credits

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenWeatherMap API](https://openweathermap.org/)
- [Vercel](https://vercel.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
