import {HTMLAttributes,  ReactNode} from "react";

export default function BottomTabItem({children,onClick}:{children:ReactNode} & HTMLAttributes<HTMLDivElement>){
    return (
        <div className={"flex gap-2 flex-col items-center justify-center"} onClick={onClick}>
            {children}
        </div>
    )
}
