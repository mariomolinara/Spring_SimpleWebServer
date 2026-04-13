# WebServer Spring Boot - Guida completa

Questo progetto ha un obiettivo semplice: usare Spring Boot come web server per servire file statici HTML/CSS/JavaScript.

La guida qui sotto spiega passo passo come e fatto il progetto e come funzionano le varie sezioni.

## 1) Obiettivo del progetto

- Avviare un server HTTP con Spring Boot.
- Servire pagine statiche dalla cartella `src/main/resources/static`.
- Mostrare esempi pratici di interazione client-side:
  - pagina Home con JavaScript vanilla
  - pagina React con input obbligatorio
  - pagina Snake Game con tastiera

## 2) Stack e prerequisiti

- Java 21
- Maven Wrapper (`mvnw.cmd`)
- Spring Boot (dipendenza chiave: `spring-boot-starter-web`)
- Browser moderno

## 3) Struttura del progetto (panoramica)

```text
src/main/resources/
|-- application.properties
`-- static/
    |-- index.html
    |-- react.html
    |-- game.html
    |-- css/
    |   |-- style.css
    |   |-- react.css
    |   `-- game.css
    |-- js/
    |   |-- script.js
    |   |-- react.js
    |   `-- game.js
    `-- humain/
        |-- index.html
        `-- images/
```

### Cosa significa questa struttura

- `static/`: tutto quello che metti qui viene servito automaticamente da Spring Boot.
- `css/`: contiene tutti i fogli di stile.
- `js/`: contiene tutta la logica JavaScript separata dalle pagine HTML.
- `humain/`: sotto-sezione statica indipendente con la sua pagina dedicata.

## 4) Configurazione server

File: `src/main/resources/application.properties`

```properties
spring.application.name=WebServer
server.port=8080
```

- `spring.application.name`: nome applicazione nei log.
- `server.port`: porta su cui il server ascolta.

Per cambiare porta, modifica `server.port` (esempio: `8081`).

## 5) Spiegazione delle pagine, passo passo

### 5.1 Home page - `index.html`

URL: `http://localhost:8080/`

Contiene:
- titolo e testo introduttivo
- link verso `react.html` e `game.html`
- un campo input (`#inputText`)
- un bottone (`#showTextButton`)
- un output centrale in `<h1>` (`#outputText`)

Stile: `css/style.css`  
Logica: `js/script.js`

Flusso funzionale:
1. L'utente scrive un testo.
2. Clicca su "Mostra testo".
3. Lo script legge il valore, lo pulisce (`trim`).
4. Se valido, lo mostra in `#outputText`, altrimenti mostra un messaggio di fallback.

### 5.2 Pagina React - `react.html`

URL: `http://localhost:8080/react.html`

Contiene:
- bottone "Torna alla Home"
- area root React (`#react-root`)
- inclusione React/ReactDOM via CDN

Stile: `css/react.css`  
Logica: `js/react.js`

Comportamento richiesto implementato:
1. Campo di testo obbligatorio (`required`).
2. Click sul bottone di submit.
3. Se il testo e vuoto, mostra errore.
4. Se valido, aggiorna la parte dinamica del bottone (`Mostra: <testo>`).

Nota tecnica:
- la pagina usa React senza build tool (nessun npm), quindi e totalmente statica e semplice da servire.

### 5.3 Pagina gioco - `game.html`

URL: `http://localhost:8080/game.html`

Contiene:
- bottone "Torna alla Home"
- titolo e istruzioni brevi
- bottone `Play`
- area stato (`#status`)
- `canvas` (`#gameCanvas`) per rendering Snake

Stile: `css/game.css`  
Logica: `js/game.js`

Flusso funzionale:
1. Premi `Play` per iniziare.
2. Controlla il serpente con frecce tastiera.
3. Se mangia il cibo, aumenta punteggio e cresce.
4. Se collide con muro o corpo, partita finita.
5. Premi di nuovo `Play` per ricominciare.

Dettagli implementativi in `game.js`:
- `resetGame()`: inizializza stato gioco.
- `setDirectionFromKey()`: aggiorna direzione da tastiera.
- `gameStep()`: tick principale (movimento/collisioni/punteggio).
- `draw()`: disegna cibo e serpente sul canvas.

### 5.4 Pagina HUMAIN - `humain/index.html`

URL: `http://localhost:8080/humain/`

- E una pagina statica separata, con contenuti istituzionali e immagini locali in `humain/images/`.
- Non dipende dalle pagine demo Home/React/Game.

## 6) Spiegazione dei file JavaScript

### 6.1 `js/script.js`

- Registra listener al caricamento DOM.
- Gestisce click su `#showTextButton`.
- Legge input, valida e aggiorna `#outputText`.

### 6.2 `js/react.js`

- Definisce componente React principale (`ReactButtonPage`).
- Gestisce stato input, testo bottone e messaggio errore.
- In `onSubmit` valida il testo e aggiorna la label dinamica del bottone.

### 6.3 `js/game.js`

- Gestisce stato Snake (posizione, direzione, cibo, punteggio).
- Esegue il loop con `setInterval` dopo click su `Play`.
- Intercetta frecce tastiera e blocca scroll pagina durante il gioco.
- Aggiorna il canvas ad ogni tick.

## 7) Avvio applicazione

### 7.1 Avvio da terminale (Windows PowerShell)

```powershell
.\mvnw.cmd spring-boot:run
```

Poi apri:
- `http://localhost:8080/`
- `http://localhost:8080/react.html`
- `http://localhost:8080/game.html`
- `http://localhost:8080/humain/`

### 7.2 Avvio da IntelliJ

1. Apri il progetto.
2. Verifica JDK 21 nella Run Configuration.
3. Avvia `WebServerApplication`.
4. Controlla i log e poi apri le URL sopra.

## 8) Troubleshooting rapido

### 8.1 L'app si chiude subito (exit code 0)

Controlli da fare:
- verifica in `pom.xml` la presenza di `spring-boot-starter-web`
- verifica che stai avviando `WebServerApplication`
- verifica che la porta non sia occupata

### 8.2 Le pagine non caricano CSS o JS

Controlla i percorsi:
- CSS da `/css/...`
- JS da `/js/...`

Esempio corretto in HTML:
- `<link rel="stylesheet" href="/css/style.css">`
- `<script src="/js/script.js"></script>`

## 9) Estensioni possibili

- aggiungere nuove pagine statiche e linkarle dalla Home
- inserire nuove logiche JS nella cartella `js/`
- separare componenti React in file multipli (sempre in modalita CDN)
- aggiungere test end-to-end per verificare le pagine statiche

---

Progetto didattico per servire contenuti statici con Spring Boot, con esempi pratici vanilla JS, React e Canvas game.
