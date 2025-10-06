import { Briefcase, Code, User } from "lucide-react"



export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative text-foreground">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
                        <p className="text-muted-foreground">
                            A quiet breeze drifted through the small park, carrying with it the scent of damp earth and fallen leaves. A few children chased each other around the swings while their parents watched from nearby benches, lost in quiet conversations. The golden light of the setting sun painted long shadows across the ground, giving the ordinary scene a gentle glow. For a brief moment, it felt as though time had slowed down, allowing even the smallest details—the rustle of branches, the laughter in the air—to stand out more vividly than usual.
                        </p>
                        <p className="text-muted-foreground">
                            A quiet breeze drifted through the small park, carrying with it the scent of damp earth and fallen leaves. A few children chased each other around the swings while their parents watched from nearby benches, lost in quiet conversations. The golden light of the setting sun painted long shadows across the ground, giving the ordinary scene a gentle glow. For a brief moment, it felt as though time had slowed down, allowing even the smallest details—the rustle of branches, the laughter in the air—to stand out more vividly than usual.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>
                            <a href="/RishabhResume.pdf" download="RishabhResume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                DownLoad My CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive website and web applications using modern frameworks
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                        Designing inuitive user interfaces and seamless user experience
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">
                                        Leading projects with conception to completion with agile methodologies
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}