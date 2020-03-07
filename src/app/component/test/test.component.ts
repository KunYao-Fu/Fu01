import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public array = [1, 2, 3, 4, 5]
  public array2 = []

  public zero = 0
  public plus() {
    this.zero = this.zero + 1
  }
  public minus() {
    this.zero = this.zero - 1
  }
  public reply(j) {
    this.zero = this.zero + j
  }
  public increase() {
    this.array2.push(this.array2.length + 1)
  }

  public toString(number: Number) {
   return number.toString()
  }

  public log = _ => console.log(_)

}
