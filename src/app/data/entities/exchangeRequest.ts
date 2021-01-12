export interface ExchangeRequest {
    id: number,
    fromUserId: number,
    fromLessonId: number,
    fromDate: string,
    toUserId: number,
    toLessonId: number,
    toDate: string,
    status: RequestStatus,
    resolvementDate: string
}

export enum RequestStatus {
    PENDING = 'PENDING',
    ACCEPTED = 'ACCEPTED',
    DECLINED = 'DECLINED',
    INVALID = 'INVALID'
}
