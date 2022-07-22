export interface IBook {
    id?: string;
    title?: string;
    authors?: string[];
    isbn?: string;
    categories: string[];
    shortDescription?: string;
    longDescription?: string;
    thumbnailUrl?: string;
    publishedDate?: {
        $date: Date;
    };
    status?: string;
    pageCount?: number;
}

export type IBookKey = keyof IBook;

export interface IBookLineProps {
    book: IBook;
}

export interface IBookListProps {
    books: IBook[];
}

export interface IBookInfoProps {
    books: IBook[];
    pageTitle?: string;
}

export interface IBookInfoItemProps {
    label: string;
    value: string;
    className?: string;
}