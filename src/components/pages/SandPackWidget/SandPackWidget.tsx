import { useEffect, useRef, useState } from "react";

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
import IcTerminal from "@/components/icons/IcTerminal";

import '@/styles/pages/SandPackWidget/SandPackWidget.scss'

export default function SandPackWidget() {
  const files: Object = {}

  const runBtnRef = useRef<HTMLButtonElement | null>(null)

  const [isOpenConsole, setIsOpenConsole] = useState(false);

  useEffect(() => {
    runBtnRef.current = document.querySelector('.sp-c-gMfcns')
    if (runBtnRef.current) {
      runBtnRef.current.style.position = 'fixed';
      runBtnRef.current.style.top = '18px';
      runBtnRef.current.style.left = '224px';
      runBtnRef.current.style.zIndex = '3';
      runBtnRef.current.style.width = 'fit-content  ';
    }
  }, [])

  return (
    <SandpackProvider template="react" theme="dark" options={{
      classes: {
        "sp-wrapper ": "custom-sp-wrapper",
        "sp-layout": "custom-sp-layout",
        "sp-stack": "custom-sp-stack",
        "sp-file-explorer": "custom-file-explorer",
        "sp-code-editor": "custom-code-editor",
        "sp-console": "custom-console"
      },
      autoReload: false
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
          />
        </div>
        <div className="output-area">
          <SandpackStack>
            <SandpackPreview showNavigator showOpenInCodeSandbox actionsChildren={
              <button onClick={() => setIsOpenConsole(!isOpenConsole)} className="buttons">
                <IcTerminal />
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
