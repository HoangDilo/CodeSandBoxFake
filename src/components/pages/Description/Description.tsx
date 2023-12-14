import Post from "./Post/Post";

import IcDescription from "@/components/icons/IcDescription";
import IcIdea from "@/components/icons/IcIdea";

import "@/styles/pages/SandPackWidget/SandPackWidget.scss";

export default function Description() {
    return (
        <div className="description-area">
            <div className="description-header">
                <button className="desc-tabs">
                    <div className="desc-icons">
                        <IcDescription />
                    </div>
                    <span>Description</span>
                </button>
                <button className="desc-tabs">
                    <div className="desc-icons">
                        <IcIdea />
                    </div>
                    <span>Solution</span>
                </button>
            </div>
            <div className="desc-post-content-scroller">
                <Post />
            </div>
        </div>
    );
}
