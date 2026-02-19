# WebServer Spring Boot

This project is a simple web server built with Spring Boot, whose only purpose is to serve static files (HTML, CSS, JavaScript).

## How it works
- All static files must be placed in the `src/main/resources/static` folder.
- Spring Boot automatically serves these files at `http://localhost:8080/`.

## Starting the server

### From terminal
1. Make sure you have a JDK installed (Java 17 or higher recommended).
2. Run:
   ```sh
   ./mvnw spring-boot:run
   ```
3. Open your browser at [http://localhost:8080/](http://localhost:8080/)

### From IntelliJ IDEA
1. Open the project in IntelliJ.
2. Go to the `WebServerApplication.java` file.
3. Click on "Run" next to the `main` method.
4. Open your browser at [http://localhost:8080/](http://localhost:8080/)

## Customization
- You can add other static files (e.g. images, CSS, JS) in the `static` folder.
- To change the port, edit the `src/main/resources/application.properties` file by adding:
  ```properties
  server.port=8081
  ```

## Main dependencies
- spring-boot-starter-web

---

Sample project to serve static files with Spring Boot.
