import { Component, Input, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { ExchangeApiService } from 'src/app/data/api/exchange-api.service';
import { LessonApiService } from 'src/app/data/api/lesson-api.service';
import { SubjectApiService } from 'src/app/data/api/subject-api.service';
import { UserApiService } from 'src/app/data/api/user-api.service';
import { ExchangeRequest, RequestStatus } from 'src/app/data/entities/exchangeRequest';
import { Lesson } from 'src/app/data/entities/lesson';
import { Subject } from 'src/app/data/entities/subject';
import { User } from 'src/app/data/entities/user';
import { HourPrinterPipe } from 'src/app/shared/pipes/hour-printer.pipe'

@Component({
  selector: 'app-request-tail',
  templateUrl: './request-tail.component.html',
  styleUrls: ['./request-tail.component.scss']
})
export class RequestTailComponent implements OnInit {
  @Input('request') request: ExchangeRequest;
  @Input('requestType') requestType: string;
  person: string;
  position: TooltipPosition = 'right';

  sender: User = {id: 0, username: ""};
  receiver: User = {id: 0, username: ""};
  fromLesson: Lesson;
  fromSubject: Subject;
  toLesson: Lesson;
  toSubject: Subject;


  constructor(
    private userApi: UserApiService,
    private lessonApi: LessonApiService,
    private subjectApi: SubjectApiService,
    private exchangeApi: ExchangeApiService
  ) { }

  ngOnInit(): void {
    this.person = this.requestType === 'incoming' ? 'Sender' : 'Receiver';
    this.fetchData();
  }

  fetchData() {
    this.userApi.getUsername(this.request.fromUserId).subscribe(user => this.sender = user);

    this.userApi.getUsername(this.request.toUserId).subscribe(user => this.receiver = user);

    this.lessonApi.getLesson(this.request.fromLessonId.toString()).subscribe(lesson => {
      this.fromLesson = lesson;
      this.subjectApi.getSubject(lesson.subjectId).subscribe(subject => this.fromSubject = subject);
    });
 
    this.lessonApi.getLesson(this.request.toLessonId.toString()).subscribe(lesson => {
      this.toLesson = lesson;
      this.subjectApi.getSubject(lesson.subjectId).subscribe(subject => this.toSubject = subject);
    });
  }

  acceptRequest(requestId: number) {
    this.exchangeApi.acceptRequest(requestId).subscribe(() => window.location.reload());
  }

  declineRequest(requestId: number) {
    this.exchangeApi.declineRequest(requestId).subscribe(() => window.location.reload());
  }

  getStatusColor(status: string) {
    switch(status) {
      case RequestStatus.ACCEPTED: return 'darkgreen'; 
      case RequestStatus.DECLINED: return '#C13745'; 
      case RequestStatus.PENDING: return 'grey'; 
      case RequestStatus.INVALID: return 'orange'; 
    }
  }
}
