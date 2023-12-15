import { Pipe, PipeTransform } from '@angular/core';
import {AppUser} from "./user.model";

@Pipe({
  name: 'userFilter'
})

export class UserFilterPipe implements PipeTransform {

  transform(value: AppUser[], input: string): AppUser[] {
    return value.filter(user => ifSearchMatch(user, input));
  }

}


function ifSearchMatch(user: AppUser, input: string) : boolean {
  return user.nombre.includes(input) || user.correo.includes(input);
}