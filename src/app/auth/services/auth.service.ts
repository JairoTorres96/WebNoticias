import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from 'firebase';
import { AngularFireAuth} from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthService {
  public user:User;

  constructor(public afAuth: AngularFireAuth,) { }

  async login(email:string, pass:string){
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email,pass);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async register(email:string, pass:string){
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email,pass);
    return result;
    } catch (error) {
      console.log(error);
    }
  }
  async logout(){
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }
  getCurrentUser(){
    try {
      return this.afAuth.authState.pipe(first()).toPromise();
    } catch (error) {
      console.log(error);
    }
  }
}
