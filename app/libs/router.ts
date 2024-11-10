import {redirect, RedirectType} from "next/navigation";

export type TRouter = '/internal/home'|'/internal/profile'|'/internal/schedule';

export const routerNavigate = ({router,type}:{router:TRouter,type?:RedirectType}):void => {
    redirect(router,type);
};
