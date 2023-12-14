import { useEffect, useRef, useState } from "react"

import { Sandpack, useSandpack } from "@codesandbox/sandpack-react"

import { convertObjectToArray } from "@/utils/convertObjectToArray";
import { findDirectory } from "@/utils/findDirectory";

import { SandpackFileExplorer } from "@codesandbox/sandpack-react";
import IcNewFile from "../../icons/IcNewFile";
import IcNewFolder from "../../icons/IcNewFolder";

import '@/styles/shared/CustomFileExplorer/CustomFileExplorer.scss';

export default function CustomFileExplorer() {

  const { sandpack } = useSandpack();
  const { files, visibleFiles, addFile, activeFile, setActiveFile } = sandpack;

  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [filePath, setFilePath] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddNewFile = () => {
    setIsAdding(true);
  }

  const handleCancelAdd = () => {
    if (!inputValue) {
      setIsAdding(false)
    }
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      setFilePath(findDirectory(activeFile) + '/' + inputValue)
      setIsAdding(false)
    }
  }

  useEffect(() => {
    convertObjectToArray(files);
  }, [])

  useEffect(() => {
    addFile(filePath, '', true)
    visibleFiles.push(filePath)
  }, [filePath])

  useEffect(() => {
    console.log(sandpack);
    
    setActiveFile(filePath)
  }, [files])

  useEffect(() => {
    if(isAdding && inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, [isAdding])

  return (
    <div className="file-explorer-plus">
      <div className="file-explorer-header">
        <p className="file-explorer-title">File Explorer</p>
        <div className="file-explorer-buttons">
          <button className="file-explorer-button" onClick={handleAddNewFile}>
            <IcNewFile />
          </button>
          <button className="file-explorer-button" onClick={handleAddNewFile}>
            <IcNewFolder />
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
