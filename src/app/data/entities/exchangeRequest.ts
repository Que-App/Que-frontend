export interface ExchangeRequest {
    id: number,
    fromUserId: number,
    fromLessonId: number,
    fromIndex: string,
    toUserId: number,
    toLessonId: number,
    toIndex: string,
    status: RequestStatus,
    resolvementTime: number,
    fromUsername: string;
    toUsername: string;
    fromDate: string;
    toDate: string;
    fromTime: string;
    toTime: string;
    fromSubjectName: string;
    toSubjectName: string;
}

export enum RequestStatus {
    PENDING = 'PENDING',
    ACCEPTED = 'ACCEPTED',
    DECLINED = 'DECLINED',
    INVALID = 'INVALID'
}
