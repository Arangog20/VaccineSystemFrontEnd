import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class VisibleModal {
    constructor() {}

    $visibleModal = new EventEmitter<any>();
}