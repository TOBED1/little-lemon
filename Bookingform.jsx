import { useState } from "react";
import Confirmation from "./confirmation"; // ✅ Add this import

export default function Bookingform() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [showLiveRegion, setShowLiveRegion] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false); // ✅ New state

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "Name is required.";
    if (!formData.date) errs.date = "Date is required.";
    if (!formData.time) errs.time = "Time is required.";
    if (!formData.guests || formData.guests <= 0)
      errs.guests = "Enter valid number of guests.";
    if (!formData.occasion) errs.occasion = "Select an occasion.";
    return errs;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setShowLiveRegion(true);
      setIsConfirmed(true); // ✅ Trigger confirmation view
    } else {
      setErrors(errs);
      setShowLiveRegion(false);
    }
  };

  // ✅ Show confirmation page after successful booking
  if (isConfirmed) {
    return <Confirmation name={formData.name} />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="booking-form-title"
      className="space-y-6 p-6 bg-yellow-50 shadow-lg rounded-lg w-full max-w-xl mx-auto sm:p-8"
    >
      <h3 id="booking-form-title" className="text-2xl font-bold mb-2">
        Book a Table
      </h3>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block font-medium">
          Name <span className="text-red-600">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors.name ? "true" : "false"}
          className="w-full border p-2 rounded mt-1"
        />
        {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
      </div>

      {/* Date */}
      <div>
        <label htmlFor="date" className="block font-medium">
          Date <span className="text-red-600">*</span>
        </label>
        <input
          id="date"
          name="date"
          type="date"
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors.date ? "true" : "false"}
          className="w-full border p-2 rounded mt-1"
        />
        {errors.date && <p className="text-red-600 text-sm">{errors.date}</p>}
      </div>

      {/* Time */}
      <div>
        <label htmlFor="time" className="block font-medium">
          Time <span className="text-red-600">*</span>
        </label>
        <input
          id="time"
          name="time"
          type="time"
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors.time ? "true" : "false"}
          className="w-full border p-2 rounded mt-1"
        />
        {errors.time && <p className="text-red-600 text-sm">{errors.time}</p>}
      </div>

      {/* Guests */}
      <div>
        <label htmlFor="guests" className="block font-medium">
          Number of Guests <span className="text-red-600">*</span>
        </label>
        <input
          id="guests"
          name="guests"
          type="number"
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors.guests ? "true" : "false"}
          className="w-full border p-2 rounded mt-1"
        />
        {errors.guests && (
          <p className="text-red-600 text-sm">{errors.guests}</p>
        )}
      </div>

      {/* Occasion */}
      <div>
        <label htmlFor="occasion" className="block font-medium">
          Occasion <span className="text-red-600">*</span>
        </label>
        <select
          id="occasion"
          name="occasion"
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors.occasion ? "true" : "false"}
          className="w-full border p-2 rounded mt-1"
        >
          <option value="">-- Select --</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {errors.occasion && (
          <p className="text-red-600 text-sm">{errors.occasion}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Submit
      </button>

      {/* Accessible live regions */}
      {submitted && (
        <p
          className="text-green-700 mt-4 font-medium"
          role="status"
          aria-live="polite"
        >
          Booking successful! We shall contact you shortly xoxo.
        </p>
      )}

      {showLiveRegion && (
        <div
          className="sr-only"
          role="status"
          aria-live="assertive"
          aria-atomic="true"
        >
          Booking submitted successfully.
        </div>
      )}
    </form>
  );
}
