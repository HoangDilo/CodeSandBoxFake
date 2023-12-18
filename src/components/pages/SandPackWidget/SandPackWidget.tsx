import { createContext, useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";

import { autocompletion } from "@codemirror/autocomplete";
import { getAllChallenges, getChallengeById } from '@/api/getChallenge'
import { getAuthorById } from '@/api/getAuthor'

import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackConsole,
  SandpackStack,
  SandpackFile
} from "@codesandbox/sandpack-react"
import CustomFileExplorer from "../../shared/CustomFileExplorer/CustomFileExplorer";
import Description from "../Description/Description";
import IcTerminal from "@/components/icons/IcTerminal";

import { Challenge } from "@/interfaces/Challenge";
import { Author } from "@/interfaces/Author";

import '@/styles/pages/SandPackWidget/SandPackWidget.scss'

interface ChallengProviderValues {
  challenge: typeof Challenge | undefined,
  authorInfo: typeof Author | undefined,
  isShowSolution: boolean,
  setIsShowSolution: any,
}

export const ChallengeData = createContext<ChallengProviderValues>({
  challenge: undefined,
  authorInfo: undefined,
  isShowSolution: false,
  setIsShowSolution: undefined
});

export default function SandPackWidget() {
  const files: Object = {}

  const { challengeId } = useParams();

  const runBtnRef = useRef<HTMLButtonElement | null>(null)

  const [isOpenConsole, setIsOpenConsole] = useState(false);
  const [challenge, setChallenge] = useState<typeof Challenge>();
  const [authorInfo, setAuthorInfo] = useState<typeof Author | undefined>();
  const [isShowSolution, setIsShowSolution] = useState(false);
  
  useEffect(() => {
    runBtnRef.current = document.querySelector('.sp-c-gMfcns')
    if (runBtnRef.current) {
      runBtnRef.current.style.position = 'fixed';
      runBtnRef.current.style.top = '18px';
      runBtnRef.current.style.left = '224px';
      runBtnRef.current.style.zIndex = '3';
      runBtnRef.current.style.width = 'fit-content';
    }
  }, [])

  useEffect(() => {
    getAllChallenges().then((data: { data: typeof Challenge[] }) => {
      setChallenge(data.data.find(challenge => Number(challenge.id) === parseInt(String(challengeId))))
    })
  }, [])

  useEffect(() => {
    getAuthorById(challenge?.authorId).then((data: { data: typeof Author }) => {
      setAuthorInfo(data.data)
    })
  }, [challenge])

  return (
    <ChallengeData.Provider value={{ challenge, authorInfo, isShowSolution, setIsShowSolution }}>
      <SandpackProvider template="react" theme="dark" options={{
        classes: {
          "sp-wrapper ": "custom-sp-wrapper",
          "sp-layout": "custom-sp-layout",
          "sp-stack": "custom-sp-stack",
          "sp-file-explorer": "custom-file-explorer",
          "sp-code-editor": "custom-code-editor",
          "sp-console": "custom-console",
          "sp-preview-actions": "custom-preview-actions"
        },
        autoReload: false,
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
    </ChallengeData.Provider>

  )
}
