import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { VaccineService } from 'src/app/services/vaccine.service';
import { VisibleModal } from 'src/app/services/visibleModal.service';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.css']
})
export class VaccineComponent implements OnInit {
  isModalVisible:boolean = false;
  name: string = '';
  minAge: number = 0;
  maxAge: number  = 0;
  constructor(
    private modalVisible: VisibleModal,
    private vaccineService: VaccineService
  ) { }

  ngOnInit(): void {
    this.modalVisible.$visibleModal.subscribe((value) =>{this.isModalVisible = value})
  }

  sendDataVaccine(){
    const data =  {
      name: this.name,
      minAge: this.minAge,
      maxAge: this.maxAge,
    };
    this.vaccineService.createVaciine(data)
    .pipe(finalize(() => {
      console.log('Petición completada');
    }))
    .subscribe({
      next: (response) => {
        alert('Vacuna creada correctamente');
        console.log('Respuesta del servidor:', response);
      },
      error: (error) => {
        alert('Error al crear vacuna');
        console.error('Error:', error);
      }
    });
  }

  openModal(){
    this.isModalVisible = true;
  }
  

}
