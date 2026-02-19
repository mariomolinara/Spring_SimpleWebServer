# WebServer Spring Boot

Questo progetto è un semplice web server realizzato con Spring Boot, il cui unico scopo è servire file statici (HTML, CSS, JavaScript).

## Come funziona
- Tutti i file statici devono essere inseriti nella cartella `src/main/resources/static`.
- Spring Boot serve automaticamente questi file all'indirizzo `http://localhost:8080/`.

## Avvio del server

### Da terminale
1. Assicurati di avere un JDK installato (consigliato Java 17 o superiore).
2. Esegui:
   ```sh
   ./mvnw spring-boot:run
   ```
3. Apri il browser su [http://localhost:8080/](http://localhost:8080/)

### Da IntelliJ IDEA
1. Apri il progetto in IntelliJ.
2. Vai al file `WebServerApplication.java`.
3. Clicca su "Run" accanto al metodo `main`.
4. Apri il browser su [http://localhost:8080/](http://localhost:8080/)

## Personalizzazione
- Puoi aggiungere altri file statici (es. immagini, CSS, JS) nella cartella `static`.
- Per cambiare la porta, modifica il file `src/main/resources/application.properties` aggiungendo:
  ```properties
  server.port=8081
  ```

## Dipendenze principali
- spring-boot-starter-web

---

Progetto di esempio per servire file statici con Spring Boot.

