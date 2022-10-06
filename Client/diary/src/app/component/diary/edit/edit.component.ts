import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diary } from 'src/app/diary';
import { DiaryService } from 'src/app/services/diary.service';

@Component({
  selector: 'app-diary-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public diary : Diary;
  constructor(private diaryService: DiaryService ,private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(id);
     this.diaryService.get(id).subscribe((data: Diary) => {
       this.diary = data;
      });

  }

  public onSave(diary: Diary) {
    this.diaryService.update(diary.id, diary).subscribe(() => {
      this.router.navigate(['/diaries']);
    });
  }

}
