import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { Subscription } from 'rxjs';
import { LessonApiService } from 'src/app/data/api/lesson-api.service';
import { OccurrenceApiService } from 'src/app/data/api/occurrence-api.service';
import { SubjectApiService } from 'src/app/data/api/subject-api.service';
import { UserApiService } from 'src/app/data/api/user-api.service';
import { Lesson } from 'src/app/data/entities/lesson';
import { LessonOccurrence } from 'src/app/data/entities/lessonOccurrence';
import { Subject } from 'src/app/data/entities/subject';
import { ActiveNavElement } from 'src/app/shared/components/navbar/navbar.component';
import { OccurrenceTail } from '../../components/occurrence-tail/occurrence-tail.component';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {
  activeNavElement: ActiveNavElement = ActiveNavElement.QUEUE;

  userId: string = jwtDecode<JwtPayload>(localStorage.getItem('token')).sub;

  userOccurrences: OccurrenceTail[] = [];
  
  constructor(
    private subjectApi: SubjectApiService,
    private lessonApi: LessonApiService,
    private occurrenceApi: OccurrenceApiService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    // this.fetchQueues();
    this.fetchSubjects();
  }

  fetchQueues() {


    //1 past lesson if pastHour > currentHour-45

   
  }

  fetchSubjects() {
    this.subjectApi.getAllSubjects().subscribe(subjects => {
      subjects.forEach(subject => {
        if(this.userOccurrences.length < 9) this.fetchLessons(subject);
        else console.log('a');
      });
    })
  }

  fetchLessons(subject: Subject) {
    this.lessonApi.getLessons(subject.id).subscribe(lessons => {
      lessons.forEach(lesson => {
        if(this.userOccurrences.length < 9) this.fetchOccurrences(subject, lesson);
        else console.log('b');
      })
    }) 
  }

  fetchOccurrences(subject: Subject, lesson: Lesson) {
    let num: number = 1;

    this.occurrenceApi.getNext(lesson.id, 21).subscribe(occurrences => {
      occurrences.forEach(occurrence => {
        if(this.userOccurrences.length < 9 && occurrence.userId === (+this.userId)) {
          this.userOccurrences.push({subject, lesson, occurrence, num})
          num++;
        } else {
          this.userOccurrences.sort((a, b) => (+this.datePipe.transform(a.occurrence.date, 'yyyyMMdd')) - (+this.datePipe.transform(b.occurrence.date, 'yyyyMMdd')));
          console.log('xd')
          return;
        };
      });
    })
    
  }

}
