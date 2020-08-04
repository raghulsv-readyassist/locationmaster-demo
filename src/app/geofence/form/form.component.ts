import { Component, OnInit, Input } from '@angular/core';
import { MapService } from 'src/app/shared/map.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() geocoords:any[]=[] ;
    
  

  constructor(public service:MapService) { }

  ngOnInit(): void {
    
  }
  onsubmit(form:NgForm){
    this.insertRecord(form);
  }
  insertRecord(form: NgForm){
    this.service.postmap(form.value).subscribe(res=>{
      
    });

  }

}