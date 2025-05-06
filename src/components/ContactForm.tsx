
import React, { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const formSchema = z.object({
  name: z.string().min(2, { message: "Numele trebuie să aibă cel puțin 2 caractere" }),
  email: z.string().email({ message: "Adresă de email invalidă" }),
  message: z.string().min(10, { message: "Mesajul trebuie să aibă cel puțin 10 caractere" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailJSInitialized, setEmailJSInitialized] = useState(false);
  
  // Initialize EmailJS once when component mounts
  useEffect(() => {
    // Replace with your actual public key from EmailJS
    emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");
    setEmailJSInitialized(true);
  }, []);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Prepare the template parameters
      const templateParams = {
        to_email: "iscoala.ro@gmail.com",
        from_name: values.name,
        from_email: values.email,
        message: values.message,
      };
      
      // Send the email using EmailJS
      // Replace with your actual EmailJS service ID and template ID
      await emailjs.send(
        "YOUR_ACTUAL_SERVICE_ID", 
        "YOUR_ACTUAL_TEMPLATE_ID", 
        templateParams
      );
      
      // Show success message
      toast({
        title: "Mesaj trimis",
        description: "Îți mulțumim pentru mesaj! Te vom contacta în curând.",
      });
      
      // Reset the form
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Eroare",
        description: "A apărut o eroare la trimiterea mesajului. Te rugăm să încerci din nou.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Trimite-ne un mesaj</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nume și prenume</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mesaj</FormLabel>
                <FormControl>
                  <Textarea rows={4} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            disabled={isSubmitting || !emailJSInitialized}
            className="w-full md:w-auto"
          >
            {isSubmitting ? "Se trimite..." : "Trimite mesaj"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
