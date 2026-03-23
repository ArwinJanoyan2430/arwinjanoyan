import { useEffect } from "react";

const BotpressChat = () => {
  useEffect(() => {
    // Ensure running in browser
    if (typeof window === "undefined") return;

    const botId = "91AH2TQB"; // your bot ID
    const host = "https://cdn.botpress.cloud";

    // Check if the script already exists
    const existingScript = document.getElementById("bp-chat-script");

    const initChat = () => {
      window.botpressWebChat?.init({
        botId,
        host,
        showConversationsButton: true,
        enableReset: true,
        enableResetNotification: true,
      });
    };

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "bp-chat-script";
      script.src = `${host}/webchat/v3.6/inject.js`;
      script.async = true;
      script.onload = initChat;
      document.body.appendChild(script);
    } else {
      initChat();
    }


  }, []);

  return null;
};

export default BotpressChat;