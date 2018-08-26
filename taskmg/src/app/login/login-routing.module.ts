import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; //导入注册页面

const routes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent 
    },
    {
        path: 'register', component: RegisterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule implements OnInit{
    ngOnInit() {
        console.log(1212121);
    }
}
