import {ReactNode} from "react";
import BottomTabs from "@/app/internal/_shared/components/bottom-tabs/bottomTabs";

export default function InternalLayout({children}:{children:ReactNode}){
    return(
        <>
            {children}
            <BottomTabs></BottomTabs>
        </>
    )
}
