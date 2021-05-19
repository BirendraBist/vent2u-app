import {FormControl} from '@angular/forms';

export class PasswordValidatorService{
    static cannotContainSpace(FormControl:FormControl){
        if(FormControl.value.indexOf(' ') >= 0)
        return {cannotContainSpace: true};
        return null;
    }
}