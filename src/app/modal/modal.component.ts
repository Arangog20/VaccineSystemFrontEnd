import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import { VisibleModal } from '../services/visibleModal.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  isLoading: boolean = false;
  municipalities: any[]= [];
  foundDepartment: any = null;
  departmentNotFound: boolean = false; 
  name: string = '';

  constructor(
    private departmentService: DepartmentService,
    private modalVisible: VisibleModal
  ) { }

  ngOnInit(): void {
    this.modalVisible.$visibleModal.subscribe((departmentName) => {
      this.name = departmentName;
      this.loadMunicipality(); 
    });
  }

 

  loadMunicipality(): void {
    if (!this.name) {
      this.departmentNotFound = true; 
      return;
    }

    this.isLoading = true;
    this.departmentNotFound = false;

    this.departmentService.findDepartment(this.name)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: (response) => {
          if (response) {
            this.foundDepartment = response;
            this.municipalities = response.municipalities || [];
          } else {
            this.departmentNotFound = true; 
          }
        },
        error: (error) => {
          console.error('Error al buscar el departamento:', error);
          this.departmentNotFound = true; 
        }
      });
  }



  closeModal(){
    this.modalVisible.$visibleModal.emit(false);
  }

}
