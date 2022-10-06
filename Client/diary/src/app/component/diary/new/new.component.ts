import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Diary } from 'src/app/diary';
import { DiaryService } from 'src/app/services/diary.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent{

  constructor(private diaryService: DiaryService, private router: Router) { }

  public onSave(diary: Diary) {
    //console.log(diary);
    this.diaryService.add(diary).subscribe((data) => {
      this.router.navigate(['/diaries']);
    });
  }

}
