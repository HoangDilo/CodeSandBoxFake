import { useContext } from "react";
import { ChallengeData } from "../../SandPackWidget/SandPackWidget";

import '@/styles/pages/SandPackWidget/SandPackWidget.scss'

export default function Solution() {
  
  const {challenge, authorInfo} = useContext(ChallengeData)

  return (
    <div>

    </div>
  );
}
