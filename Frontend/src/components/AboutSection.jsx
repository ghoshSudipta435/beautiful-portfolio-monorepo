import { Briefcase, Code, User, Download } from "lucide-react";
import React from "react";


const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Passionate Web Developer & ML engineer
            </h3>

            <p className="text-muted-foreground">
              As a passionate Web Developer, I thrive on building clean,
              user-friendly, and high-performance websites. I enjoy transforming
              ideas into real-world applications using modern frontend
              frameworks like React, and backend tools like Node.js and Express.
              I focus not just on writing efficient code, but also on creating
              intuitive interfaces that offer a seamless user experience. Every
              project I work on is an opportunity to learn, grow, and create
              something meaningful on the web.
            </p>
            <p className="text-muted-foreground">
              In addition to my web development journey, I am equally driven by
              my fascination with Machine Learning. I love exploring data,
              building models, and developing intelligent systems that can learn
              and adapt. From implementing algorithms in Python to integrating
              ML models with full-stack applications, I bring a well-rounded
              technical skill set. My goal is to use the power of the web and
              machine learning to solve real-world problems and contribute to
              the future of technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/SUDIPTA_GHOSH_JU.pdf"
                download
                className="flex items-center gap-2 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                <Download size={18} />
                Download CV
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
                  <p>
                    Creating Responsive websites and web applications with
                    modern frameworks
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
                  <p>
                    Creating eyecathing,smooth desings and functional web applications with
                    modern technologies.
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
                  <h4 className="font-semibold text-lg">ML Stuffs</h4>
                  <p>
                    Solving bussiness problems with ML integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
