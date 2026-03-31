# WebServer Spring Boot

This project is a simple web server built with Spring Boot, whose only purpose is to serve static files (HTML, CSS, JavaScript).

## Features
- Serves static files (HTML, CSS, JavaScript) from `src/main/resources/static`.
- Interactive UI: a text field and a button let the user type a message that is displayed as a centered `<h1>` on the page (no page reload required).
- Clean, responsive layout styled with CSS.
- Custom server port configurable via `application.properties`.

## Project structure
```
src/main/resources/static/
├── index.html      ← main page with input field and button
├── style.css       ← page styles
├── script.js       ← client-side interaction logic
└── humain/
    └── index.html  ← secondary static page
```

## How it works
- All static files must be placed in the `src/main/resources/static` folder.
- Spring Boot automatically serves these files at `http://localhost:8080/`.
- The interactive text display is handled entirely client-side: `script.js` listens for the button click, reads the value from the input field and writes it into the `#outputText` element.

## Starting the server

### From terminal
1. Make sure you have a JDK installed (Java 21 or higher recommended).
2. Run:
   ```sh
   ./mvnw spring-boot:run
   ```
3. Open your browser at [http://localhost:8080/](http://localhost:8080/)

### From IntelliJ IDEA
1. Open the project in IntelliJ.
2. Make sure **spring-boot-starter-web** is present in `pom.xml` (it provides the embedded Tomcat server that keeps the process alive).
3. Go to the `WebServerApplication.java` file.
4. Click on "Run" next to the `main` method.
5. Open your browser at [http://localhost:8080/](http://localhost:8080/)

> **Note:** if the application starts and exits immediately (exit code 0) it means the web dependency is missing. Verify that `spring-boot-starter-web` is in `pom.xml`.

## Customization
- You can add other static files (e.g. images, CSS, JS) in the `static` folder.
- To change the port, edit the `src/main/resources/application.properties` file:
  ```properties
  server.port=8081
  ```

## Main dependencies
- `spring-boot-starter-web` – provides the embedded Tomcat server and static-file serving.

---

Sample project to serve static files with Spring Boot.
