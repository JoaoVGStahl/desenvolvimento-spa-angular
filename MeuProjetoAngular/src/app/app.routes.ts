import { Routes } from "@angular/router"
import { ContatoComponent } from "./institucional/contato/contato.component"
import { SobreComponent } from "./institucional/sobre/sobre.component"
import { HomeComponent } from "./navegation/home/home.component"

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    {path: 'contato', component : ContatoComponent},
    {path: 'sobre', component: SobreComponent}
]