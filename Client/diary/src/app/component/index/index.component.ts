import { Component, OnInit } from '@angular/core';
import { Diary } from 'src/app/diary';
import { DiaryService } from 'src/app/services/diary.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title = 'diary';
  isCollapsed = true;

  public diaries : Array<Diary> = [];
  public firstDate: String;
  public LastDate: String;
  public numberOfDiaries: Number;

  constructor(private diarySservice: DiaryService) { }

  public sortByDate(): void {
    this.diaries.sort((a: Diary, b: Diary) => {
        return +new Date(a.date) - +new Date(b.date);
    });
  }

  async ngOnInit(): Promise<void>{
    this.diaries = await this.diarySservice.getAll();
    this.numberOfDiaries = this.diaries.length;
    this.sortByDate();
    this.firstDate = this.diaries[0].date;
    this.LastDate = this.diaries[this.diaries.length-1].date;

  }

}
