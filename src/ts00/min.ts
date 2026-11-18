function min(
    ...nums:
        | [number, ...number[]] 
        | [bigint, ...bigint[]]
): number | bigint {
    // let min: number | bigint = nums[0];
    // for (const num of nums) if (num < min) min = num;
    // return min;
    return nums.reduce((min, num) => (num < min) ? num : min)
}

function main(): void {
    console.log(min(0, -Infinity));
    console.log(min(0, 3, -5, 4, 5, -6, 6, 3));
    console.log(min(0n, 3n, -5n, 4n, 5n, -6n));
    // let nums: [number, ...number[]] = [1, 2, 3];
    // console.log(min(...nums));
}

main();