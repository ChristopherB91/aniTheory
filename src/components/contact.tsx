import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    emailjs
      .sendForm(
        "service_myd2gev",
        "template_so5nw5o",
        form,
        "user_NPqoDtEviZiRb1SzduPZ5"
      )
      .then(
        (result) => {
          setStateMessage("Message sent successfully");
          console.log(result);
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          setStateMessage(error);
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );

    // Clears the form after sending the email
    form.reset();
  };
  return (
    <form
      onSubmit={sendEmail}
      className="gap-5 text-red-600 flex flex-col items-center font-bold rounded-xl border-red-600 border-2 border-solid w-2/4"
    >
      <label>Name</label>
      <input type="text" name="user_name" className="text-black font-normal" />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        className="text-black font-normal"
      />
      <label>Message</label>
      <textarea name="message" className="text-black font-normal" />
      <input
        type="submit"
        value="Send"
        disabled={isSubmitting}
        className="p-4 rounded-xl border-red-600 border-2 border-solid"
      />
      {stateMessage && <p>{stateMessage}</p>}
    </form>
  );
};
export default ContactForm;
