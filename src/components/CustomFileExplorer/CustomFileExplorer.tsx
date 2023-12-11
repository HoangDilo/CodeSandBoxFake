import { Sandpack } from "@codesandbox/sandpack-react"
import { useContext } from "react"

export default function CustomFileExplorer() {

    const {Files} = useContext(Sandpack)

  return (
    <div>CustomFileExplorer</div>
  )
}
