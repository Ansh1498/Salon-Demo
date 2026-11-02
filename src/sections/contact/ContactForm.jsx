import { useState } from "react";
import Button from "../../components/ui/Button";
import { services } from "../../data/services";
import { siteInfo } from "../../data/siteInfo";

const inputClass =
  "min-h-11 w-full rounded-xl border border-tan/60 bg-brown px-4 py-3 text-cream placeholder:text-cream/40 focus:border-sand focus:outline-none [color-scheme:dark]";

const emptyForm = { name: "", phone: "", service: "", date: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) {
    errors.phone = "Please enter a valid phone number.";
  }
  return errors;
}

function Field({ id, label, error, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm text-cream/85">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-[#F2B8A0]">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // TODO: yahan form ka data kahin bhejna hai (WhatsApp / email / Formspree)
    const message = [
      "Hello Dario Salon! I would like to book an appointment.",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      values.service && `Service: ${values.service}`,
      values.date && `Preferred date: ${values.date}`,
      values.message && `Message: ${values.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener",
    );

    setSent(true);
    setValues(emptyForm);
  };

  if (sent) {
    return (
      <div className="rounded-3xl bg-surface p-8 md:p-10" role="status">
        <h2 className="mb-3 font-serif text-4xl">Almost done!</h2>
        <p className="mb-8 font-light text-cream/85">
          WhatsApp should have opened with your details. Please press Send there
          to confirm your request.
        </p>
        <Button type="button" onClick={() => setSent(false)}>
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-3xl bg-surface p-8 md:p-10"
    >
      <Field id="name" label="Name" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          className={inputClass}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
      </Field>

      <Field id="phone" label="Phone" error={errors.phone}>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          className={inputClass}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
      </Field>

      <Field id="service" label="Service">
        <select
          id="service"
          name="service"
          value={values.service}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </Field>

      <Field id="date" label="Preferred date">
        <input
          id="date"
          name="date"
          type="date"
          value={values.date}
          onChange={handleChange}
          min={new Date().toISOString().split("T")[0]}
          className={inputClass}
        />
      </Field>

      <Field id="message" label="Message">
        <textarea
          id="message"
          name="message"
          rows="4"
          value={values.message}
          onChange={handleChange}
          className={inputClass}
        />
      </Field>

      <Button type="submit" className="cursor-pointer self-start">
        Request appointment
      </Button>
    </form>
  );
}
