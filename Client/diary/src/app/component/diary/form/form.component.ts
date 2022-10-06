import { Component, EventEmitter, OnInit, Output, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Diary } from 'src/app/diary';

@Component({
  selector: 'app-diary-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges{

  @Input() diary: Diary;
  public diaryForm: FormGroup;
  @Output() save: EventEmitter<Diary> = new EventEmitter<Diary>();

  constructor(private formBuilder: FormBuilder) {
    this.diaryForm = this.formBuilder.group({
      id: [undefined],
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });

  }

  public ngOnChanges(): void {
    if (this.diary) {
      this.diaryForm.patchValue(this.diary);
    }
  }

  public onSubmit(): void {
    if (!this.diaryForm.valid) {
      return;
    }
    this.save.emit(this.diaryForm.value);
  }


  public setIsInvalidClass(property: string){
    return (this.diaryForm.get(property)?.invalid && (this.diaryForm.get(property)?.dirty || this.diaryForm.get(property)?.touched));
  }
}
