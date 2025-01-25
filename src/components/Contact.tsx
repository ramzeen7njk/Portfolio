import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Calendar as CalendarIcon, Send, CheckCircle, XCircle, X, Github, Linkedin, Instagram } from 'lucide-react';
import Calendar from 'react-calendar';
import type { Value } from 'react-calendar/dist/cjs/shared/types';
import 'react-calendar/dist/Calendar.css';
import emailjs from '@emailjs/browser';

const Notification = ({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center gap-3 ${
      type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`}
  >
    {type === 'success' ? (
      <CheckCircle className="w-5 h-5 text-white" />
    ) : (
      <XCircle className="w-5 h-5 text-white" />
    )}
    <p className="text-white">{message}</p>
  </motion.div>
);

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const [selectedDateTag, setSelectedDateTag] = useState<Date | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error';
  }>({ show: false, message: '', type: 'success' });

  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 3000); // Hide notification after 3 seconds
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    try {
      // Create message with selected date if date tag exists
      const dateMessage = selectedDateTag 
        ? `\n\nPreferred Meeting Date: ${selectedDateTag.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}`
        : '';

      const templateParams = {
        from_name: formData.name,
        to_name: 'Abdul Ramzeen',
        from_email: formData.email,
        to_email: 'abdulramzeen6@gmail.com',
        message: `${formData.message}${dateMessage}`,
        reply_to: formData.email,
      };

      const result = await emailjs.send(
        'service_202020',
        'template_qii64dk',
        templateParams,
        '00UUB451EQRZC8l1w'
      );

      if (result.text === 'OK') {
        setFormData({ name: '', email: '', message: '' });
        setShowCalendar(false); // Reset calendar visibility
        setSelectedDate(new Date()); // Reset selected date
        setSelectedDateTag(null); // Clear the date tag
        showNotification('Message sent successfully! I will get back to you soon.', 'success');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      showNotification('Failed to send message. Please try again later.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (value: Value) => {
    setSelectedDate(value);
    if (value instanceof Date) {
      setSelectedDateTag(value);
      setShowCalendar(false); // Hide calendar after selection
    }
  };

  const removeDateTag = () => {
    setSelectedDateTag(null);
  };

  return (
    <section id="contact" className="py-20">
      <AnimatePresence>
        {notification.show && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(prev => ({ ...prev, show: false }))}
          />
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-400">Let's discuss your next project</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:abdulramzeen6@gmail.com" className="text-gray-400 hover:text-primary">
                    abdulramzeen6@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a 
                    href="tel:+916385442184" 
                    className="text-gray-400 hover:text-primary"
                  >
                    +91 6385442184
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">GitHub</p>
                  <a 
                    href="https://github.com/ramzeen7njk" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary"
                  >
                    @ramzeen7njk
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/abdul-ramzeen-1b286624a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary"
                  >
                    Abdul Ramzeen
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Instagram</p>
                  <a 
                    href="https://www.instagram.com/ramzeen__njk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary"
                  >
                    @ramzeen__njk
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <CalendarIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Schedule a Meeting</p>
                  <button
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="text-gray-400 hover:text-primary"
                  >
                    Choose a date and time
                  </button>
                </div>
              </div>
            </div>

            {showCalendar && (
              <div className="mt-6">
                <div className="calendar-container bg-surface rounded-lg p-4">
                  <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    className="!bg-surface !text-text border-none"
                    tileClassName="!text-text hover:!bg-primary/20"
                    prevLabel={<span className="text-primary">‹</span>}
                    nextLabel={<span className="text-primary">›</span>}
                    navigationLabel={({ date }) => (
                      <span className="text-text">
                        {date.toLocaleString('default', { month: 'long', year: 'numeric' })}
                      </span>
                    )}
                  />
                </div>
                {selectedDate && (
                  <p className="mt-4 text-center text-gray-400">
                    Selected date: {selectedDate.toLocaleDateString()}
                  </p>
                )}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-surface rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-surface rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                {selectedDateTag && (
                  <div className="mb-2 inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                    <span>
                      Meeting on: {selectedDateTag.toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    <button
                      type="button"
                      onClick={removeDateTag}
                      className="hover:bg-primary/30 rounded-full p-1 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                )}
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-surface rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary hover:bg-secondary text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .react-calendar {
          width: 100%;
          background: transparent;
          border: 1px solid #4F46E5;
          border-radius: 0.5rem;
          font-family: inherit;
        }
        .react-calendar__tile {
          color: #F8FAFC;
          padding: 0.75rem;
        }
        .react-calendar__tile:enabled:hover,
        .react-calendar__tile:enabled:focus {
          background-color: rgba(99, 102, 241, 0.2);
          color: #F8FAFC;
        }
        .react-calendar__tile--active {
          background-color: #6366F1 !important;
          color: white !important;
        }
        .react-calendar__tile--now {
          background-color: rgba(99, 102, 241, 0.1);
        }
        .react-calendar__navigation button {
          color: #F8FAFC;
        }
        .react-calendar__navigation button:enabled:hover,
        .react-calendar__navigation button:enabled:focus {
          background-color: rgba(99, 102, 241, 0.2);
        }
        .react-calendar__month-view__weekdays {
          color: #6366F1;
        }
        .react-calendar__month-view__days__day--weekend {
          color: #EC4899;
        }
        .react-calendar__month-view__days__day--neighboringMonth {
          color: #64748B;
        }
      `}</style>
    </section>
  );
};

export default Contact;