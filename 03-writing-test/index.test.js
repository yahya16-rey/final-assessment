import test from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("Menjumlahkan dua angka dengan benar", () => {
    assert.strictEqual(sum(2, 3), 5);
    assert.strictEqual(sum(-1, 1), 0);
    assert.strictEqual(sum(0, 0), 0);
    assert.strictEqual(sum(10, 20), 30);
});

test("Pastikan hasil sum adalah number", () => {
    assert.strictEqual(typeof sum(1, 2), "number");
});
