"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  patientName: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  date: z.date({
    message: "Please select a date for your appointment.",
  }),
  service: z.string().min(1, "Please select a service."),
  notes: z.string().optional(),
});

export default function AppointmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientName: "",
      email: "",
      phone: "",
      service: "",
      notes: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const submitData = new FormData();
      submitData.append("access_key", "66c70e56-a50e-4a32-8eda-7ec0a5d5d586");
      submitData.append("subject", "New Appointment Request - Dentkraft Dental");
      submitData.append("first_name", values.patientName);
      submitData.append("email", values.email);
      submitData.append("phone", values.phone);
      submitData.append("appointment_date", format(values.date, "PPP"));
      submitData.append("appointment_time", "To be confirmed");
      submitData.append("message", `Service: ${values.service}${values.notes ? `\nNotes: ${values.notes}` : ""}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        toast.success("Your appointment request has been submitted successfully. We will contact you shortly.");
        form.reset();
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      toast.error("Failed to book appointment. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center py-20 px-4">
        <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full text-center border border-slate-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Sent!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for booking with Dentkraft. Our team will review your request and contact you shortly to confirm your exact time slot.
          </p>
          <Button onClick={() => setSuccess(false)} className="w-full rounded-full h-12">
            Book Another Appointment
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-[80vh] py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Book Your Visit</h1>
          <p className="text-lg text-slate-600">Schedule your consultation or treatment with our specialists.</p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="patientName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="h-12 rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" type="email" {...field} className="h-12 rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+91 79774 33521" {...field} className="h-12 rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Required</FormLabel>
                      <FormControl>
                        <select 
                          className="flex h-12 w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          {...field}
                        >
                          <option value="" disabled>Select a service</option>
                          <option value="General Checkup">General Checkup</option>
                          <option value="Teeth Whitening">Teeth Whitening</option>
                          <option value="Dental Implants">Dental Implants</option>
                          <option value="Invisalign">Invisalign</option>
                          <option value="Root Canal">Root Canal</option>
                          <option value="Other">Other / Not Sure</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Preferred Date</FormLabel>
                    <Popover>
                      <PopoverTrigger>
                        <FormControl>
                          <Button
                            type="button"
                            variant={"outline"}
                            className={cn(
                              "w-full h-12 pl-3 text-left font-normal rounded-xl",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() || date < new Date("1900-01-01")
                          }
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Notes</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please share any specific concerns or requirements..."
                        className="resize-none rounded-xl"
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isSubmitting} className="w-full h-14 rounded-full text-lg shadow-lg hover:shadow-xl transition-all">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Booking...
                  </>
                ) : (
                  "Confirm Appointment Request"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
