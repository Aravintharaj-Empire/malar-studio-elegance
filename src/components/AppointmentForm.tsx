import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(15),
  service: z.string().min(1, "Please select a service"),
  date: z.date({
    required_error: "Please select an appointment date",
  }),
});

type FormData = z.infer<typeof formSchema>;

const AppointmentForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
    },
  });
  

  const onSubmit = (data: FormData) => {
  const templateParams = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    service: data.service,
    date: data.date.toDateString(),
  };

  // 1. EmailJS Notification
  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      console.log("Email sent");
    })
    .catch((err) => console.error(err));
    
    //2. Google Sheets Logging
//     fetch("https://script.google.com/macros/s/AKfycbwb5fDzYNySws2rZ-TdMbhvizLT18sV8yngC2RVIcUq1OFc37UgOSjEeyxwsKTJ4-Q9/exec", {
//   method: "POST",
//   mode: "cors",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(templateParams)
// })
// .then(res => res.json())
// .then(data => console.log("Sheet updated:", data))
// .catch(err => console.error("Sheet error:", err));

  toast.success("Appointment request submitted!");
  form.reset();
};
  return (
    <section id="booking" className="py-24 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-rich-brown mb-4">
            Book an Appointment
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            Reserve your session and let us bring your beauty vision to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-8 md:p-12 shadow-elegant"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-rich-brown font-medium">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        {...field}
                        className="rounded-xl border-border focus:border-persimmon focus:ring-persimmon"
                      />
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
                    <FormLabel className="text-rich-brown font-medium">Email ID</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="user@gmail.com"
                        {...field}
                        className="rounded-xl border-border focus:border-persimmon focus:ring-persimmon"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-rich-brown font-medium">Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+91 XXXXX-XXXXX"
                        {...field}
                        className="rounded-xl border-border focus:border-persimmon focus:ring-persimmon"
                      />
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
                    <FormLabel className="text-rich-brown font-medium">Service Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="rounded-xl border-border focus:border-persimmon focus:ring-persimmon">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="bridal">Bridal Makeup</SelectItem>
                        <SelectItem value="semi-bridal">Semi Bridal</SelectItem>
                        <SelectItem value="party-makeup">Party Makeup</SelectItem>
                        <SelectItem value="photoshoots">Photoshoots</SelectItem>
                        <SelectItem value="events">Fashion Events</SelectItem>
                        <SelectItem value="training">Training Session</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-rich-brown font-medium">Appointment Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "rounded-xl border-border hover:border-persimmon pl-3 text-left font-normal",
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
                      <PopoverContent className="w-auto p-0 rounded-xl" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date(new Date().setHours(0, 0, 0, 0))
                          }
                          initialFocus
                          className="rounded-xl pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-persimmon hover:bg-persimmon/90 text-vanilla font-medium py-6 rounded-xl shadow-elegant hover:shadow-hover transition-all duration-300 text-lg"
              >
                Submit Appointment Request
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentForm;
