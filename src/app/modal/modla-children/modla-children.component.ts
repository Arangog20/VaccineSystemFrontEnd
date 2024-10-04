import { Component, Input, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { ChildrenService } from 'src/app/services/children.service';
import { VisibleModal } from 'src/app/services/visibleModal.service';

@Component({
  selector: 'app-modla-children',
  templateUrl: './modla-children.component.html',
  styleUrls: ['./modla-children.component.css']
})
export class ModlaChildrenComponent implements OnInit {
  isLoading: boolean = false;
  children: any[] = [];
  @Input()isVisible : boolean = false; 

  constructor(
    private modalVisible: VisibleModal,
    private childrenService: ChildrenService
  ) { }

  ngOnInit(): void {
    this.loadChildren()
  }

  closeModal(){
    this.modalVisible.$visibleModal.emit(false);
  }

  loadChildren(): void {
    this.isLoading = true;
    this.childrenService.getChildren()
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe({
        next: (response) => {
          this.children = response;
        },
        error: (error) => {
          console.error('Error al obtener la lista de niños:', error);
        }
      });
}

deleteChild(id: number): void {
  if (confirm('¿Estás seguro de que deseas eliminar este niño?')) {
    this.childrenService.deleteChildren(id)
      .pipe(finalize(() => {
        this.loadChildren(); 
      }))
      .subscribe({
        next: () => {
          alert('niño eliminado correctamente');
        },
        error: (error) => {
          alert('Error al eliminar el niño');
          console.error('Error:', error);
        }
      });
  }
}

}
