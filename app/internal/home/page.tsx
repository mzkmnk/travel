import {CirclePlus, Waypoints} from "lucide-react";
import Image from "next/image";

export default function  HomePage(){
    return (
        <div className={"flex flex-col h-full"}>
            <div className={"flex flex-col gap-2"}>
                <p className={"text-2xl font-semibold tracking-wider"}>Travels</p>
                <div className={"flex w-full gap-2 overflow-x-scroll snap-x"}>
                    <div className={"p-2"}>
                        <div className={"flex flex-shrink-0 scroll-ml-5 snap-start items-center justify-center h-40 w-28 bg-slate-100 rounded-3xl"}>
                            <CirclePlus></CirclePlus>
                        </div>
                    </div>

                    <div className={"flex items-center justify-center"}>
                        <div className={"relative flex flex-shrink-0 scroll-ml-5 snap-start items-center justify-center h-40 w-28 bg-white rounded-2xl"}>
                            <Image className={"rounded-3xl object-fill"} src={'/assets/mock/mock1.jpg'} alt={'mock'} fill={true}></Image>
                            <div className={"absolute bottom-5 flex items-center justify-center gap-2"}>
                                <Waypoints strokeWidth={1.5} className={"text-white"} width={20}></Waypoints>
                                <p className={"text-white text-sm"}>Miyagi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
