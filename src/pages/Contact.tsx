import React, { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";
import Header from "../components/Header";
import emailjs from 'emailjs-com';

const formSchema = z.object({
  name: z.string().min(2, { message: "Numele trebuie să aibă cel puțin 2 caractere" }),
  email: z.string().email({ message: "Adresă de email invalidă" }),
  message: z.string().min(10, { message: "Mesajul trebuie să aibă cel puțin 10 caractere" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailJSInitialized, setEmailJSInitialized] = useState(false);
  
  // Initialize EmailJS once when component mounts
  useEffect(() => {
    // Use your own public key - this is just a placeholder
    emailjs.init("YOUR_PUBLIC_KEY");
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
      // Replace these parameters with your actual EmailJS service ID and template ID
      await emailjs.send(
        "YOUR_SERVICE_ID", 
        "YOUR_TEMPLATE_ID", 
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
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-navy">Ai nevoie de ajutor?</h1>
          <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
            Dezvoltăm principala resursă educațională complementară sistemului de educație din România.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-light-blue/10 p-4 rounded-full mb-4">
                <Phone className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Sună-ne</h3>
              <p className="text-navy">+40 725 009 988</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-light-blue/10 p-4 rounded-full mb-4">
                <Mail className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Scrie-ne</h3>
              <p className="text-navy">contact@i-scoala.ro</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-light-blue/10 p-4 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Vizitează-ne</h3>
              <p className="text-navy">Iași, Bd. Regele Ferdinand 1</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
            
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Întrebări frecvente</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Ce este i-scoala?</h3>
                  <p className="text-gray-700">www.i-scoala.ro este un serviciu e-learning care oferă utilizatorilor săi posibilitatea de a intra în posesia cursurilor afișate. Achiziția cursurilor se face pe baza comenzilor primite prin site.</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Înregistrarea ca utilizator</h3>
                  <p className="text-gray-700">Pentru a beneficia de toate serviciile platformei, vă recomandăm să vă creați un cont. Procesul este simplu și rapid.</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Metode de plată</h3>
                  <p className="text-gray-700">Acceptăm plăți online prin card bancar și transfer bancar. Toate plățile sunt procesate în condiții de maximă securitate.</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Cum utilizăm informațiile personale?</h3>
                  <p className="text-gray-700">Informațiile personale sunt folosite doar pentru procesarea comenzilor și îmbunătățirea experienței utilizatorilor. Pentru mai multe detalii, consultați <a href="/privacy" className="text-teal hover:underline">Politica de confidențialitate</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
