import { ErrorStateMatcher } from "@angular/material";
import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })
export class CrossFieldsErrorMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        if (!form.errors) return false;
        return form.invalid && control.dirty;
    }
}
