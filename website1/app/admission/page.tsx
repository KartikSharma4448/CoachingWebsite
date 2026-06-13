'use client';

import React, { useState } from 'react';
import { CheckCircle, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Admission() {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    currentClass: '',
    course: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        studentName: '',
        parentName: '',
        email: '',
        phone: '',
        currentClass: '',
        course: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container-max">
          <h1 className="text-5xl font-bold text-white mb-4">Admission & Queries</h1>
          <p className="text-white text-opacity-90 text-lg">
            Start your journey with Atharva Classes today
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-light">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left - Info Cards */}
            <div className="space-y-6">
              <div>
                <p className="text-secondary font-bold text-lg mb-2">GET IN TOUCH</p>
                <h2 className="text-3xl font-bold text-dark mb-8">Contact Information</h2>
              </div>

              {/* Contact Cards */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Call Us</h3>
                    <p className="text-gray-600 text-sm">09928939088</p>
                    <p className="text-gray-600 text-sm">Mon - Sat, 8AM - 6PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-orange-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Email Us</h3>
                    <p className="text-gray-600 text-sm">Call for admission details</p>
                    <p className="text-gray-600 text-sm">Quick response during working hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Visit Us</h3>
                    <p className="text-gray-600 text-sm">INDIRA GANDHI NAGAR SECTOR-8</p>
                    <p className="text-gray-600 text-sm">Ghati Karolan, Jaipur, Rajasthan 302017</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Working Hours</h3>
                    <p className="text-gray-600 text-sm">Monday - Saturday</p>
                    <p className="text-gray-600 text-sm">8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-dark mb-2">Admission Inquiry Form</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you shortly.
                </p>

                {submitted && (
                  <div className="mb-8 p-6 bg-green-50 border-2 border-green-500 rounded-xl flex items-start gap-4">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-green-700 mb-1">Thank You!</h3>
                      <p className="text-green-700 text-sm">
                        Your inquiry has been submitted successfully. We will contact you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-dark font-semibold mb-2">Student Name *</label>
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        placeholder="Enter student's full name"
                      />
                    </div>
                    <div>
                      <label className="block text-dark font-semibold mb-2">Parent / Guardian Name *</label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        placeholder="Enter parent or guardian name"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-dark font-semibold mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-dark font-semibold mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        placeholder="+91-XXXXXXXXXX"
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-dark font-semibold mb-2">Current Class *</label>
                      <select
                        name="currentClass"
                        value={formData.currentClass}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select Class</option>
                        <option value="6">Class 6</option>
                        <option value="7">Class 7</option>
                        <option value="8">Class 8</option>
                        <option value="9">Class 9</option>
                        <option value="10">Class 10</option>
                        <option value="11">Class 11</option>
                        <option value="12">Class 12</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-dark font-semibold mb-2">Interested Course *</label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select Course</option>
                        <option value="foundation">Foundation Program</option>
                        <option value="cbse">CBSE Coaching</option>
                        <option value="rbse">RBSE Coaching</option>
                        <option value="board">Board Exam Prep</option>
                        <option value="doubt">Doubt Clearing / Mock Tests</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-dark font-semibold mb-2">Message / Query</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your specific needs or questions..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-primary py-4 text-lg font-bold"
                  >
                    Submit Inquiry
                  </button>

                  <p className="text-center text-gray-600 text-sm">
                    We respect your privacy. Your information will be kept confidential.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-dark mb-16">Why Students Choose Atharva Classes</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: '1',
                title: 'Expert Faculty',
                description: 'Highly qualified teachers with 10+ years experience',
              },
              {
                number: '2',
                title: 'Proven Results',
                description: '98% success rate in board and competitive exams',
              },
              {
                number: '3',
                title: 'Small Batches',
                description: 'Limited students per batch for personalized attention',
              },
              {
                number: '4',
                title: 'Modern Facilities',
                description: 'State-of-the-art classrooms and digital learning',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl font-bold">{item.number}</span>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
