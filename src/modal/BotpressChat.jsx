import { useEffect } from "react";

const BotpressChat = () => {
  useEffect(() => {
    // 1. Create a function to load a script
    const loadScript = (src, defer = false) =>
      new Promise((resolve) => {
        const s = document.createElement("script");
        s.src = src;
        s.async = !defer;
        if (defer) s.defer = true;
        s.onload = resolve;
        document.body.appendChild(s);
      });

    // 2. Load scripts sequentially
    (async () => {
      await loadScript("https://cdn.botpress.cloud/webchat/v3.6/inject.js");
      await loadScript(
        "https://files.bpcontent.cloud/2026/03/05/16/20260305163522-91AH2TQB.js",
        true
      );
    })();

    // 3. Cleanup
    return () => {
      const chatWidget = document.querySelector("iframe#bp-web-widget");
      if (chatWidget) chatWidget.remove();
    };
  }, []);

  return null;
};

export default BotpressChat;