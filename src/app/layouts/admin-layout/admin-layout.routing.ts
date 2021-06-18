import { Routes } from '@angular/router';

import { InicioComponent } from '../../inicio/inicio.component';
import { UserProfileComponent } from '../../personajes/personajes.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'inicio',      component: InicioComponent },
    { path: 'personajes/:film',   component: UserProfileComponent }
    
];
