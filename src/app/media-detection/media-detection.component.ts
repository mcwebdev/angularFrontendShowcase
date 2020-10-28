import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-media-detection',
  templateUrl: './media-detection.component.html',
  styleUrls: ['./media-detection.component.scss'],
  providers: [MessageService]
})
export class MediaDetectionComponent implements OnInit {
  @ViewChild("video", { static: false }) video: ElementRef;
  @ViewChild("svg", { static: false }) svgEl: ElementRef;
  @Input()
  noWebcam: boolean;
  private width: number;
  private height: number;
  private margin = { top: 20, right: 20, bottom: 30, left: 40 };
  private x: any;
  private y: any;
  private svg: any;
  private g: any;
  constraints = { audio: true, video: true };
  userAudio: string;
  userVideo: string;

  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  async ngOnInit() {
    this.primengConfig.ripple = true;
    let stream = null;

    try {
      stream = await navigator.mediaDevices.getUserMedia(this.constraints);
      this.noWebcam = false;
    } catch (err) {
      this.noWebcam = true;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No Webcam Detected. Plug in webcam and refresh the page.' });
      this.userAudio = "User audio not detected. Plug in a webcam or a microphone."
      this.userVideo = "User video not detected. Plug in a webcam."
    }

    if (this.noWebcam === false) {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Webcam Detected. ' });
      this.userAudio = "User audio detected."
      this.userVideo = "User video detected."
    }
    const vid = this.video.nativeElement;

    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        vid.srcObject = stream;

      })
      .catch((err) => {
        this.noWebcam = true;
        //this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No Webcam Detected. Plug in webcam and refresh the page.' });
        console.log('Something went wrong!');
      });
  }

  async start() {

  }
}
