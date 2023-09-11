function generateParenthesis(n: number): string[] {
    const result: string[] = [];
    generate('', n, 0, 0, result);
    return result;
}

function generate(
    str: string,
    max: number,
    open: number,
    close: number,
    result: string[]
) {
    if (open === max && close === max) {
        result.push(str);
        return;
    }

    if (open < max) {
        generate(str + '(', max, open + 1, close, result);
    }
    
    if (close < open) {
        generate(str + ')', max, open, close + 1, result);
    }
}