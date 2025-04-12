import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    //NO ASYNC
    //Before render
    //Una vez
    console.log('construtor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges){
    //Before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if(duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit(){
    //After render
    //Una vez
    //Async, Then, Subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    this.counterRef = window.setInterval(() => {
      console.log('Run interval')
      this.counter.update(statePrev => statePrev + 1);
    }, 1000)
  }

  ngAfterViewInit() {
    //After render
    //Hijos ya fueron pintados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef)
  }

  doSomething() {
    console.log('Change duration');
    //Async
  }
}
