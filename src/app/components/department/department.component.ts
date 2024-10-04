import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { DepartmentService } from 'src/app/services/department.service';
import { VisibleModal } from 'src/app/services/visibleModal.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  isLoading: boolean = false;
  isModalVisible:boolean = false;
  departments: any[]=[];
  name: string = ''; 

  constructor(
    private departmentService: DepartmentService,
    private modalVisible: VisibleModal
  ) { }

  ngOnInit(): void {
    this.loadDepartments();
    this.modalVisible.$visibleModal.subscribe((value) => {
      this.isModalVisible = value;
    });
  }

  loadDepartments(): void {
    this.isLoading = true;
    this.departmentService.getDepartments()
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe({
        next: (response) => {
          this.departments = response;
        },
        error: (error) => {
          console.error('Error al obtener la lista de departamentos:', error);
        }
      });
  }


openModal(){
  this.isModalVisible = true;
}



}
