import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  standalone:false,
})
export class DashboardPage {
  @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('cameraInput') cameraInput!: ElementRef;
  image: any = null;

  uploadFile() {
    this.fileInput.nativeElement.click();
  }

  captureWithCamera() {
    this.cameraInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => (this.image = reader.result);
      reader.readAsDataURL(file);
    }
  }
}
