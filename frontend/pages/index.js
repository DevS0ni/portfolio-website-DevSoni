import Head from 'next/head'
import { createClient } from "next-sanity";
import Script from "next/script"
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import NavBar from '../components/NavBar';
import Form from '../components/Form';

export default function Home({ blogs, profile }) {
  const client = createClient({
    projectId: "kai2fqee",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)

  return (
    <><>
      <Script src="/assets/js/main.js"></Script>
      <Head>
        <meta charset="utf-8" />

        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport" />

        <title>Dev Soni - Developer | Blogger | Anime Manga Artist</title>

        <meta property="og:title" content="Homepage | Dev Soni - Software Developer" />

        <meta property="og:locale" content="en_US" />

        <link
          rel="canonical"
          href="//" />

        <meta
          property="og:url"
          content="//" />

        <meta
          name="description"
          content="Dev Soni - Personal Portfolio Website" />

        <link rel="icon" href="/assets/img/favicon.ico" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Dev Soni - Portfolio Website" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />

        <link
          crossorigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect" />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload" />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet" />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet" />

        <link
          crossorigin="anonymous"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet" />

        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>

        <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>


      </Head>
      <NavBar profile={profile} />
      {/* <div className="w-full z-50 top-0 py-3 sm:py-5  absolute ">
        <div className="container flex items-center justify-between">
          <div>
            <a href="/">
             <h2 className='text-white text-2xl font-bold'>{profile.title}</h2>
            </a>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">

              <li className="group pl-6">

                <a href='#about'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

                <span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Services</span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <a href='#portfolio'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <a href='#clients'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Clients</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <a href='#work'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <a href='#statistics'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Statistics</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <a href='#blog'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Blog</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

                <span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Contact</span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

            </ul>
          </div>
          <div className="block lg:hidden">
            <button>
              <i className="bx bx-menu text-4xl text-white"></i>
            </button>
          </div>
        </div>
      </div> */}
      <div
        className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" />
      <div className="hidden absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
        <button className="absolute top-0 right-0 mt-4 mr-4">
          <img src="/assets/img/icon-close.svg" className="h-10 w-auto" alt="" />
        </button>

        <ul className="mt-8 flex flex-col">

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Services</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Clients</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Statistics</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Projects</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Contact</span>

          </li>

        </ul>
      </div>
    </><><div>
      <div className="relative bg-cover bg-center bg-no-repeat py-8" style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)", backgroundAttachment: "fixed" }}>
        <div
          className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat">
        </div>

        <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="rounded-full border-8 border-primary shadow-xl">
              <img src={builder.image(profile.image).width(200).url()} className="h-48 rounded-full sm:h-56" alt="author" />
            </div>
            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                Hello I'm {profile.name}!
              </h1>
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                  <p className="font-body text-lg uppercase text-white">Let's connect</p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  <a href={profile.github} target='_blank'>
                    <i className="bx bxl-github text-2xl text-white hover:text-black"></i>
                  </a>
                  <a href={profile.linkedin} target='_blank' className="pl-4">
                    <i className="bx bxl-linkedin text-2xl text-white hover:text-black"></i>
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
              <Link href={'/blogs'}><div className="buttons text-center">
                <button className='bg-purple-600 text-white border-2 px-4 py-1 my-4 rounded-2xl'>View All Projects</button>
              </div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-grey-50" id="about">
        <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
          <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Who am I?
            </h2>
            <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              I'm Dev Soni, a Software Geek!
            </h4>
            <p className="pt-6 font-body leading-relaxed text-grey-20">
              An ambitious and recent graduate from Seneca Polytechnic, formerly known as Seneca College of Applied Arts and Technology,
              with a Diploma in Computer Programming. Eager and highly motivated to contribute my acquired skills and knowledge to the
              rapidly evolving IT industry. I am proficient in Python, C++ for general programming and the MERN (MongoDB, Express, React, Node) stack.
              I am passionate about creating innovative solutions and have successfully completed multiple projects during my academic journey.
              Throughout my academic tenure at Seneca College, I have consistently taken on leadership roles in group projects, demonstrating
              my ability to lead teams effectively. Under the guidance of esteemed professors, I successfully led my teams to deliver milestones
              and projects ahead of deadlines. Notably, I participated in the Seneca Sustainability Hackathon 2022, where my team advanced to the
              final phase and secured the runner-up position. In addition to this, I am proud to say that I have also been awarded
              The President’s Honour List Award for my outstanding academic achievement in one of the semesters. Furthermore, during my time at LaSpesa, 
              I have successfully managed and improved the store website, synchronized it with delivery platforms, and addressed technical issues.
              I have a proven track record of user-friendly solutions, contributing to increased conversion rates and strong customer relations. 
              A dedicated team player with a proactive work ethic, consistently achieving optimal results. This multifaceted approach reflects my commitment
              to continuous learning and creativity, contributing to a well-rounded and accomplished profile.
            </p>
            <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
              <div className="flex items-center justify-center sm:justify-start">
                <p className="font-body text-lg font-semibold uppercase text-grey-20">
                  Connect with me
                </p>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-2xl text-primary"></i>
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                <a href={profile.github} target="_blank">
                  <i className="bx bxl-github text-2xl text-primary hover:text-black"></i>
                </a>
                <a href={profile.linkedin} target="_blank" className="pl-4">
                  <i className="bx bxl-linkedin text-2xl text-primary hover:text-black"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
            <div>
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                  Python
                </h4>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "100%" }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">JavaScript, ASP.Net, Restful</h4>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "100%" }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                  Java, C#, PHP
                </h4>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "100%" }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">C/ C++</h4>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "100%" }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black"> HTML5, CSS, bootstrap, Tailwind CSS</h4>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "100" }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">React, Express, Web API</h4>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "100%" }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">Oracle SQL</h4>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "100%" }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">node.js & next.js</h4>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "100%" }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">MongoDB & PostgreSQL</h4>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "100%" }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">Jira, Agile, Linux/ Server Scripting & IOT</h4>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "100%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="services">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Technical Skill Set
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          These are the technical and programming skillsets I possess
        </h3>

        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-development-white.svg" alt="development icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-development-black.svg" alt="development icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Software Development and Testing
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Hands-on experience in developing and testing software applications using -
                Python, C++/ C, C#, Java ensuring functionality and reliability.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-content-white.svg" alt="content marketing icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-content-black.svg" alt="content marketing icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Data Structures and Algorithms
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Proficient in implementing and optimizing data structures and algorithms for efficient problem-solving.
                Proficient in analysing Space and Time Complexities using Mathematical Expressions and Functions to represent them.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-mobile-white.svg" alt="Mobile Application icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-mobile-black.svg" alt="Mobile Application icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Web Development, Frameworks and Designing
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Strong understanding of web development concepts and frameworks, including Express, React, Next.js, Node.js,
                Javascript, ASP.Net, Web API, Restful, Bootstrap, Tailwind CSS, HTML & CSS. Skilled in creating
                visually appealing and user-friendly web interfaces with a focus on usability and accessibility.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-email-white.svg" alt="Email Marketing icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-email-black.svg" alt="Email Marketing icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Server Side Programming and Linux
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                In-depth knowledge of server-side programming and Linux environments,
                ensuring robust and scalable server solutions.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-design-white.svg" alt="Theme Design icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-design-black.svg" alt="Theme Design icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Network and Security
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Understanding of networking principles and security protocols to create secure and resilient systems.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-graphics-white.svg" alt="Graphic Design icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-graphics-black.svg" alt="Graphic Design icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                DataBase Programming and Design
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Proficient in database programming - SQL, PL/SQL, MongoDB, PostgreSQL & ElephantSQL database design for efficient data storage and retrieval.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-software-white.svg" alt="Graphic Design icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-software-black.svg" alt="Graphic Design icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Software Analysis and Design Using OO Models
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Experienced in analyzing and designing software solutions using Object-Oriented models for maintainability and scalability.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-project-white.svg" alt="Graphic Design icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-project-black.svg" alt="Graphic Design icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Project Management
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Familiarity with project management principles, ensuring projects are completed on time and within scope.
                Tech Assests: Jira, Agile, SDLC
                Microsoft Project, Project 365 - softwares used to keep track of project phases.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-net-white.svg" alt="Graphic Design icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-net-black.svg" alt="Graphic Design icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Internet of things and Computer Systems Hardware
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Specialized in computer functions and networking concepts, I've leveraged hands-on, activity-based
                learning, including a practical Internet of Things (IoT) project using Python and Server-Side Scripting. 
                Proficient in deploying and configuring computer and networking devices, I ensure seamless functionality, 
                robust connectivity, and possess strong troubleshooting capabilities. I have also gained profound knowledge and
                became familiar with TCP/ IP suites and OSI Model.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-micro-white.svg" alt="Graphic Design icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-micro-black.svg" alt="Graphic Design icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Microsoft Services and Technologies
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Mastered operating systems' technical intricacies, excelling in installation, configuration,
                and integration across diverse environments. Proficient in server management, networking,
                virtualization, and automation through command-line interfaces and scripting.
                Skilled problem solver, strategically implementing technical solutions aligned with business
                requirements.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-present-white.svg" alt="Graphic Design icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-present-black.svg" alt="Graphic Design icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Applied & Strategic Problem Solving
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Strong communication skills with the ability to document technical processes and present ideas effectively.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-present-white.svg" alt="Graphic Design icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-present-black.svg" alt="Graphic Design icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Technical Writing & Presentation Skills
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Strong communication skills with the ability to document technical processes and present ideas effectively.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="portfolio">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          A quick look to my recent Portfolios
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          List of the projects I had recently worked on
        </h3>

        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">

          <a href="https://github.com/DevS0ni/InkChronicle-Web-Blog-Application" target="_blank" className="mx-auto transform transition-all hover:scale-105 md:mx-0">

            <img src="/assets/img/inkchronicle.jpeg" className="w-full shadow" alt="portfolio image" />
          </a>

          <a href="https://github.com/DevS0ni/PyGame-SmartMove-Crystal-Quest-Game" target="_blank" className="mx-auto transform transition-all hover:scale-105 md:mx-0">

            <img src="/assets/img/pygame.jpeg" className="w-full shadow" alt="portfolio image" />
          </a>
          <a href="https://github.com/DevS0ni/Assembly-Line-Simulation-Project" target="_blank" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <img src="/assets/img/assemblyline.jpeg" className="w-full shadow" alt="portfolio image" />
          </a>
          <a href="https://github.com/DevS0ni/Coffee-Shop-Management-Database-Application" target="_blank" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <img src="/assets/img/portfolio-database.jpeg" className="w-full shadow" alt="portfolio image" />
          </a>
        </div>
      </div>


      <div className="container py-16 md:py-20" id="work">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          My experience
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Timeline (July 2021 - current)
        </h3>

        <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
          <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <img src="/assets/img/logo-ITC.svg" className="h-auto w-32" alt="company logo" />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span
                  className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">Sept 2021 - Sept 2022</span>
                    <span className="block pt-2 font-header text-xl font-bold text-primary">Advance Application Developer (Full-time)</span>
                    <div className="pt-2">
                      <span className="block font-body text-black"><p>I have successfully completed an extensive range of modules at ITC Mogri, Gujarat, India. Demonstrating exceptional proficiency in various programming languages and web development frameworks:</p>

                        <ol>
                          <li><strong>C Programming and Basic Concepts of Programming:</strong> Acquired a comprehensive understanding of C programming language and fundamental programming concepts.</li>

                          <li><strong>C++ with Object-Oriented Programming Approach:</strong> Demonstrated proficiency in object-oriented programming using C++, emphasizing software design principles.</li>

                          <li><strong>Web Designing & Coding Frameworks (HTML5, CSS, Bootstrap):</strong> Mastered the art of web design and development with a focus on HTML5, CSS, and Bootstrap to create aesthetically pleasing and responsive user interfaces.</li>

                          <li><strong>MyPHP Admin WordPress:</strong> Gained hands-on experience in using MyPHP Admin for managing MySQL databases and developing dynamic websites with WordPress.</li>

                          <li><strong>Database Oracle SQL:</strong> Acquired expertise in Oracle SQL, focusing on database management and query optimization.</li>

                          <li><strong>Core Java Application Development:</strong> Developed foundational skills in Java programming, emphasizing application development and problem-solving.</li>

                          <li><strong>Core Python:</strong> Gained proficiency in Python programming language, focusing on its core concepts and applications.</li>

                          <li><strong>Advanced Python with Django Web Frameworks:</strong> Expanded Python expertise by delving into advanced topics and mastering Django web frameworks for scalable web application development.</li>

                          <li><strong>MyPHP and MySQL Databases:</strong> Developed skills in using MySQL databases in conjunction with PHP for dynamic and interactive web applications.</li>
                        </ol></span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>


        </div>
        <div className="relative mx-auto flex w-full flex-col lg:w-2/3">
          <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <img src="/assets/img/logo-seneca.svg" className="h-auto w-32" alt="company logo" />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span
                  className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">Jan 2022 - Jan 2024</span>
                    <span className="block pt-2 font-header text-xl font-bold text-primary">Computer Programming (Associate's Degree CS - Full-time)</span>
                    <div className="pt-2">
                      <span className="block font-body text-black"><ul>
                        <li><strong>Effective Leadership</strong> in Group Projects, ensuring timely delivery of milestones.</li>
                        <li><strong>Runner-up</strong> in Seneca Sustainability Hackathon 2022, showcasing problem-solving skills.</li>
                        <li><strong>President’s Honour List Award</strong> (Summer 2022) with a perfect 4.0/4.0 GPA.</li>
                        <li><strong>Technical Skills:</strong>
                          <ul>
                            <li>Python, Java, C++, C#, C, Web Programming (React, Express, JavaScript, Restful, ASP.NET, node.js, Bootstrap, HTML5, CSS, Tailwind CSS).</li>
                            <li><strong>Database Management: </strong>MongoDB, MongooseSQL, PostgreSQL, Oracle SQL, PL/SQL</li>
                            <li><strong>Other Assests: </strong>Jira, Agile, SDLC, IOT, Server-Side Scripting, MVC, UI Design</li>
                            <li>System Design and Analysis with OO modeling.</li>
                          </ul>
                        </li>
                        <li><strong>Networking and Data Communications Security</strong> proficiency.</li>
                        <li><strong>Linux and Server-Side Programming</strong> competence.</li>
                        <li><strong>Web Hosting and Development</strong> skills.</li>
                        <li><strong>Project Management</strong> expertise for successful project execution.</li>
                        <li><strong>Data Structures and Algorithms with Python Programming</strong> mastery.</li>
                        <li><strong>Technical Documentation and Presentation</strong> skills.</li>
                      </ul></span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>


        </div>
        <div className="relative mx-auto flex w-full flex-col lg:w-2/3">
          <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <img src="/assets/img/logo-laspesa.svg" className="h-auto w-32" alt="company logo" />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span
                  className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">Jan 2022 - current</span>
                    <span className="block pt-2 font-header text-xl font-bold text-primary">IT Specialist - Full-Stack Web Development (Full-time)</span>
                    <div className="pt-2">
                      <span className="block font-body text-black"><ul>
                        <li><strong>E-commerce Website Development: </strong>
                          Developed LaSpesa's e-commerce site in collaboration with the GrocerBox team, implementing JS functions for product customization, checkout optimization,
                            and customer profile management.
                        </li>
                        <li><strong>Performance & Scalability Optimization: </strong>
                         Enhanced website performance and scalability by implementing multithreaded architecture, reducing response times, and increasing user satisfaction.
                        </li>

                        <li><strong>API Integration for Delivery Platforms: </strong>
                        Integrated the website with Trexity and Clickship platforms via APIs, streamlining local and nationwide delivery operations.
                        </li>

                        <li><strong>Database Design & Optimization: </strong>
                          Designed and optimized SQL Server databases, reducing manual workload by 40% and enabling real-time inventory updates.
                        </li>

                        <li><strong>Technical Issue Resolution & Cybersecurity practices: </strong>
                          Troubleshot network and technical issues, ensuring system reliability and compliance with cybersecurity.
                        </li>

                        <li><strong>SEO & Marketing Campaign Management: </strong>
                          Managed SEO, promotions, and newsletters, boosting sales conversion rates by 10%.
                        </li>

                        <li><strong>Ongoing Website Maintenance & Updates: </strong>
                            Maintain the website regularly, implementing minor updates and improvements to ensure smooth day-to-day operations.
                        </li>
                      </ul></span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>


        </div>
      </div>

      <div className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
        style={{ "backgroundImage": "url(/assets/img/experience-figure.png)" }} id="statistics">
        <div className="container">
          <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
            <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
              <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                <div>
                  <img src="/assets/img/icon-project.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon project" />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    12
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Finished Projects
                  </h4>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                <div>
                  <img src="/assets/img/icon-award.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon award" />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    2
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Awards Won
                  </h4>
                </div>
              </div>

              <div
                className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                <div>
                  <img src="/assets/img/icon-happy.svg" className="mx-auto h-12 w-auto md:h-20"
                    alt="icon happy clients" />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    6
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Blogs Written
                  </h4>
                </div>
              </div>

              <div
                className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                <div>
                  <img src="/assets/img/icon-puzzle.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon puzzle" />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    256
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Bugs Fixed
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-grey-50" id="blog">
        <div className="container py-16 md:py-20">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            ALL PROJECTS OF MINE!
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Check out the complete description of all of my projects and where you can find them!
          </h4>
          <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">

            {blogs.map((item) => {
              return <Link key={item.slug.current} href={"/blog/" + item.slug.current} className="shadow">
                <div><div style={{ "backgroundImage": `url(${builder.image(item.blogimage).width(200).url() || '/assets/img/post-01.png'})` }}
                  className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                  <span
                    className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                  <span
                    className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base cursor-pointer">Read
                    More</span>
                </div>
                  <div className="bg-white py-6 px-5 xl:py-8">
                    <span className="block font-body text-lg font-semibold text-black"> {item.title}</span>
                    <span className="block pt-2 font-body text-grey-20">{item.metadesc}</span>
                  </div></div>
              </Link>
            })}
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="contact">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here's my contact form
        </h2>
        <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Want to Connect?
        </h4>
        <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
          <p className="font-body text-grey-10">
            Feel free to contact me, please send me an email, click on the button below!
          </p>
        </div>
        <Form/>
        <div className="flex flex-col pt-16 lg:flex-row">
          <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
            <div className="flex items-center">
              <i className="bx bx-phone text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                My Phone
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              +1 (437) 263-3012
            </p>
          </div>
          <div
            className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <i className="bx bx-envelope text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                My Email
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              <a href="mailto:dsoni30a@gmail.com">
                dsoni30a@gmail.com
              </a>
            </p>
          </div>
          <div
            className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <i className="bx bx-map text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                My Address
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              Toronto
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24"
        style={{ "backgroundImage": "url(/assets/img/bg-cta.jpg)", backgroundAttachment: "fixed" }}>
        <div className="container relative z-30">
          <h3
            className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
            Keep <span className="font-bold">up-to-date</span> <br />
            with what I'm up to
          </h3>
        </div>
      </div>
    </div><div className="bg-primary">
          <div className="container flex flex-col justify-between py-6 sm:flex-row">
            <p className="text-center font-body text-white md:text-left">
              © Copyright 2025. All right reserved, Dev Soni - Software Developer
            </p>
            <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
              <a href={profile.github} target='_blank'>
                <i className="bx bxl-github text-2xl text-white hover:text-black"></i>
              </a>
              <a href={profile.linkedin} target="_blank" className="pl-4">
                <i className="bx bxl-linkedin text-2xl text-white hover:text-black"></i>
              </a>
            </div>
          </div>
        </div></></>
  )
}


export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "kai2fqee",
    dataset: "production",
    useCdn: false
  });
  const query = `*[_type == "blog"][0...6]`;
  const blogs = await client.fetch(query);
  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);

  return {
    props: {
      blogs,
      profile
    }
  }
}
