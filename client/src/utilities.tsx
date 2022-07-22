export const createId = (isbn?:string, title?:string) => (
    `${isbn || 'x'}-${title && title.substring(0,9)}`
);