import emailjs from "@emailjs/browser";
import "../index.css";


function EmailModal({ onClose }) {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_e2nmypf",
      "template_eukgmuo",
      e.target,
      "Bqgik_6mGtN5uL5ks"
    )
    .then(() => {
      alert("Message sent successfully!");
      onClose(); // close modal after send
    })
    .catch(() => {
      alert("Failed to send message.");
    });
  };

  return (
    <div className="modal-overlay ">
      <div className="modal-card ">
        <h3 className="text-lg font-bold justify-center">Send me a message</h3>

        <form onSubmit={sendEmail}>
          <input className ="name text-xs p-1" type="text" name="user_name" placeholder="Your Name" required />
          <input className ="email text-xs p-1" type="email" name="user_email" placeholder="Your Email" required />
          <textarea className ="message text-xs p-1 " name="message" placeholder="Your Message" required />

          <div className="modal-buttons">
            <button className ="send-btn text-sm" type="submit">Send</button>
            <button className="cancel-btn text-sm" type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailModal;
