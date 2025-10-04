import { ChevronDown } from "lucide-react"

export const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex items-center justify-center px-4"
        >
            <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center z-10 text-foreground">
                {/* Image on top for mobile, right for desktop */}
                <div className="flex-shrink-0 flex justify-center items-center mb-8 md:mb-0 md:justify-end md:pr-18 ml-0 md:ml-8 w-full md:w-auto ">
                    <img
                        src="/me.jpg"
                        alt="Rishabh Yadav"
                        className="w-40 h-40 md:w-70 md:h-70 object-cover rounded-full shadow-lg border-4 border-primary"
                    />
                </div>
                {/* Left: Text Content */}
                <div className="flex-1 space-y-6 text-center md:text-left md:pl-18">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I am </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Rishabh</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Yadav</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
                        Tech Savvy just try to find my way in tech world. Please feel free to browse through my projects.
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-foreground text-sm text-muted-foreground mb-2">
                    Scroll<ChevronDown className="h-5 w-5 text-primary" />
                </span>
            </div>
        </section>
    )
}