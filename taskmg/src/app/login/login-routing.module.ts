import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common'

const routes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent 
    }
];

@NgModule({
    imports: [CommonModule,RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule implements OnInit{
    ngOnInit() {
        console.log(1212121);
    }
}
