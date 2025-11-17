import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-paint',
  imports: [FormsModule],
  templateUrl: './paint.component.html',
  styleUrl: './paint.component.css'
})
export class PaintComponent {
  canvas: any;
  context: any;
  selectedColor = "#ffffff"
  defaultColors: string[] = [
  '#FF0000', 
  '#FFA500', 
  '#FFFF00',
  '#008000',
  '#00BFFF',
  '#0000FF', 
  '#800080', 
  '#FFC0CB', 
  '#000000', 
  '#FFFFFF'  
];  
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  ngAfterViewInit(): void {
    let matches = document.querySelectorAll("input")
    for(let i = 1; i < matches.length - 3; i++){
      matches[i].style.backgroundColor = this.defaultColors[i-1]
      matches[i].value = this.defaultColors[i-1]
    }
    this.canvas = this.canvasRef.nativeElement;
    const rect = this.canvas.getBoundingClientRect();

    this.canvas.width = rect.width;
    this.canvas.height = rect.height;

    this.context = this.canvas.getContext('2d');

    if (!this.context) return;
    this.context = this.context;
    this.context.lineWidth = 4;
    this.context.lineCap = 'round';
  }
  changeColor(){
    let matches = document.querySelectorAll("input")
    let colorPicker = (<HTMLInputElement> document.querySelector('input[name="colorpicker"]'))
    for(let i = 1; i < matches.length - 1; i++){
      if(matches[matches.length - 2].checked || matches[matches.length - 3].checked){
        colorPicker.disabled = false;
      }
      else if(matches[i].checked){
        this.selectedColor = matches[i].value;
        colorPicker.disabled = true;
      }
    }
  }
  changeColorPicker(){
    let colorPicker = (<HTMLInputElement> document.querySelector('input[name="colorpicker"]'))
    let matches = document.querySelectorAll("input")
    for(let i = 1; i < matches.length - 1; i++){
      if(matches[i].checked){
        matches[i].value = colorPicker.value;
        matches[i].style.backgroundColor = colorPicker.value;

        this.selectedColor = matches[i].value;
      }
    }
  }
  isDrawing = false;
  startDrawing(event: MouseEvent): void {
    this.isDrawing = true;
    this.draw(event); 
  }
  stopDrawing(): void {
    this.isDrawing = false;
    this.context.beginPath();
  }

  draw(event: MouseEvent): void {
    if (!this.isDrawing) return;

    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.context.strokeStyle = this.selectedColor;
    this.context.lineTo(x, y);
    this.context.stroke();
    this.context.beginPath();
    this.context.moveTo(x, y);
  }
}