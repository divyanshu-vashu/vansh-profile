import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import exp1 from "../Images/Experince/1.jpeg"

export const DragCards=()=>{
  return(
    <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800 w-[80vw]">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
    <p className="text-black text-5xl font-bold text-primary tracking-wider font-poppins mb-[30px]">Experince</p>
			<p className="font-poppins text-sm dark:text-gray-600">Take a look at my professional journey, where I’ve applied my skills and knowledge to deliver impactful results. This section showcases my roles, responsibilities, and accomplishments across various projects and organizations, highlighting my ability to adapt, learn, and contribute effectively in dynamic environments.</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-fill w-full h-52 dark:bg-gray-500" src="https://media.licdn.com/dms/image/v2/D562DAQHpo2ryl-_TiA/profile-treasury-image-shrink_160_160/profile-treasury-image-shrink_160_160/0/1721911255571?e=1735930800&v=beta&t=y9_nrSLkMJ9LnAv5GWLMXq2JPGTaZy-jEYQvSW22_QA" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<p className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">SpectoV</p>
					<h3 className="flex-1 py-2 text-xs font-semibold leading-snug">As the Founder of SpectoV, I am spearheading the development of DeskAVR, an innovative project aimed at transforming the user experience in augmented and virtual reality (AR/VR) environments. </h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>Feb 2024</span>
						<a href="https://www.spectov.com/" target="_blank">View More</a>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={exp1} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<p className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">
					Former SDE Intern</p>
					<h3 className="flex-1 py-2 text-xs font-semibold leading-snug">As an SDE Intern at Eaccess Telemedics Pvt. Ltd., I played a crucial role in developing and implementing the real-time ICU notes feature, which significantly streamlined the documentation process for over 50 doctors. </h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>July 2024</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-fill w-full h-52 dark:bg-gray-500" src="https://media.licdn.com/dms/image/v2/D560BAQET6wynj5aFJg/company-logo_100_100/company-logo_100_100/0/1708770004462?e=1743638400&v=beta&t=qKIw21_j5VkHz7lHOhxwBitq8PLDqAba988a4UbwkjE" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<p className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Virtual Reality Club VITC</p>
					<h3 className="flex-1 py-2 text-xs font-semibold leading-snug">Founder & Ex-President of Augmented and Virtual Reality Club VITC | Virtual Reality (VR) · Augmented Reality (AR) · Mixed Reality · Blockchain · Avatars</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>Jan 2024</span>
						<a href="https://vr-club-vitc.netlify.app/" target="_blank">View More</a>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-fill w-full h-52 dark:bg-gray-500" src="https://media.licdn.com/dms/image/v2/C510BAQGxTRuHzZTLQQ/company-logo_100_100/company-logo_100_100/0/1630592013291/iothincvit_logo?e=1743638400&v=beta&t=dAk0ehmR-VTo-MkDcCYofRE9zZesQ9uQgQb4Sg5lPmw" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">
					Ex-Technical Head</a>
					<h3 className="flex-1 py-2 text-xs font-semibold leading-snug">Ex-Technical Head of IoThinC - VITIoThinC - VIT Skills: Android Development</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>Nov 2023</span>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>
  )
}

// export const DragCards = () => {
//   return (
//     <section className="relative grid min-h-screen w-[100vw] place-content-center overflow-hidden bg-black">
//       <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px] font-fredoka">
//         Experience<span className="text-indigo-500">.</span>
//       </h2>
//       <p className='font-fredoka text-xl text-neutral-800 w-[70vw]'>Take a look at my professional journey, where I’ve applied my skills and knowledge to deliver impactful results. This section showcases my roles, responsibilities, and accomplishments across various projects and organizations, highlighting my ability to adapt, learn, and contribute effectively in dynamic environments.</p>
//       <Cards />
//     </section>
//   );
// };

// const Cards = () => {
//   const containerRef = useRef(null);

//   return (
//     <div className="absolute inset-0 z-10" ref={containerRef}>
//       <Card
//         containerRef={containerRef}
//         src="https://media.licdn.com/dms/image/v2/D562DAQHpo2ryl-_TiA/profile-treasury-image-shrink_160_160/profile-treasury-image-shrink_160_160/0/1721911255571?e=1735668000&v=beta&t=k_lbSirumsML_t4Sq2sbUo7C9FBiUllYLngzRhG-aWg"
//         alt="Example image"
//         rotate="6deg"
//         top="20%"
//         left="25%"
//         className="w-36 md:w-56"
//       />
//       <Card
//         containerRef={containerRef}
//         src="https://media.licdn.com/dms/image/v2/D560BAQET6wynj5aFJg/company-logo_100_100/company-logo_100_100/0/1708770004462?e=1743033600&v=beta&t=cI9If-AkpVfVTAjkh94jLwhDJkgLgUxv3-wsVpv9ef0"
//         alt="Example image"
//         rotate="12deg"
//         top="45%"
//         left="60%"
//         className="w-24 md:w-48"
//       />
//       <Card
//         containerRef={containerRef}
//         src="https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt="Example image"
//         rotate="-6deg"
//         top="20%"
//         left="40%"
//         className="w-52 md:w-80"
//       />
//       <Card
//         containerRef={containerRef}
//         src="https://images.unsplash.com/photo-1620428268482-cf1851a36764?q=80&w=2609&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt="Example image"
//         rotate="8deg"
//         top="50%"
//         left="40%"
//         className="w-48 md:w-72"
//       />
//       <Card
//         containerRef={containerRef}
//         src="https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt="Example image"
//         rotate="18deg"
//         top="20%"
//         left="65%"
//         className="w-40 md:w-64"
//       />
//       <Card
//         containerRef={containerRef}
//         src="https://images.unsplash.com/photo-1622313762347-3c09fe5f2719?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt="Example image"
//         rotate="-3deg"
//         top="35%"
//         left="55%"
//         className="w-24 md:w-48"
//       />
//     </div>
//   );
// };

// const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
//   const [zIndex, setZIndex] = useState(0);

//   const updateZIndex = () => {
//     const els = document.querySelectorAll(".drag-elements");

//     let maxZIndex = -Infinity;

//     els.forEach((el) => {
//       let zIndex = parseInt(
//         window.getComputedStyle(el).getPropertyValue("z-index")
//       );

//       if (!isNaN(zIndex) && zIndex > maxZIndex) {
//         maxZIndex = zIndex;
//       }
//     });

//     setZIndex(maxZIndex + 1);
//   };

//   return (
//     <motion.img
//       onMouseDown={updateZIndex}
//       style={{
//         top,
//         left,
//         rotate,
//         zIndex,
//       }}
//       className={twMerge(
//         "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
//         className
//       )}
//       src={src}
//       alt={alt}
//       drag
//       dragConstraints={containerRef}
//       // Uncomment below and remove dragElastic to remove movement after release
//       //   dragMomentum={false}
//       dragElastic={0.65}
//     />
//   );
// };