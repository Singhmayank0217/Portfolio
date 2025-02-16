import React from "react";
import { TimelineRight } from "../components/ui/TimelineRight";
import { Highlight } from "../components/ui/hero-highlight";
import s1 from "../assests/Sraj-1.png";
import s2 from "../assests/Sraj-2.png";
import s3 from "../assests/Sraj-3.png";
import s4 from "../assests/Sraj-4.png";
import g1 from "../assests/Grid-1.png";
import g2 from "../assests/Grid-2.png";
import g3 from "../assests/Grid-3.png";
import g4 from "../assests/Grid-4.png";
import t1 from "../assests/Shop-1.png";
import t2 from "../assests/Shop-2.png";
import t3 from "../assests/Shop-3.png";
import t4 from "../assests/Shop-4.png";

export function RightProjects() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="text-justify">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-medium mb-8">
            Built website for :
            <Highlight className="text-white font-bold ml-1 text-base">
              S RAJ INFRA PROJECTS PRIVATE LIMITED
            </Highlight>
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[s1, s2, s3, s4].map((src, index) => (
              <img
                key={index}
                src={src}
                alt="S RAJ INFRA PROJECTS PRIVATE LIMITED"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div className="text-justify">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-medium mb-8">
            Started to build website for :
            <Highlight className="text-white font-bold ml-1 text-base">
              Grid Reputation, a market agency company
            </Highlight>
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            This project is currently deployed on Vercel and is still a work in progress.
            The client has requested to hold off on further development while awaiting design updates.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[g1, g2, g3, g4].map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Grid Reputation"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "E-commerce",
      content: (
        <div className="text-justify">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-medium mb-1">
            I’ve got a new project:
            <Highlight className="text-white font-bold ml-1 text-base">
              The Sparkle Shop, an e-commerce website
            </Highlight>
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Currently, I'm waiting for the design, as the site is built on WordPress. The plan is:
          </p>
          <ul className="list-none mb-8">
            {["Custom Development: Build with clean, scalable code instead of relying on WordPress templates.",
              "Secure Payments: Integrate a safe and seamless payment gateway.",
              "Smart Search & Categories: Implement filters for easy product discovery.",
              "User-Friendly UI/UX: Ensure a fast, responsive, and intuitive experience.",
              "SEO & Performance: Optimize for search rankings and speed."].map((text, index) => (
              <li key={index} className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ {text}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-4">
            {[t1, t2, t3, t4].map((src, index) => (
              <img
                key={index}
                src={src}
                alt="The Sparkle Shop"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <TimelineRight data={data} />
    </div>
  );
}