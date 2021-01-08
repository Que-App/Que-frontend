export interface ExchangeRequest {
    id: number,
    fromUserId: number,
    fromLessonId: number,
    fromDate: string,
    toUserId: number,
    toLessonId: number,
    toDate: string,
    status: RequestStatus,
    resolvmentDate: string
}

export enum RequestStatus {
    ALL = 'All',
    PENDING = 'Pending',
    ACCEPTED = 'Accepted',
    DECLINED = 'Declined',
    INVALID = 'Invalid'
}
