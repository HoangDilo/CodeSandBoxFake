import { useState } from "react";

import Post from "./Post/Post";
import Solution from "./Solution/Solution";

import IcDescription from "@/components/icons/IcDescription";
import IcIdea from "@/components/icons/IcIdea";
import IcDescriptionDisable from "@/components/icons/IcDescriptionDisable";
import IcIdeaDisable from "@/components/icons/IcIdeaDisable";

import "@/styles/pages/SandPackWidget/SandPackWidget.scss";

export default function Description() {

    const [isShowSolution, setIsShowSolution] = useState(false);

    return (
        <div className="description-area">
            <div className="description-header">
                <button className="desc-tabs" onClick={() => setIsShowSolution(false)}>
                    <div className="desc-icons">
                        {!isShowSolution ? <IcDescription /> : <IcDescriptionDisable />}
                    </div>
                    <span className={isShowSolution ? 'disabled-tab' : ''}>Description</span>
                </button>
                <button className="desc-tabs" onClick={() => setIsShowSolution(true)}>
                    <div className="desc-icons">
                        {isShowSolution ? <IcIdea /> : <IcIdeaDisable />}
                    </div>
                    <span className={!isShowSolution ? 'disabled-tab' : ''}>Solution</span>
                </button>
            </div>
            <div className="desc-post-content-scroller">
                {!isShowSolution && <Post />}
                {isShowSolution && <Solution />}
            </div>
        </div>
    );
}
