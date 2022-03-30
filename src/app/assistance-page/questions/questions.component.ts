import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  profileForm = this.formBuilder.group({
    type_intervention:[''],
    probleme:['']
  });

  saveForm(){
    console.log('donnees du formulaire : ', this.profileForm.value)

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
