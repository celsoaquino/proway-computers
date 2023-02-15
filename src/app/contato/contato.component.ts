import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IProduto} from "../produtos";

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ["", [
        Validators.minLength(4),
        Validators.required
      ]],
      assunto: ["", [
        Validators.minLength(10),
        Validators.required
      ]],
      telefone: ["", [
        Validators.minLength(11),
        Validators.required
      ]],
      email: ["", [
        Validators.email,
        Validators.required
      ]],
      mensagem: ["", [
        Validators.minLength(20),
        Validators.required
      ]]
    });
  }

  enviarMensagem() {
    alert("A mensagem foi enviada!")
    this.form.reset();
  }

}
