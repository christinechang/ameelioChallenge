export interface BookInfoObject {
    id?: string,
    title?: string,
    authors?:[string],
    isbn?:string,
    categories:[string],
    shortDescription?: string,
    longDescription?: string,
    publishedDate?: Date,
    status?: string,
    pageCount?: number,
}