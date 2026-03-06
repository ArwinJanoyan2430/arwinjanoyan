import { useEffect } from "react";

const BotpressChat = () => {
  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return;

    const existingScript = document.getElementById("bp-chat-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "bp-chat-script";
      script.src = "https://cdn.botpress.cloud/webchat/v3.6/inject.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.botpressWebChat?.init({
          botId: "91AH2TQB", // check this ID is correct
          host: "https://cdn.botpress.cloud",
          showConversationsButton: true,
          enableReset: true,
          enableResetNotification: true
        });
      };
    } else {
      window.botpressWebChat?.init({
        botId: "91AH2TQB",
        host: "https://cdn.botpress.cloud",
        showConversationsButton: true,
        enableReset: true,
        enableResetNotification: true
      });
    }

    return () => {
      // optional cleanup if you want to remove chat
      // document.getElementById("bp-chat-script")?.remove();
    };
  }, []);

  return null;
};

export default BotpressChat;