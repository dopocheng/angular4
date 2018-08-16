import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/login',
        pathMatch: 'full' 
    },
   
];

@NgModule({
    //根路由是 forRoot(routes)
    imports: [CommonModule,RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule implements OnInit{

    ngOnInit() {
        console.log("asdasdsa");
    }
}

