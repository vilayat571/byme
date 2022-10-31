import { ReactNode } from "react"

interface ILayout{
    children:ReactNode
}

export default function Layout(props:ILayout) {
  return (
    <div>
      {props.children}
    </div>
  )
}
