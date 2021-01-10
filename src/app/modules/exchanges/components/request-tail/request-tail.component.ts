import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LessonApiService } from 'src/app/data/api/lesson-api.service';
import { UserApiService } from 'src/app/data/api/user-api.service';
import { ExchangeRequest } from 'src/app/data/entities/exchangeRequest';
import { Lesson } from 'src/app/data/entities/lesson';
import { User } from 'src/app/data/entities/user';

@Component({
  selector: 'app-request-tail',
  templateUrl: './request-tail.component.html',
  styleUrls: ['./request-tail.component.scss']
})
export class RequestTailComponent implements OnInit, OnDestroy {
  @Input('request') request: ExchangeRequest;
  sender: User;
  receiver: User;
  fromLesson: Lesson;
  toLesson: Lesson;
  private subscription: Subscription

  constructor(
    private userApi: UserApiService,
    private lessonApi: LessonApiService
  ) { }

  ngOnInit(): void {
    this.subscription = this.userApi.getUsername(this.request.fromUserId).subscribe(user => this.sender = user);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
