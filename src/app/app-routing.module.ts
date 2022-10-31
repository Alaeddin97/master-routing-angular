import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { authGuard } from "./auth-guard.service";
import { canDeactivateGuard } from "./canDeactivate.service";
import { HomeComponent } from "./home/home.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { ResolverService } from "./resolverService.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoute: Routes = [
    { path: '', component: HomeComponent },
    {
      path: 'users',
      component: UsersComponent,
      children: [{ path: ':id/:name', component: UserComponent }],
    },
    {
      path: 'servers', canActivateChild:[authGuard],
      component: ServersComponent,
      children: [
        { path: ':id', component: ServerComponent ,resolve:{server:ResolverService}},
        { path: ':id/edit', component: EditServerComponent,canDeactivate:[canDeactivateGuard] },
      ],
    },
    {path:'not-found',component:NotFoundPageComponent},
    {path:'**',redirectTo:'/not-found',pathMatch:'full'}
  ];
@NgModule({

    imports:[RouterModule.forRoot(appRoute)],
    exports:[RouterModule]
}
)
export class AppRoutingModule{
}

