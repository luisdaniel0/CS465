
## Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Express HTML is simple and straightforward, quick to set up for small projects, and no build process required. The cons of using express HTML is limited interactivity, and poor scalability for complex apps. JavaScript adds interactivity to web pages using client-side scripting, enhances user experience with dynamic content, it is widely supported across browsers and can manipulate the DOM in real-time. Javascript can become difficult to manage as application complexity grows. It also has performance issues with heavy DOM manipulation.
Single-Page Applications uses frameworks like Angular to create a seamless user experience.
Some pros would be: faster navigation as only part of the page updates, interactive user experience, better performance with client-side routing.
A negative aspect to SPAs would be: complex to set up and maintain, requires a build process and tooling, initial load time might be higher.
## Why did the backend use a NoSQL MongoDB database?
The backend uses a NOSQL MongoDB database because of its scalability, flexibility, and performance. MongoDB is designed to handle large volumes of unstructured data, making it easier to scale horizontally by adding more servers. It stores data in JSON-like documents, allowing for varied data structures and easier data integration. Efficiently handles large amounts of read and write operations due to its document-oriented storage.

## How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
The purpose of JSON (JavaScript Object Notation) is its Data interchange format.
It's Text-based format is easy for machines to parse and generate.
The syntax is also different from Javascript. It is a subset of JavaScript syntax but strictly formatted (e.g., keys must be strings enclosed in double quotes).
JavaScript is a programming language for web development.It's functionalities include performing operations, manipulate DOM, create functions, and more.

JSON acts as a medium for data exchange between the frontend and backend. For instance, the backend can send a JSON response to the frontend, which can then parse and display the data dynamically.


## Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
Methods:

Unit Testing: Testing individual units/components of the API.
Integration Testing: Ensuring that different modules/components work together.
End-to-End Testing: Simulating real user scenarios to test the entire application flow.
Endpoints:

Specific URLs that the frontend can use to interact with the backend services. Each endpoint represents a specific functionality, such as fetching user data or submitting a form.
Security:

Challenges: Testing becomes more complex with authentication, authorization, and secure data transmission layers.
Solutions: Use of tokens (e.g., JWT), SSL/TLS for encryption, and secure coding practices.

## How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
This course has provided practical experience in building and deploying full stack applications, making me a more competitive candidate for development roles.

Skills that I learned: 
Mastery in using front-end frameworks (e.g., React), backend technologies (e.g., Express, MongoDB), and tools for testing and deployment.
Improved ability to troubleshoot, debug, and optimize code.
Enhanced skills in working with version control (e.g., Git).