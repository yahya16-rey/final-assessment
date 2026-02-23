// index.test.js
import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

// ✅ Test 1: Menjumlahkan dua bilangan positif
test("Menjumlahkan dua bilangan positif", () => {
    assert.strictEqual(sum(3, 5), 8);
});

// ✅ Test 2: Menjumlahkan bilangan negatif
test("Menjumlahkan dua bilangan negatif", () => {
    assert.strictEqual(sum(-3, -5), -8);
});

// ✅ Test 3: Menjumlahkan bilangan positif dan negatif
test("Menjumlahkan bilangan positif dan negatif", () => {
    assert.strictEqual(sum(10, -7), 3);
});

// ✅ Test 4: Menjumlahkan nol dengan bilangan lain
test("Menjumlahkan nol dengan bilangan lain", () => {
    assert.strictEqual(sum(0, 10), 10);
    assert.strictEqual(sum(0, -10), -10);
});

// ✅ Test 5: Menjumlahkan bilangan desimal
test("Menjumlahkan bilangan desimal", () => {
    assert.strictEqual(sum(2.5, 2.5), 5);
});

// ✅ Test 6: Menjumlahkan bilangan besar
test("Menjumlahkan bilangan besar", () => {
    assert.strictEqual(sum(1000000, 1000000), 2000000);
});
