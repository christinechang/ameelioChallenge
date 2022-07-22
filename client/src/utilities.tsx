export const createId = (isbn?: string, title?: string) => (
    `${isbn || 'x'}-${title && title.substring(0, 9)}`
);

export const array2String = (testInput: string[] | string | number | object | undefined) => (
    // create string joining all elements of array
    // check if is array and if all elements are not empty or all blank
    Array.isArray(testInput)
        ? testInput.filter((item) => item.trim().length > 0).join(', ')
        : ''
);
export const convert2String = (input: number | string | object | null | undefined) => {
    if (typeof input === 'string' || typeof input === 'number') return(input.toString());
    // check if is array and if all elements are not empty or all blank
    if (Array.isArray(input)) return (input.filter((item) => item.trim().length > 0).join(', '));
    return ('');
}