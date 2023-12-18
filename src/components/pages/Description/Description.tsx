import { useContext, useEffect, useState } from "react";

import IcDescription from "@/components/icons/IcDescription";
import IcIdea from "@/components/icons/IcIdea";
import IcDescriptionDisable from "@/components/icons/IcDescriptionDisable";
import IcIdeaDisable from "@/components/icons/IcIdeaDisable";
import { ChallengeData } from "../SandPackWidget/SandPackWidget";

import "@/styles/pages/SandPackWidget/SandPackWidget.scss";

export default function Description() {

    const { challenge, authorInfo, isShowSolution, setIsShowSolution } = useContext(ChallengeData)

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
            <div className="desc-scroller">
                <div className='desc-container'>
                    <div className='text-6'>
                        {String(challenge?.title)}
                    </div>
                    <div className='desc-info color-4'>
                        <div className='author-info-container'>
                            <img src={String(authorInfo?.avatarUrl)} className='author-avt' />
                            <div className='author-info'>
                                <span>{String(authorInfo?.nickname)}</span>
                                <span>{String(authorInfo?.email)}</span>
                            </div>
                        </div>
                        <div className=''>
                            <span>Level: </span>
                            {String(challenge?.level)}
                        </div>
                        <div className=''>
                            <span>Duration: </span>
                            {String(challenge?.spendTime)}
                        </div>
                        <div>
                            <span>Completed: </span>
                            {String(challenge?.userCompleted)}
                        </div>
                    </div>
                    <div className='color-2'>
                        {isShowSolution ? String(challenge?.description) : String(challenge?.solutionDescription)}
                    </div>
                </div>
            </div>
        </div>
    );
}
