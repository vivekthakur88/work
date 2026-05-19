"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { firstName, lastName, email, phone, message } = formData;

      const submitData = new FormData();
      submitData.append("access_key", "66c70e56-a50e-4a32-8eda-7ec0a5d5d586");
      submitData.append("subject", "New Contact Inquiry - Dentkraft Dental");
      submitData.append("first_name", firstName);
      submitData.append("last_name", lastName);
      submitData.append("email", email);
      submitData.append("phone", phone);
      submitData.append("message", message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Your message has been sent successfully. We will contact you shortly.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-blue-200 max-w-2xl mx-auto text-lg">
          Have a question or need to schedule an appointment? We're here to help.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              
              <div className="flex items-start">
                <div className="bg-blue-50 p-4 rounded-2xl mr-6">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Location</h3>
                  <p className="text-slate-600 leading-relaxed">
                    123 Luxury Dental Ave, Suite 100<br/>
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-4 rounded-2xl mr-6">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Phone & WhatsApp</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Main: +91 79774 33521<br/>
                    WhatsApp: +91 79774 33521
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-4 rounded-2xl mr-6">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Appointments: appointments@dentkraft.com<br/>
                    General: hello@dentkraft.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-4 rounded-2xl mr-6">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Clinic Hours</h3>
                  <div className="text-slate-600 space-y-1">
                    <p className="flex justify-between w-48"><span>Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span></p>
                    <p className="flex justify-between w-48"><span>Saturday:</span> <span>9:00 AM - 2:00 PM</span></p>
                    <p className="flex justify-between w-48"><span>Sunday:</span> <span className="text-red-500 font-medium">Closed</span></p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">First Name</label>
                  <Input 
                    required 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="h-12 rounded-xl bg-white" 
                    placeholder="John" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Last Name</label>
                  <Input 
                    required 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="h-12 rounded-xl bg-white" 
                    placeholder="Doe" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Email Address</label>
                <Input 
                  required 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 rounded-xl bg-white" 
                  placeholder="john@example.com" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Phone Number</label>
                <Input 
                  required 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 rounded-xl bg-white" 
                  placeholder="+91 79774 33521" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <Textarea 
                  required 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[150px] rounded-xl bg-white resize-none" 
                  placeholder="How can we help you?" 
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full h-14 rounded-full text-lg shadow-md hover:shadow-xl transition-all">
                {isSubmitting ? <><Loader2 className="mr-2 h-5 w-5 animate-spin"/> Processing...</> : "Send Message"}
              </Button>
            </form>
          </div>

        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] w-full bg-slate-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155705353594!2d-73.98808808459374!3d40.7571342793269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1629828551408!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy">
        </iframe>
      </section>
    </div>
  );
}
