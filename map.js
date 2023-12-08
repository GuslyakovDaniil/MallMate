var oUl = document.getElementById("ul1");
        var aLi = document.getElementsByTagName("li");
        var map = [
                2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
                2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,2,
                2,0,0,0,0,0,2,0,0,0,2,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,2,
                2,0,0,0,0,0,2,0,0,0,2,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,2,
                2,0,0,0,2,2,2,0,0,0,2,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,2,
                2,0,0,0,2,0,0,0,0,0,2,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,2,
                2,0,0,0,2,0,0,0,0,0,2,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,2,
                2,2,0,0,2,2,2,2,2,2,2,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,2,
                0,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,2,
                0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,2,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,2,
                0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,2,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,2,
                0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,2,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,2,
                0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,2,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,2,
                0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,2,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,2,
                0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,2,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,2,
                0,0,0,0,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,2,
                0,0,0,0,0,2,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
                0,0,0,0,0,2,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
                0,0,0,0,0,0,2,2,0,0,2,0,2,2,2,0,2,2,2,2,2,2,0,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0,0,2,
                0,0,0,0,0,0,2,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,
                0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,2,0,2,0,2,0,0,2,
                0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,2,0,2,0,2,0,0,2,
                0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,2,0,2,0,2,0,0,2,
                0,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,2,0,2,0,2,0,0,2,
                0,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,2,0,2,0,2,0,0,2,
                0,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,2,0,2,0,2,0,0,2,
                0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,2,0,2,0,2,0,0,2,
                0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
            ]

            function init() {
            createMap();
            startSearch();
        }
        function createMap() {
    var liSize = 15; //отдаление от экрана
    for (var i = 0; i < map.length; i++) {
        var oLi = document.createElement("li");
        oLi.style.width = liSize + "px";
        oLi.style.height = liSize + "px";
        oUl.appendChild(oLi);
        if (map[i] == 1) {
            oLi.className = "style1";
        } else if (map[i] == 2) {
            oLi.className = "style2";
        } else if (map[i] == 3) {
            oLi.className = "style3";
        }
    }
    oUl.style.width = 40 * (liSize + 1) + 1 + "px";  // надо изменить на 40 чтобы маршрут строился на карте 40 на 40
}


function startSearch() {
    var startNode = findNode(1);
    var endNode = findNode(3);

    var path = findShortestPath(startNode, endNode);
    markPath(path);
}


        function findNode(value) {
            for (var i = 0; i < aLi.length; i++) {
                if (map[i] == value) {
                    return { x: i % 40, y: Math.floor(i / 40) };
                }
            }
            return null;
        }

        function findShortestPath(start, end) {
            var openSet = [start];
            var cameFrom = {};
            var gScore = {};
            var fScore = {};

            for (var i = 0; i < map.length; i++) {
                gScore[i] = Infinity;
                fScore[i] = Infinity;
            }

            gScore[start.y * 40 + start.x] = 0;
            fScore[start.y * 40 + start.x] = heuristic(start, end);

            while (openSet.length > 0) {
                var current = minFScore(openSet, fScore);

                if (current.x === end.x && current.y === end.y) {
                    return reconstructPath(cameFrom, current);
                }

                openSet = openSet.filter(function (el) {
                    return el.x !== current.x || el.y !== current.y;
                });

                var neighbors = getNeighbors(current);

                for (var j = 0; j < neighbors.length; j++) {
                    var neighbor = neighbors[j];
                    var tentativeGScore = gScore[current.y * 40 + current.x] + 1;

                    if (tentativeGScore < gScore[neighbor.y * 40 + neighbor.x]) {
                        cameFrom[neighbor.y * 40 + neighbor.x] = current;
                        gScore[neighbor.y * 40 + neighbor.x] = tentativeGScore;
                        fScore[neighbor.y * 40 + neighbor.x] =
                            gScore[neighbor.y * 40 + neighbor.x] +
                            heuristic(neighbor, end);

                        if (!openSet.some(function (el) {
                            return el.x === neighbor.x && el.y === neighbor.y;
                        })) {
                            openSet.push(neighbor);
                        }
                    }
                }
            }

            return [];
        }

        function heuristic(a, b) {
            return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
        }

        function minFScore(set, fScore) {
            var min = Infinity;
            var minNode = null;

            for (var i = 0; i < set.length; i++) {
                var node = set[i];
                if (fScore[node.y * 40 + node.x] < min) {
                    min = fScore[node.y * 40 + node.x];
                    minNode = node;
                }
            }

            return minNode;
        }

        function getNeighbors(node) {
    var neighbors = [];
    if (node.x > 0 && map[node.y * 40 + node.x - 1] !== 2) {
        neighbors.push({ x: node.x - 1, y: node.y });
    }
    if (node.x < 39 && map[node.y * 40 + node.x + 1] !== 2) {  // надо изменить на 39 чтобы маршрут строился на карте 40 на 40
        neighbors.push({ x: node.x + 1, y: node.y });
    }
    if (node.y > 0 && map[(node.y - 1) * 40 + node.x] !== 2) {
        neighbors.push({ x: node.x, y: node.y - 1 });
    }
    if (node.y < 39 && map[(node.y + 1) * 40 + node.x] !== 2) {  // надо изменить на 39 чтобы маршрут строился на карте 40 на 40
        neighbors.push({ x: node.x, y: node.y + 1 });
    }
    return neighbors;
}


        function reconstructPath(cameFrom, current) {
            var path = [current];
            while (cameFrom[current.y * 40 + current.x]) {
                current = cameFrom[current.y * 40 + current.x];
                path.unshift(current);
            }
            return path;
        }

        function markPath(path) {
            for (var i = 0; i < path.length; i++) {
                var index = path[i].y * 40 + path[i].x;
                aLi[index].classList.add("path");
            }
        }

        init();