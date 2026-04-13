(function () {
    var canvas = document.getElementById('gameCanvas');
    var ctx = canvas.getContext('2d');
    var playButton = document.getElementById('playButton');
    var statusLabel = document.getElementById('status');

    var tileSize = 20;
    var gridSize = canvas.width / tileSize;
    var loopId = null;

    var snake;
    var direction;
    var nextDirection;
    var food;
    var score;

    function resetGame() {
        snake = [{ x: 8, y: 10 }, { x: 7, y: 10 }, { x: 6, y: 10 }];
        direction = { x: 1, y: 0 };
        nextDirection = { x: 1, y: 0 };
        food = randomFoodPosition();
        score = 0;
        statusLabel.textContent = 'Gioco in corso. Punteggio: 0';
        draw();
    }

    function randomFoodPosition() {
        var pos;
        do {
            pos = {
                x: Math.floor(Math.random() * gridSize),
                y: Math.floor(Math.random() * gridSize)
            };
        } while (snake && snake.some(function (segment) { return segment.x === pos.x && segment.y === pos.y; }));
        return pos;
    }

    function setDirectionFromKey(key) {
        if (key === 'ArrowUp' && direction.y !== 1) {
            nextDirection = { x: 0, y: -1 };
        } else if (key === 'ArrowDown' && direction.y !== -1) {
            nextDirection = { x: 0, y: 1 };
        } else if (key === 'ArrowLeft' && direction.x !== 1) {
            nextDirection = { x: -1, y: 0 };
        } else if (key === 'ArrowRight' && direction.x !== -1) {
            nextDirection = { x: 1, y: 0 };
        }
    }

    function gameStep() {
        direction = nextDirection;

        var head = {
            x: snake[0].x + direction.x,
            y: snake[0].y + direction.y
        };

        var hitWall = head.x < 0 || head.y < 0 || head.x >= gridSize || head.y >= gridSize;
        var hitSelf = snake.some(function (segment) { return segment.x === head.x && segment.y === head.y; });

        if (hitWall || hitSelf) {
            clearInterval(loopId);
            loopId = null;
            statusLabel.textContent = 'Game over. Punteggio finale: ' + score + '. Premi Play per ricominciare.';
            return;
        }

        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            score += 1;
            food = randomFoodPosition();
            statusLabel.textContent = 'Gioco in corso. Punteggio: ' + score;
        } else {
            snake.pop();
        }

        draw();
    }

    function drawCell(x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x * tileSize, y * tileSize, tileSize - 1, tileSize - 1);
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawCell(food.x, food.y, '#ef4444');

        snake.forEach(function (segment, index) {
            drawCell(segment.x, segment.y, index === 0 ? '#0f766e' : '#14b8a6');
        });
    }

    playButton.addEventListener('click', function () {
        if (loopId !== null) {
            return;
        }
        resetGame();
        loopId = setInterval(gameStep, 120);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key.indexOf('Arrow') === 0) {
            event.preventDefault();
        }
        setDirectionFromKey(event.key);
    });

    resetGame();
})();

