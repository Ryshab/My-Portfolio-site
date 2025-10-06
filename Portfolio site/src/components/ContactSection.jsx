import { DiscIcon, Instagram, Linkedin, Mail, Map, Phone, Send, Twitter, X } from "lucide-react"
import { cn } from "../lib/util"
import { useToast } from "../hooks/use-toast"
import { useState } from "react";



export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const result = await response.json();
            if (response.ok && result.success) {
                toast({
                    title: "Message sent!",
                    description: "Thank you for your message. I'll get back to you soon."
                });
                e.target.reset();
            } else {
                toast({
                    title: "Error",
                    description: result.message || "Failed to send message. Please try again."
                });
                console.error("Web3Forms error:", result);
            }
        } catch (err) {
            toast({
                title: "Error",
                description: "Failed to send message. Please try again."
            });
            console.error("Network error:", err);
        }
        setIsSubmitting(false);
    }
    return (
        <section 
        id="contact" 
        className="py-24 px-4 relative bg-secondary/30 text-foreground"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary ">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind and if you want to collaborate? Feel free to contact me.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium -ml-18">Email 1</h4>
                                    <a href="mailto:rishabhydv2405@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        rishabhydv2405@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium -ml-4">Email 2</h4>
                                    <a href="mailto:ryid786@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        ryid786@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium ">Phone</h4>
                                    <a href="tel:+919810733650" className="text-muted-foreground hover:text-primary transition-colors">
                                        +91 9810733650
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Map className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium ">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        New Delhi, India
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8 px-6 scale-120">
                            <h4>Connect with me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="#" target="_blank">
                                    <Twitter />
                                </a>
                                <a href="#" target="_blank">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form 
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <input type="hidden" name="access_key" value="ec8b3d8a-b4a8-4a0d-9aa6-4d42435a9f6f" />
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                    placeholder="Rishabh Yadav"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                    placeholder="xyz@gmail.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"> Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" 
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>
                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}