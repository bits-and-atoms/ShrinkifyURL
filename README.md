# ShrinkifyURL

ShrinkifyURL is a simple and efficient URL shortener web application. It allows users to shorten long URLs into more manageable and shareable links. The application is built using Express.js, Node.js, EJS, and MongoDB.

## Features

- Shorten long URLs quickly and easily
- View the original and shortened URLs
- View the number of clicks for each links
- Simple and clean user interface
- Persistent storage using MongoDB

## Technologies Used

- **Node.js**: JavaScript runtime for server-side programming
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js
- **EJS**: Embedded JavaScript templating
- **MongoDB**: NoSQL database for storing URLs

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/bits-and-atoms/ShrinkifyURL.git
    cd ShrinkifyURL
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up your MongoDB connection:

    Create a `.env` file in the root of the project and add your MongoDB connection string:

    ```
    MONGODB_URI=your_mongodb_connection_string
    ```

4. Start the application:

    ```bash
    npm start
    ```

    The application will be running on `http://localhost:10000`.

## Usage

1. **Home Page**: The landing page where you can see the input field to enter the URL.

    ![Home Page](https://github.com/bits-and-atoms/ShrinkifyURL/assets/113923608/459769ad-2ced-4cef-9a63-e66d95ab22bf)


2. **Enter URL**: Enter the URL you want to shorten and click the "Shrink" button.

    ![Entering](https://github.com/bits-and-atoms/ShrinkifyURL/assets/113923608/aa403ec9-b33c-4731-8014-7114fd2659ec)


3. **Shortened URL**: The shortened URL will be displayed, and you can copy it for sharing.

    ![Shortened URL](https://github.com/bits-and-atoms/ShrinkifyURL/assets/113923608/880c0051-79f3-47a0-87a7-4a0bd4bbbeca)


## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any features, bug fixes, or enhancements.

---

Feel free to reach out if you have any questions or feedback!

---

