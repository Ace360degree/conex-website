import React, { useState } from 'react';

interface FormData {
  name: string;
  mobile: string;
  email: string;
  service: string;
  message: string;
}

export const FooterContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/footer-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || 'Failed to submit form.');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        mobile: '',
        email: '',
        service: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Something went wrong';
      setSubmitted(false);
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {submitted && (
        <div className="mb-4 p-3 bg-green-100 border border-green-300 text-green-800 text-sm rounded-lg">
          Thank you for reaching out! We will get back to you shortly.
        </div>
      )}

      {/* Name and Mobile */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1 text-[var(--color-dark)]">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border border-[var(--color-dark)] text-[var(--color-white)] px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-dark)]"
            required
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1 text-[var(--color-dark)]">
            Mobile No.:
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Your Mobile No."
            className="w-full border border-[var(--color-dark)] text-[var(--color-white)] px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-dark)]"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-[var(--color-dark)]">
          Email ID:
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email ID"
          className="w-full border border-[var(--color-dark)] text-[var(--color-white)] px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-dark)]"
          required
        />
      </div>

      {/* Services Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-[var(--color-dark)]">
          Services:
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full border border-[var(--color-dark)] text-[var(--color-white)] px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-dark)]"
        >
          <option value="">Select The Services</option>
          <option value="Structural Steel Detailing">Structural Steel Detailing</option>
          <option value="Checking Service">Checking Service</option>
          <option value="Building Information Modeling">Building Information Modeling</option>
          <option value="Connection Design">Connection Design</option>
          <option value="Service Flow">Service Flow</option>
        </select>
      </div>

      {/* Message */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-[var(--color-dark)]">
          Message:
        </label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message..."
          className="w-full border border-[var(--color-dark)] text-[var(--color-white)] px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-dark)]"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto text-center bg-[var(--color-primary)] text-[var(--color-black)] font-bold py-2.5 px-8 rounded-xl hover:bg-yellow-300 transition cursor-pointer disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};
