import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { cn } from '@/lib/utils';
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import emailjs from 'emailjs-com';



export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const SERVICE_ID = "service_yqu5x8a";
    const TEMPLATE_ID = "template_j1foukg";
    const PUBLIC_KEY = "1iXK91JZ7okBZyywc";

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then(() => {
                alert("Message Sent!");
                setFormData({ name: "", email: "", message: "" });
            }).catch(() => alert("Oops! Something went wrong. Please try again."));





        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            setIsSubmitting(false);
        }, 1500);
    };
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-[clamp(2rem,3.1vw,3.3rem)] font-black  leading-none mb-4 text-center">
                    <span className="text-white pr-2">Get In </span>
                    <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or a collaboration idea? I’d love to hear about it. I’m actively seeking new opportunities to contribute and drive impact.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6 mr-60"> Contact</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium mr-35"> Email</h4>
                                    <a href="mailto:abunahinibn@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">

                                        abunahinibn@gmail.com
                                    </a>
                                </div>
                            </div>



                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium mr-35"> Phone</h4>
                                    <a href="tel:+8801301690144" className="mr-17 text-muted-foreground hover:text-primary transition-colors">

                                        +8801301690144
                                    </a>
                                </div>
                            </div>




                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium mr-35"> Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors mr-4">

                                        Uttara, Dhaka, Bangladesh.
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center text-primary/200">
                                <a href="https://www.linkedin.com/in/nahin-hoque?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrGTa4QQISnG5QrqAwkZpag%3D%3D" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="https://www.facebook.com/share/1L3N1EXTRz/" target="_blank">
                                    <Facebook />
                                </a>
                                <a href="https://x.com/NahinHoque000" target="_blank">
                                    <Twitter />
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-xl shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium  mb-2"> Your Name</label>
                                <input type="text" id="name" name="name" required value={formData.name} className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary" placeholder="Write here..." onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                                <input type="email" id="email" name="email" required value={formData.email} className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary" placeholder="Write here..." onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                                <textarea id="message" name="message" required value={formData.message} className="w-full px-4 py-3  rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none" placeholder="Write here..." onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                            </div>

                            <button
                                disabled={isSubmitting}
                                type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                                )}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
};












