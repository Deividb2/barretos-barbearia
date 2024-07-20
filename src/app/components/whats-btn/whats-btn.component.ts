import { Component } from '@angular/core';

@Component({
  selector: 'app-whats-btn',
  templateUrl: './whats-btn.component.html',
  styleUrl: './whats-btn.component.scss'
})
export class WhatsBtnComponent {

  phoneNumber: string = '5521977201714'
  message: string = "Olá, gostaria de saber mais sobre os serviços!"
  encodedMessage = encodeURIComponent(this.message)

  openWhats() {
    window.open(`https://wa.me/${this.phoneNumber}?text=${this.encodedMessage}`)
  }
}
