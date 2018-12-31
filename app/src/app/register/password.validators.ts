import {AbstractControl} from '@angular/forms';
export class PasswordValidators {

    static MatchPassword(control: AbstractControl) {
        let password = control.root.value.password; // to get value in input tag
        let confirmPassword = control.value; // to get value in input tag
            if(password != confirmPassword) {
                return {MatchPassword: true}
            } else {
                return null
            }
    }
}