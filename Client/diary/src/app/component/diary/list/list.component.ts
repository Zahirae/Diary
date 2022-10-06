import { Component, OnInit } from '@angular/core';
import { Diary } from 'src/app/diary';
import { DiaryService } from 'src/app/services/diary.service';

@Component({
  selector: 'app-diary-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public diaries : Array<Diary> = [];

  constructor(private diarySservice: DiaryService) { }


  async ngOnInit(): Promise<void>{
    this.diaries = await this.diarySservice.getAll();
  }

  /*public async all(): Promise<void> {
    this.diaries = await this.diarySservice.getAll();
  }*/

}
