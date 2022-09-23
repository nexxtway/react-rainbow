declare function decomposeColor(
    color: string | { type: string; values: number[] },
): { type: string; values: number[] };
export default decomposeColor;
