import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable, Subject } from 'rxjs';
import { AppUser } from '../models/app-user';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  public test = 'Test';

  private errorMessageSubject = new Subject<string>();
  private errorCodeSubject = new Subject<string>();

  public getErrorMessage():Subject<string>{
    return this.errorMessageSubject;
  }
  public getErrorCode():Subject<string>{
    return this.errorCodeSubject;
  }

  constructor(private userService: UserService, private afAuth: AngularFireAuth, private route: ActivatedRoute) { 
    this.user$ = afAuth.authState;
  }

  googleSignIn() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  emailSignIn(form){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    firebase.auth().signInWithEmailAndPassword(form.value.email, form.value.password).then(function(response){
      form.reset();
    }).catch(
      error => {
        this.errorMessageSubject.next(error.message), this.errorCodeSubject.next(error.code), form.markAsPristine();
      });
  }

  register(form) {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    firebase.auth().createUserWithEmailAndPassword(form.value.email, form.value.password).then(function(response){
      firebase.auth().signInWithEmailAndPassword(form.value.email, form.value.password).then(function(response){
        let user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: form.value.displayName,
          photoURL: ''
        }).then(function(response) {
          //Success
        }, function(error) {
          //Error
          console.log(error);
        });
        form.reset();
      }).catch(function(error) {
        //Error
        console.log(error);
      });
    }).catch(
      error => {
        this.errorMessageSubject.next(error.message), this.errorCodeSubject.next(error.code), form.markAsPristine()
      });
  }

  get appUser$() : Observable<AppUser> {
    return this.user$
    .pipe(switchMap(user => {
      if(user) return this.userService.get(user.uid).valueChanges()
      return of(null);
    }))
  }


}
