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
        "template_knlovc1",
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

          form.reset();
        },
        (error) => {
          setStateMessage(error.text || "An error occurred, please try again.");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );
  };
  return (
    <form
      onSubmit={sendEmail}
      className="gap-5 text-red-600 flex flex-col items-center font-bold py-4 px-2 rounded-r border-red-600 border-2 border-solid w-3/4 sm:w-2/4"
    >
      <label htmlFor="Name">Name</label>
      <input
        type="text"
        name="Name"
        className="text-black font-normal w-full sm:w-2/4"
      />
      <label htmlFor="Email">Email</label>
      <input
        type="email"
        name="Email"
        className="text-black font-normal w-full sm:w-2/4"
      />
      <label htmlFor="Subject">Subject</label>
      <input
        type="text"
        name="Subject"
        className="text-black font-normal w-full sm:w-2/4"
      />
      <label htmlFor="Message">Message</label>
      <textarea
        name="Message"
        className="text-black font-normal w-full sm:w-2/4"
        required={true}
      />
      <input
        type="submit"
        value="Send"
        disabled={isSubmitting}
        className="p-4 rounded-xl border-red-600 border-2 border-solid hover:text-white w-full sm:w-32"
      />
      {stateMessage && <p>{stateMessage}</p>}
    </form>
  );
};
export default ContactForm;
