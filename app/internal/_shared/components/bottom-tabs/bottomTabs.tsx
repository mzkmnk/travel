"use client"

import {Calendar, House, User} from "lucide-react";
import BottomTabItem from "@/app/internal/_shared/components/bottom-tabs/bottomTabItem";
import {usePathname, useRouter } from "next/navigation";

export default function BottomTabs(){

    const router = useRouter();

    const pathname = usePathname();

    const judgeSamePathname = (path: string):boolean => path === pathname;

    return (
        <div className={"bg-white fixed bottom-0 left-0 w-full border-t h-16 px-5 py-2 flex gap-3 justify-around"}>
            <BottomTabItem onClick={() => {router.push('/internal/home')}}>
                <House strokeWidth={judgeSamePathname('/internal/home') ? '2.5':'1.7'} ></House>
            </BottomTabItem>
            <BottomTabItem onClick={() => {router.push('/internal/schedule')}}>
                <Calendar strokeWidth={judgeSamePathname('/internal/schedule') ? '2.5':'1.7'}></Calendar>
            </BottomTabItem>
            <BottomTabItem onClick={() => {router.push('/internal/profile')}}>
                <User strokeWidth={judgeSamePathname('/internal/profile') ? '2.5':'1.7'}></User>
            </BottomTabItem>
        </div>
    )
}
