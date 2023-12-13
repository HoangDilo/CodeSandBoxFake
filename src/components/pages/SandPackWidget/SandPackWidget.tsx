import { useState } from "react";

import { autocompletion } from "@codemirror/autocomplete";

import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackConsole,
  SandpackStack
} from "@codesandbox/sandpack-react"
import CustomFileExplorer from "../../shared/CustomFileExplorer/CustomFileExplorer";
import Description from "../Description/Description";

import '@/styles/pages/SandPackWidget/SandPackWidget.scss'

export default function SandPackWidget() {
  const files: Object = {}

  const [isOpenConsole, setIsOpenConsole] = useState(false);

  return (
    <SandpackProvider template="react" theme="dark" options={{
      classes: {
        "sp-wrapper ": "custom-sp-wrapper",
        "sp-layout": "custom-sp-layout",
        "sp-stack": "custom-sp-stack",
        "sp-file-explorer": "custom-file-explorer",
        "sp-code-editor": "custom-code-editor",
      },
    }
    }>
      <SandpackLayout>
        <Description />
        <div className="code-area">
          <CustomFileExplorer />
          <SandpackCodeEditor
            extensions={[autocompletion()]}
            showLineNumbers
            closableTabs
            wrapContent
          />
        </div>
        <div className="output-area">
          <SandpackStack>
            <SandpackPreview showNavigator showOpenInCodeSandbox actionsChildren={
              <button onClick={() => setIsOpenConsole(!isOpenConsole)} className="buttons">
                {isOpenConsole ? 'Close Console' : 'Open Console'}
              </button>
            } />
            {isOpenConsole && <SandpackConsole />}
          </SandpackStack>
        </div>
      </SandpackLayout>
    </SandpackProvider>
  )
}
