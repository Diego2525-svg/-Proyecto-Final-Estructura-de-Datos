class NodeGraph {
    constructor(value) {
        this.value = value;
        this.neighbors = [];
        this.transitable = true;
        this.element = null;
    }

    addNeighbor(neighbor) {
        this.neighbors.push(neighbor);
    }

    getNeighbors() {
        return this.neighbors;
    }

    getValue() {
        return this.value;
    }
}

class Graph {
    constructor() {
        this.nodes = [];
    }

    addNode(value) {
        const newNode = new NodeGraph(value);
        this.nodes.push(newNode);
        return newNode;
    }

    addEdge(src, dest) {
        src.addNeighbor(dest);
        dest.addNeighbor(src);
    }

    printGraph() {
        this.nodes.forEach(node => {
            console.log(`Vertice ${node.getValue()}:`);
            node.getNeighbors().forEach(neighbor => {
                console.log(` -> ${neighbor.getValue()}`);
            });
        });
    }

    getDFS(startNode) {
        const visited = new Array(this.nodes.length).fill(false);
        this.getDFSUtil(startNode, visited);
    }

    getDFSUtil(node, visited) {
        const index = this.nodes.indexOf(node);
        visited[index] = true;
    }
}

export { Graph, NodeGraph };
