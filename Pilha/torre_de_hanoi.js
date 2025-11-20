class Stack {
    constructor() {
        this.stack = []
    }

    push(value) {
        this.stack.push(value)
    }
    pop() {
        return this.stack.pop()
    }
    peek() {
        return this.stack[this.size() - 1]
    }
    isEmpty() {
        return this.size() === 0
    }
    size() {
        return this.stack.length
    }
}

// 2. Função da Torre de Hanói
function torreDeHanoi(n, origem, destino, auxiliar) {
    if (n > 0) {
        torreDeHanoi(n - 1, origem, auxiliar, destino);
        let disco = origem.pop();
        destino.push(disco);
    