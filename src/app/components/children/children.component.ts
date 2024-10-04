import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { ChildrenService } from 'src/app/services/children.service';
import { DepartmentService } from 'src/app/services/department.service';
import { VisibleModal } from 'src/app/services/visibleModal.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
isModalVisible:boolean = false;
name: string = '';
birthday: Date | null = null;
municipalityId: number = 0;

  constructor(
    private  childService: ChildrenService,
    private modalVisible: VisibleModal

  ) { }


  ngOnInit(): void {
    this.modalVisible.$visibleModal.subscribe((value) =>{this.isModalVisible = value})
  }


 

  sendDatachild(){
    const data = {
      name: this.name,
      birthday: this.birthday,
      municipalityId: this.municipalityId
    };
    this.childService.createChild(data)
    .pipe(finalize(() => {
      console.log('Petición completada');
    }))
    .subscribe({
      next: (response) => {
        alert('Niño creado correctamente');
        console.log('Respuesta del servidor:', response);
      },
      error: (error) => {
        alert('Error al crear el niño,verifica que el municipio corresponda a los existentes');
        console.error('Error:', error);
      }
    });

}


openModal(){
  this.isModalVisible = true;
}
}
