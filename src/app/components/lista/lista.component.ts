import { Component } from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  StudentsList: Student[] = [
    {
      name: 'Esteban',
      age: 27,
      approved: 'Aprobado',
      isActive: true
    },
    {
      name: 'Pedro',
      age: 26,
      approved: 'Reprobado',
      isActive: true
    },
    {
      name: 'Sebastián',
      age: 25,
      approved: 'Aprobado',
      isActive: true
    },
    {
      name: 'Nicolás',
      age: 24,
      approved: 'Aprobado',
      isActive: false
    }
  ];
}
