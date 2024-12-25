import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Inject } from '@angular/core';
import { HttpservicesService } from '../services/httpservices.service';
import { NoteservicesService } from '../services/noteservices.service';

export const authGuard: CanActivateFn = (route : ActivatedRouteSnapshot, state : RouterStateSnapshot) => {
  const router = Inject(Router);

  // if(localStorage.getItem("access_token")){
  //   //router.navigate(['/login']);
  //   return true;
  // }else{
  //   return false;
  // }  
  return true;
};
