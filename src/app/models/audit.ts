export interface Audit{
    id: number;
    previousValue: string;
    newValue: string;
    changedColumn: string;
    timestamp: Date;
    bookId: number;
}