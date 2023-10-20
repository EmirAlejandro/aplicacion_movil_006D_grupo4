import { Injectable } from '@angular/core';
///////librerias
import{ AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class ServicioFirebaseService {

  constructor(private afs: AngularFirestore) { }


  
}
