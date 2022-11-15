import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalLoaderService {

  constructor() { }

  title: string | null = 'HELLO!';

  showLoader(title: string): void {
    this.title = title;
  }

  hideLoader():void{
    this.title = null;
  }
}
