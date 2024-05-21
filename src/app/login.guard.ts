import { inject } from "@angular/core"
import { LoginService } from "./services/login.service"
import { CanActivateFn, Router } from "@angular/router"

export const authGuard: CanActivateFn = () =>{
  const loginService = inject(LoginService)
  const router = inject(Router)

  if (loginService.isLoggedIn) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
}