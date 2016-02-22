export function chance(...args: number[]): number {
    return args.reduce((a, b) => a + b);
}


export function yatzy(...args: number[]): number {
    let commonValue = args[0];
    if (args.every((item) => item===commonValue)) {
        return 50;
    }
    return 0;
}

export function ones(...args: number[]): number {
    return count_value(1, args);
}

export function twos(...args: number[]): number {
    return count_value(2, args);
}

export function pair(...args: number[]): number {
    let stuff = args.sort().reduce((prev, curr) => {
        console.log(prev, curr);
        if (prev===curr) {return prev;}
        return 0;
       }, 0)
    return stuff * 2;
}

function count_value(value: number, dice: number[]): number {
    return dice
    .filter((item) => item === value)
    .reduce((item, result) => item + result);
}