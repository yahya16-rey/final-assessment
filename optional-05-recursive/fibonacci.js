// fibonacci.js

function fibonacci(n) {
    if (typeof n !== "number" || !Number.isInteger(n)) {
        throw new Error("Input harus berupa bilangan bulat.");
    }

    if (n < 0) {
        throw new Error("Indeks Fibonacci tidak boleh negatif.");
    }

    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

export default fibonacci;
