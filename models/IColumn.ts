import type { IComment } from "./IComment";

export interface IColumn {
    image: string,
    title: string,
    date: string,
    comments: IComment[]
}