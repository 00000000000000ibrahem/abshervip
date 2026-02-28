import type React from "react"

export interface RequirmentData{
    service:string,
    requirements:Array<string>,
    icon:React.ReactElement
}
export interface Allgoverments{
    gov:string,
    icon:React.ReactElement,
    path:string
}
export interface Steps {
        n:number,
        p:string,
    }