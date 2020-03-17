
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cssTask';
  xCord:number = 0;
  yCord:number = 180;
  height:number = 20;
  width:number = 20;

  ngOnInit() {
    this.yCord = 180;
    this.xCord = 0;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }


  onDragEnded(event) {
    console.log(event)
    //document.getElementById('innerBox').style.[transform].translate3d(20px,20px,0px)
    let element = event.source.getRootElement();
    console.log('element',element)
    let boundingClientRect = element.getBoundingClientRect();
    console.log('boundingClientRect',boundingClientRect);
    let parentPosition = this.getPosition(element);
    console.log('parentPosition',parentPosition);
    let x =  (boundingClientRect.x - parentPosition.left)
    let y =  (boundingClientRect.y - parentPosition.top); 
    this.yCord = y;
    this.xCord = x; 
   // document.getElementById('innerBox').style.width =  this.width + 'px'; 
   // document.getElementById('innerBox').style.height =  this.height + 'px';    
  }
  
  getPosition(el) {
    console.log('el',el.offsetLeft, el.offsetTop);
    let x = 0;
    let y = 0;
    while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      x += el.offsetLeft - el.scrollLeft;
      y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return { top: y, left: x };
  }
}
