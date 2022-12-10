import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const RoomPage = () => {
  const { RoomId } = useParams();
  const myMeeting = async (element) => {
    const appID = 1517449183;
    const serverSecret = "71a101abc1c58830edde1330897376ff";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      RoomId,
      Date.now().toString(),
      "Dipansh Bhai"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy link",
          url: `http://localhost:3000/Room/${RoomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
    });
  };
  return (
    <div>
      <div ref={myMeeting} />
    </div>
  );
};
export default RoomPage;
