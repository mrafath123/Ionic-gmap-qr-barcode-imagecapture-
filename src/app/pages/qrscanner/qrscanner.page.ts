import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrowserMultiFormatReader, IScannerControls } from '@zxing/browser';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.page.html',
  styleUrls: ['./qrscanner.page.scss'],
  standalone: false,
})
export class QrscannerPage implements OnInit, OnDestroy {
  result: string = '';
  codeReader: BrowserMultiFormatReader;
  controls: IScannerControls | null = null;

  constructor() {
    this.codeReader = new BrowserMultiFormatReader();
  }

  async ngOnInit() {
    try {
      const devices = await BrowserMultiFormatReader.listVideoInputDevices();
      if (devices.length === 0) {
        console.error('No video input devices found');
        return;
      }

      const videoElement = document.getElementById('video') as HTMLVideoElement;

      this.controls = await this.codeReader.decodeFromVideoDevice(
        devices[0].deviceId,
        videoElement,
        (result, error, controls) => {
          if (result) {
            this.result = result.getText();
            controls.stop(); 
          }
        }
      );
    } catch (err) {
      console.error('Error initializing scanner:', err);
    }
  }

  ngOnDestroy() {
    this.controls?.stop(); 
  }
}
