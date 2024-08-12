"use client";
import React from 'react';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  image: string;
}

const experiences: Experience[] = [
  {
    title: "Product Manager",
    company: "Patent Ninja",
    period: "May 2024 - Present",
    description: "Handling diverse set of clients, building scalable products, handling backend APIs, crafting AI products",
    image: "/images/patent-ninja.png"
  },
  {
    title: "AI and Data Management Intern",
    company: "IProp91",
    period: "May 2024 - August 2024",
    description: "Designed Web scraper to collect, transform and store Real Estate Data",
    image: "/images/Iprop91.png"
  }
];

export default function Experience() {
  return (
    <section className="py-10 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center text-green-400">Experience</h2>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 px-4 sm:px-0">
        {experiences.map((exp, index) => (
          <CardContainer key={index} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)]">
            <CardBody className={cn(
              "bg-gray-900/90 backdrop-blur-sm relative group/card",
              "hover:shadow-2xl hover:shadow-green-500/[0.1]",
              "border-white/[0.2] border",
              "w-full h-auto rounded-xl p-4 sm:p-6",
              "transition-all duration-300"
            )}>
              <CardItem
                translateZ="50"
                className="text-xl sm:text-2xl font-bold text-green-400 mb-2"
              >
                {exp.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-base sm:text-lg text-green-300 mb-2"
              >
                {exp.company} | {exp.period}
              </CardItem>
              <CardItem
                as="p"
                translateZ="80"
                className="text-sm sm:text-base text-white mb-4"
              >
                {exp.description}
              </CardItem>
              <CardItem
                translateZ="100"
                className="w-full h-32 sm:h-48 relative rounded-lg overflow-hidden"
              >
                <Image
                  src={exp.image}
                  alt={`${exp.company} visual`}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover/card:shadow-xl transition-all duration-300"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}