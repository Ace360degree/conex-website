import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import { Seo } from '../components/common/Seo';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  file: File | null;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    file: null,
  });

  const [fileName, setFileName] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [successMsg, setSuccessMsg] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg('');
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMsg('');
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      const maxSizeBytes = 10 * 1024 * 1024; // 10MB limit

      if (selectedFile.size > maxSizeBytes) {
        setErrorMsg('The selected file exceeds the maximum allowed size of 10MB.');
        e.target.value = '';
        setFileName('');
        setFormData((prev) => ({ ...prev, file: null }));
        return;
      }

      setFileName(selectedFile.name);
      setFormData((prev) => ({ ...prev, file: selectedFile }));
    } else {
      setFileName('');
      setFormData((prev) => ({ ...prev, file: null }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    // Client-side validations
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter your phone number with country code.');
      return;
    }
    if (!formData.company.trim()) {
      setErrorMsg('Please enter your company name.');
      return;
    }
    if (!formData.subject.trim()) {
      setErrorMsg('Please enter a subject or project name.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please add your project message or requirements.');
      return;
    }

    setIsSubmitting(true);

    // Simulate client-side submission (Laravel API integration in Phase 4)
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMsg(
        'Thank you! Your query has been received. Our engineering team will contact you shortly.'
      );
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        file: null,
      });
      setFileName('');
    }, 700);
  };

  return (
    <>
      <Seo
        title="Contact Us | Conex Engineering Steel Detailing"
        description="Whether you have a steel detailing requirement, a project in early design, or need connection design and checking support — Conex Engineering is here to assist. India and USA offices."
        canonicalUrl="https://conexengineering.com/contact"
      />

      {/* Hero Section */}
      <section className="bg-white text-gray-900">
        <div className="mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="md:w-1/2 order-1 md:order-2">
            <img
              src="/assets/images/contact/hand-shake.png"
              alt="Conex Engineering Team"
              className="w-full h-auto shadow-md object-cover"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
          {/* Text Content */}
          <div
            className="md:w-1/2 md:pl-16 pl-5 py-6 md:py-14 order-2 md:order-1"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight">
              Let’s Connect – We’re Ready to Support Your Next Project
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed text-base">
              Whether you have a steel detailing requirement, a project in
              early design, or need connection design and checking support —
              Conex Engineering is here to assist.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed text-base">
              Get in touch with our team of experts to discuss your project
              scope, request a quote, or simply explore how we can
              collaborate.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-[var(--color-dark)] text-white px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
          {/* Left: Contact Form */}
          <div className="w-full md:w-1/2 bg-white rounded-xl p-6 shadow text-[var(--color-dark)]">
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              {successMsg && (
                <div className="bg-green-100 text-green-800 p-3 rounded text-sm font-medium">
                  {successMsg}
                </div>
              )}
              {errorMsg && (
                <div className="bg-red-100 text-red-800 p-3 rounded text-sm font-medium">
                  {errorMsg}
                </div>
              )}

              {/* Name */}
              <div>
                <label className="block font-semibold text-sm mb-1 text-gray-800">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-dark)] text-white placeholder-gray-400"
                />
              </div>

              {/* Email + Phone */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label className="block font-semibold text-sm mb-1 text-gray-800">
                    Email ID:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email Id"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-dark)] text-white placeholder-gray-400"
                  />
                </div>
                <div className="w-full">
                  <label className="block font-semibold text-sm mb-1 text-gray-800">
                    Phone No with Country Code:
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone No"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-dark)] text-white placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="block font-semibold text-sm mb-1 text-gray-800">
                  Company Name:
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your Company Name"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-dark)] text-white placeholder-gray-400"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block font-semibold text-sm mb-1 text-gray-800">
                  Subject / Project Name:
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Add Subject / Project Name"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-dark)] text-white placeholder-gray-400"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-semibold text-sm mb-1 text-gray-800">
                  Message:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Add Your Message"
                  rows={4}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-dark)] text-white placeholder-gray-400"
                ></textarea>
              </div>

              {/* File Upload */}
              <div>
                <label className="block font-semibold text-sm mb-1 text-gray-800">
                  Upload File (Optional, max 10MB):
                </label>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <input
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    className="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[var(--color-primary)] file:text-[var(--color-dark)] hover:file:bg-yellow-400 bg-[var(--color-dark)] rounded-md p-1 cursor-pointer"
                    id="file-upload-input"
                  />
                </div>
                {fileName && (
                  <span
                    id="file-upload-name"
                    className="block mt-1 text-xs text-green-700 font-medium"
                  >
                    Selected: {fileName}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full bg-[var(--color-primary)] hover:bg-yellow-400 text-[var(--color-dark)] font-bold py-2.5 rounded-md text-sm transition cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Apply Now!'}
              </button>
            </form>
          </div>

          {/* Right: Info Text */}
          <div
            className="w-full md:w-1/2 space-y-4"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              Send us your query or upload your RFQ:
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Whether you have a steel detailing requirement, a project in
              early design, or need connection design and checking support —
              Conex Engineering is here to assist.
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Get in touch with our team of experts to discuss your project
              scope, request a quote, or simply explore how we can
              collaborate.
            </p>
          </div>
        </div>
      </section>

      {/* Offices & Google Maps Section */}
      <section className="w-full px-6 py-12 bg-white text-[var(--color-dark)]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* India Office */}
          <div
            className="flex flex-col md:flex-row w-full shadow-lg rounded-xl overflow-hidden"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            {/* Office Info */}
            <div className="w-full md:w-1/2 bg-[var(--color-primary)] p-8 space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-black">
                India Office<br />(Head Office)
              </h3>
              <p className="text-lg font-semibold text-black">
                Conex Engineering (India) <br />
                [Mon–Sat: 10:00 AM – 7:00 PM IST]
              </p>
              <p className="text-base text-gray-900 leading-relaxed">
                12, IITC, Virvani Industrial Estate, <br />
                Goregaon East, Mumbai - 400063
              </p>
              <p className="text-base flex items-center gap-2 text-black font-medium">
                <i className="fa-solid fa-phone"></i> +91 97696 97434
              </p>
              <p className="text-base flex items-center gap-2 text-black font-medium">
                <i className="fa-brands fa-whatsapp text-lg"></i> +91 98333 79941
              </p>
              <p className="text-base flex items-center gap-2 text-black font-medium">
                <i className="fa-solid fa-envelope"></i> info@conexengineering.com
              </p>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full md:w-1/2 min-h-[300px] md:h-auto">
              <iframe
                title="Conex Engineering India Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.159502440223!2d72.855188!3d19.141383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b72f0e24eb8b%3A0x1234567890abcdef!2sVishal%20Industrial%20Estate%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1717680000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* US Office */}
          <div
            className="flex flex-col md:flex-row w-full shadow-lg rounded-xl overflow-hidden"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            {/* Office Info */}
            <div className="w-full md:w-1/2 bg-[var(--color-primary)] p-8 space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-black">
                U.S. Representative Office
              </h3>
              <p className="text-lg font-semibold text-black">
                Conex Engineering (USA)
              </p>
              <p className="text-base text-gray-900 leading-relaxed">
                1541 W 80th Street, <br />
                Chicago, IL 60620, USA
              </p>
              <p className="text-base flex items-center gap-2 text-black font-medium">
                <i className="fa-solid fa-phone"></i> +91 98333 79941
              </p>
              <p className="text-base flex items-center gap-2 text-black font-medium">
                <i className="fa-brands fa-whatsapp text-lg"></i> +91 98333 79941
              </p>
              <p className="text-base flex items-center gap-2 text-black font-medium">
                <i className="fa-solid fa-envelope"></i> info@conexengineering.com
              </p>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full md:w-1/2 min-h-[300px] md:h-auto">
              <iframe
                title="Conex Engineering US Representative Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28047.27368280495!2d-87.6920052346694!3d41.751228821318975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2f9c9be3d4f1%3A0xdc7a88f9be3f1a93!2s1541%20W%2080th%20St%2C%20Chicago%2C%20IL%2060620%2C%20USA!5e1!3m2!1sen!2sin!4v1754302885602!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
