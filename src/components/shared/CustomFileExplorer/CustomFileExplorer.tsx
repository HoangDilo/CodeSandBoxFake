import { useContext, useEffect, useRef, useState } from "react"
import { useSandpack } from "@codesandbox/sandpack-react"

import { findDirectory } from "@/utils/findDirectory";
import { getAllChallenges } from "@/api/getChallenge";

import { SandpackFileExplorer } from "@codesandbox/sandpack-react";
import IcNewFile from "../../icons/IcNewFile";
import IcNewFolder from "../../icons/IcNewFolder";
import IcTrashCan from "@/components/icons/IcTrashCan";
import { ChallengeData } from "@/components/pages/SandPackWidget/SandPackWidget";

import { Challenge } from "@/interfaces/Challenge";

import '@/styles/shared/CustomFileExplorer/CustomFileExplorer.scss';

export default function CustomFileExplorer() {

  const { sandpack } = useSandpack();
  const { files, visibleFiles, addFile, activeFile, setActiveFile, deleteFile, autoReload } = sandpack;

  const { challenge, isShowSolution } = useContext(ChallengeData)

  const [isAdding, setIsAdding] = useState(false);
  const [addingType, setAddingType] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [filePath, setFilePath] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddNew = (type: string) => {
    setIsAdding(true);
    if (type === 'file') {
      setAddingType('file');
    } else if (type === 'folder') {
      setAddingType('folder');
    }
  }

  const handleDelete = () => {
    deleteFile(activeFile)
  }

  const handleCancelAdd = () => {
    if (!inputValue) {
      setIsAdding(false)
    }
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      setIsAdding(false)
      if (addingType === 'file') {
        setFilePath(findDirectory(activeFile) + '/' + inputValue)
      } else if (addingType === 'folder') {
        setFilePath(`${findDirectory(activeFile)}/${inputValue}/${inputValue}`);
      }
    }
  }

  useEffect(() => {
    if (filePath) {
      addFile(filePath, '', true)
      visibleFiles.push(filePath)
      inputRef.current?.blur();
    }
  }, [filePath])

  useEffect(() => {
    setActiveFile(filePath)
  }, [Object.keys(files).length])

  useEffect(() => {
    if (isAdding && inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, [isAdding])

  useEffect(() => {
    if(challenge) {
      const files = isShowSolution ? JSON.parse(String(challenge?.codeSolution)) : JSON.parse(String(challenge?.codeTemplate));
      for (const fileKey in files) {
        addFile(fileKey, files[fileKey], true)
      }
    }
  }, [challenge])

  return (
    <div className="file-explorer-plus">
      <div className="file-explorer-header">
        <p className="file-explorer-title">File Explorer</p>
        <div className="file-explorer-buttons">
          <button className="file-explorer-button" onClick={() => handleAddNew('file')}>
            <IcNewFile />
          </button>
          <button className="file-explorer-button" onClick={() => handleAddNew('folder')}>
            <IcNewFolder />
          </button>
          <button className="file-explorer-button" onClick={handleDelete}>
            <IcTrashCan />
          </button>
        </div>
      </div>
      <div className="file-explorer-input-name">
        {isAdding &&
          <input type="text" ref={inputRef} onBlur={handleCancelAdd} onChange={(event) => setInputValue(event.target.value)} onKeyDown={(event) => handleKeyDown(event)} />
        }
      </div>
      <SandpackFileExplorer />
    </div>
  )
}
