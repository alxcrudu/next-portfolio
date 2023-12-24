import { useContext, useRef, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import ReCAPTCHA from "react-google-recaptcha";

import { useSnackbar } from "notistack";

// import ButtonPrimary from "../ButtonPrimary";
import Loader from "../Loader";

import { motion } from "framer-motion";

import axios from "axios";

import { cn } from "../../helpers/cn";

import * as styles from "./styles";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeProvider";
import ButtonAnimation from "../ButtonAnimation";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email("Invalid email"),
  subject: yup.string().required("Subject is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(20, "Please input a minimum of 20 characters"),
});

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const recaptchaRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await recaptchaRef.current?.executeAsync();
    } catch (error) {
      console.error(error.message);
      enqueueSnackbar("Oops! Ceva a decurs gresit.", {
        variant: "warning",
        style: { maxWidth: 400 },
      });
      setIsLoading(false);
      return reset();
    }
    try {
      await axios.post("/api/contact", data);
      enqueueSnackbar("Mesaj trimis!", {
        variant: "success",
        style: { maxWidth: 400 },
      });
      reset();
    } catch (error) {
      enqueueSnackbar("submit_error", {
        variant: "warning",
        style: { maxWidth: 400 },
      });
    }

    setIsLoading(false);
  };

  const onReCAPTCHAChange = (captchaCode) => {
    if (!captchaCode) {
      return enqueueSnackbar(t.captcha_error, {
        variant: "warning",
        style: { maxWidth: 400 },
      });
    }
  };

  return (
    <section
      id={"contact"}
      data-section={"contact"}
      className="container my-[5em]"
    >
      <div className="projects-container">
        <div className="projects-left">
          <motion.p
            className="text | hidden md:block font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {t.contact}
          </motion.p>
        </div>
        <div className="projects-right | md:ml-2">
          <div className="flex items-center mb-24">
            <p className="text | md:hidden font-light mr-6">{t.abt}</p>
            <motion.div
              className="division-line | w-full opacity-40 md:mt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            ></motion.div>
          </div>
          <div className={styles.contactGrid}>
            <motion.div
              className="text font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h1 className="heading | text-4xl">{t.contact_me}</h1>
              <p className="text | max-w-[70ch] my-4 font-light">
                {t.contact_text}
              </p>
              <div className="flex flex-col gap-4 mt-9">
                <p className="text | font-light">
                  {t.email}:{" "}
                  <a
                    className={"clickable font-medium"}
                    href="mailto:alexcruducode@gmail.com"
                  >
                    alexcruducode@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              className="container | grid gap-2"
            >
              <ReCAPTCHA
                ref={recaptchaRef}
                onChange={onReCAPTCHAChange}
                onErrored={() => {
                  enqueueSnackbar("captcha_failed_to_initialize", {
                    variant: "warning",
                    style: { maxWidth: 400 },
                  });
                }}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                size="invisible"
              />
              <div className={cn(styles.formElement, "text")}>
                <div className={styles.label}>
                  <label htmlFor="name">{t.name} *</label>
                  {errors.name && (
                    <span className={styles.errorMessage}>
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <input
                  className={cn(styles.textField, "formField")}
                  type="text"
                  {...register("name")}
                />
              </div>

              <div className={cn(styles.formElement, "text")}>
                <div className={styles.label}>
                  <label htmlFor="email">{t.email} *</label>
                  {errors.email && (
                    <span className={styles.errorMessage}>
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <input
                  className={cn(styles.textField, "formField")}
                  type="text"
                  {...register("email")}
                />
              </div>

              <div className={cn(styles.formElement, "text")}>
                <div className={styles.label}>
                  <label htmlFor="subject">{t.subject} *</label>
                  {errors.subject && (
                    <span className={styles.errorMessage}>
                      {errors.subject.message}
                    </span>
                  )}
                </div>
                <input
                  className={cn(styles.textField, "formField")}
                  type="text"
                  {...register("subject")}
                />
              </div>

              <div className={cn(styles.formElement, "text")}>
                <div className={styles.label}>
                  <label htmlFor="message">{t.message} *</label>
                  {errors.message && (
                    <span className={styles.errorMessage}>
                      {errors.message.message}
                    </span>
                  )}
                </div>
                <textarea
                  className={cn(styles.textArea, "formField")}
                  {...register("message")}
                />
              </div>

              <div className={styles.captchaText}>
                <small>
                  {t.privacy_1}{" "}
                  <a
                    className={cn("hoverable", styles.captchaLink)}
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.privacy_policy}{" "}
                  </a>
                  {t.privacy_2}{" "}
                  <a
                    className={cn("hoverable", styles.captchaLink)}
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.terms_of_service}{" "}
                  </a>
                  {t.privacy_3}
                </small>
              </div>
              <ButtonAnimation
                onClick={handleSubmit(onSubmit)}
                backgroundColor={theme === "dark" ? "#7c7c7c" : "#171717"}
              >
                {isLoading ? <Loader /> : <p>{t.submit}</p>}
              </ButtonAnimation>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
