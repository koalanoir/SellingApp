import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  message!: Message; 
  sujet!: string;
  mail!: string;
  telephone!: number;
  contenu!: string;
  alert!: string;
  confirmation!: string;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  submit(sujet: string, mail: string,telephone:number,contenu:string):void{
    this.message=new Message(sujet,mail,telephone,contenu);
    console.log(this.message.contenu);
    this.confirmation="Si votre l'adresse mail saisi existe vous aller recevoir un mail de confrimation."
  }

  validate(sujet : string, mail: string, telephone: any, contenu: string):boolean {
    if (sujet.length<5||mail.length<5||telephone==null||contenu.length<5){
      this.alert="tous les champs doivent être correctement rempli"
      return false
    }
    return true
  }
}


export class Message{
  sujet: string;
  mail: string;
  telephone: number;
  contenu: string;
  constructor(sujet: string, mail: string, telephone: number, contenu: string){
      this.sujet = sujet;
      this.mail = mail;
      this.telephone = telephone;
      this.contenu = contenu;
  }
}
