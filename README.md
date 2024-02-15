# QR Code Generator

This is a simple web application that generates QR codes based on user input. Users can input a domain name, and the application will generate a QR code containing that domain name.

## Features

- Input a domain name.
- Generate a QR code containing the input domain name.

## Technologies Used

- **Node.js**: The backend server is built with Node.js using the Express.js framework.
- **QR Code Generation**: QR codes are generated using the `qr-image` npm package.
- **HTML/CSS**: The frontend user interface is created using HTML and CSS.

## How to Use

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the server using `npm start`.
5. Open your web browser and go to `http://localhost:3000`.
6. Enter a domain name in the input field and click the "Generate QR Code" button.
7. The generated QR code will be displayed on the screen.

## Project Structure

- `server.js`: The main server file containing the Express.js server setup.
- `public/`: Directory containing static files, including the HTML file for the frontend.
- `output.png`: Generated QR code image is saved in this file.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

