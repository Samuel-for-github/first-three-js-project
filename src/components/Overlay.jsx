import React, { useState } from "react";
import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Section = ({ children, opacity, right }) => {
    return (
        <section
            className={`h-screen flex flex-col justify-center px-6 md:px-10 ${
                right ? "items-end" : "items-start"
            }`}
            style={{ opacity }}
        >
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <div className="w-full max-w-sm md:max-w-md">
                    <div className="bg-white rounded-lg px-6 md:px-8 py-10 md:py-12 shadow-lg">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Overlay = () => {
    const scroll = useScroll();
    const [opacityFirstSection, setOpacityFirstSection] = useState(1);
    const [opacitySecondSection, setOpacitySecondSection] = useState(1);
    const [opacityLastSection, setOpacityLastSection] = useState(1);

    useFrame(() => {
        // Adjust scroll sensitivity for mobile (more gentle)
        const factor = window.innerWidth < 768 ? 0.99 : 1;

        setOpacityFirstSection(1 - scroll.range(0, (1 / 3) * factor));
        setOpacitySecondSection(scroll.curve((1 / 3) * factor, (1 / 3) * factor));
        setOpacityLastSection(scroll.range((2 / 3) * factor, (1 / 3) * factor));
    });

    return (

        <Scroll  html>
            <div className="w-screen">
                {/* SECTION 1 */}
                <Section opacity={opacityFirstSection}>
                    <h1 className="font-semibold font-serif text-xl md:text-2xl">
                        Hello, I'm Samuel
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base">
                        Welcome to my first 3 three.js project!
                    </p>

                    <p className="mt-3 text-sm md:text-base">I know:</p>
                    <ul className="leading-7 md:leading-9 text-sm md:text-base">
                        <li>🧑‍💻 How to code</li>
                        <li>🧑‍🏫 How to learn</li>
                        <li>🛠️ How to build</li>
                    </ul>

                    <p className="animate-bounce mt-6 text-xl md:text-2xl">↓</p>
                </Section>

                {/* SECTION 2 */}
                <Section opacity={opacitySecondSection}>
                    <h1 className="font-semibold font-serif text-xl md:text-2xl">
                        Here are my skillsets 🔥
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base">
                        PS: I never test
                    </p>

                    <p className="mt-3 text-base font-bold">Frontend 🚀</p>
                    <ul className="leading-7 md:leading-9 text-sm md:text-base">
                        <li>ReactJS</li>
                        <li>React Native</li>
                        <li>NextJs</li>
                        <li>Flutter</li>
                    </ul>

                    <p className="mt-3 text-base font-bold">Backend 🔬</p>
                    <ul className="leading-7 md:leading-9 text-sm md:text-base">
                        <li>NodeJS</li>
                        <li>Supabase</li>
                        <li>NestJS</li>
                        <li>PostgreSQL</li>
                    </ul>

                    <p className="animate-bounce mt-6 text-xl md:text-2xl">↓</p>
                </Section>

                {/* SECTION 3 */}
                <Section opacity={opacityLastSection}>
                    <h1 className="font-semibold font-serif text-xl md:text-2xl">
                        🤙 Call me maybe?
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base">
                        I'm very friendly
                    </p>

                    <p className="mt-6 p-3 bg-slate-200 rounded-lg text-center text-sm md:text-base">
                        📞{" "}
                        <a href="tel: +91 7620629160">+91 7620629160</a>
                    </p>
                </Section>
            </div>
        </Scroll>

    );
};

export default Overlay;
