import { useState } from "react";

import {
  Sandpack,
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer,
  SandpackConsole,
  SandpackStack
} from "@codesandbox/sandpack-react"
import CustomFileExplorer from "../CustomFileExplorer/CustomFileExplorer";

import { autocompletion, completionKeymap } from "@codemirror/autocomplete";

import '@/components/SandPackWidget/SandPackWidget.scss'

export default function SandPackWidget() {
  const files: Object = {}

  const [isOpenConsole, setIsOpenConsole] = useState(false);

  return (
    <SandpackProvider template="react" theme="dark" options={{
      classes: {
        "sp-wrapper ": "custom-sp-wrapper",
        "sp-layout": "custom-sp-layout",
        "sp-stack": "custom-sp-stack",
        "sp-file-explorer": "custom-file-explorer"
      },
    }
    }>
      <SandpackLayout>
        <SandpackFileExplorer />
        <SandpackCodeEditor
          extensions={[autocompletion()]}
          extensionsKeymap={[completionKeymap]}
          showLineNumbers
          closableTabs
        />
        <SandpackStack>
          <SandpackPreview showNavigator showOpenInCodeSandbox actionsChildren={
            <button onClick={() => setIsOpenConsole(!isOpenConsole)} className="buttons">
              {isOpenConsole ? 'Close Console' : 'Open Console'}
            </button>
          }/>
          {isOpenConsole && <SandpackConsole />}
        </SandpackStack>
      </SandpackLayout>
    </SandpackProvider>
  )
}
