import {ReactNode} from "react";
import BottomTabs from "@/app/(internal)/_shared/components/bottom-tabs/bottomTabs";

export default function HomeLayout({children}:{children:ReactNode}){
    return (
        <>
            {children}
            <BottomTabs></BottomTabs>
        </>
    )
}
