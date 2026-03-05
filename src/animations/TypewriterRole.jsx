import { useState, useEffect } from "react";

function TypewriterRole() {
  const roles = ["Web Developer", "Data Analyst"];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 70 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
      } else {
        setText(currentRole.substring(0, text.length + 1));
      }

      // When finished typing
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      // When finished deleting
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }

    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <>
      <span>{text}</span>
      <span className="border-r-2 border-black dark:border-white animate-pulse"></span>
    </>
  );
}

export default TypewriterRole;