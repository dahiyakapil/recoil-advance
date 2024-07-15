import { useState } from "react";
import { RecoilRoot } from "recoil";

import "./App.css";
import { jobsAtom, messagingAtom, networkAtom, totalNotificationSelector} from "./atom";
import { useRecoilValue } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(networkAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  const finalValue =
    networkNotificationCount >= 100 ? "99+" : networkNotificationCount;

  return (
    <>
      <button>Home</button>

      <button>My network {finalValue}</button>
      <button>Jobs {jobsAtomCount}</button>
      <button>Messaging {messagingAtomCount}</button>
      <button>Notification {notificationAtomCount}</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
