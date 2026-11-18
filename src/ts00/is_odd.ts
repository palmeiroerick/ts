import type { Result } from "../../lib/result.ts";
import { err, ok } from "../../lib/result.ts";

type IsOddError =
    | { type: "not_integer"; input: number }
    | { type: "unsafe_integer"; input: number };

function is_odd(x: number | bigint): Result<boolean, IsOddError> {
    if (typeof x === "bigint") {
        return ok(x % 2n !== 0n);
    }

    if (!Number.isInteger(x)) {
        return err({ type: "not_integer", input: x });
    }

    if (!Number.isSafeInteger(x)) {
        return err({ type: "unsafe_integer", input: x });
    }

    return ok(x % 2 !== 0);
}

function main(): void {
    console.log(is_odd(1));
    console.log(is_odd(2));

    console.log(is_odd(-3));
    console.log(is_odd(NaN));
    console.log(is_odd(Infinity));
    console.log(is_odd(1.1));

    console.log(is_odd(2 ** 64));
    console.log(is_odd(2 ** 64 - 1));

    console.log(is_odd(2n ** 64n));
    console.log(is_odd(2n ** 64n - 1n));
}

main();