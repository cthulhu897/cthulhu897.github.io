const identity = {
    name: "Francisco Díaz",
    image: "Profile-pic"
};
const data = {
    NavBar: {
        ...identity,
        links: ["Home",
            "About",
            "Portfolio",
            "Training",
            "Achievement",
            "Contact"]
    },
    Home: {
        introduction: "Profesional en seguridad informática especializado en red teaming, pentesting, análisis de vulnerabilidades, y desarrollo de herramientas de seguridad. Capaz de ejecutar tácticas, técnicas y procedimientos (TTPs) emulando amenazas avanzadas para evaluar la seguridad de infraestructuras críticas.", resumeLink: "1plLnPRjzXrrqQzrrrU8mqAU5suiGrSul",
        typedElement: ["Francisco Díaz",
            "Consultor de Seguridad",
            "Red Team Operator",
            "Ethical Hacker",
            "Investigador de Seguridad",
            "Malware developer",
            "Pentester",
            "Ingeniería en Ciencias de la Computación"]
    },
    About: {
        ...identity,
        NavTabs: [{
            id: "story",
            name: "About",
            placement: "top"
        },
        {
            id: "skill",
            name: "Skill",
            placement: "bottom"
        },
        {
            id: "education",
            name: "Education",
            placement: "top"
        }],
        about: {
            "tech-stats": "Consultor de Seguridad Informática con amplia experiencia en Red Teaming y Pentesting",
            bio: "Profesional dedicado a la seguridad informática, enfocado en la mejora continua y la atención a los detalles. Especializado en la identificación y explotación de vulnerabilidades en sistemas críticos, con una sólida experiencia en la emulación de amenazas avanzadas.",
            "Toolkit": [
                "sliver",
                "bloodhound",
                "sharphound",
                "mimikatz",
                "rubeus",
                "powerview",
                "impacket",
                "kerbrute",
                "crackmapexec",
                "Responder.py",
                "invoke-obfuscation",
                "nmap",
                "Burp suite professional",
                "ffuf",
                "sqlmap",
                "wireshark",
                "aircrack-ng",
                "hashcat",
                "gophish",
                "metasploit",
                "ncat",
                "python",
                "bash",
                "jq",
                "awk",
                "sed",
                "curl",
                "powershell",
                "c#",
                "go",
                "rust",
                "docker",
                "terraform",
                "ansible",
                "AWS",
                "Azure",
                "GCP"]
        },
        skills: [
            [
                {
                    skill: "Advanced Threat Emulation",
                    progress: "99"
                },
                {
                    skill: "Red Team Operations",
                    progress: "95"
                },
                {
                    skill: "Offensive Security",
                    progress: "99"
                },
                {
                    skill: "Network & Web Penetration Testing",
                    progress: "99"
                },
                {
                    skill: "Exploitation & Post-Exploitation Techniques",
                    progress: "90"
                }
            ],
            [
                {
                    skill: "Active Directory Security",
                    progress: "85"
                },
                {
                    skill: "Privilege Escalation (Windows & Linux)",
                    progress: "85"
                },
                {
                    skill: "Custom Tool & Exploit Development",
                    progress: "85"
                },
                {
                    skill: "Python & Bash Scripting",
                    progress: "99"
                },
                {
                    skill: "Malware Development",
                    progress: "80"
                }
            ],
            [
                {
                    skill: "PowerShell Scripting",
                    progress: "80"
                },
                {
                    skill: "Web Application Exploitation",
                    progress: "99"
                },
                {
                    skill: "Java Development",
                    progress: "90"
                },
                {
                    skill: "Social Engineering",
                    progress: "90"
                }
            ]
        ], 
        education: [
            {
                animationClass: "Right left",
                delay: "0",
                textAlignment: "right",
                degree: "Ingeniería en Computación",
                college: "Benemérita Universidad Autónoma de Puebla",
                duration: "2010 - 2015",
                percentage: "Promedio: 8.9"
            },
            {
                animationClass: "Left right",
                delay: "0",
                textAlignment: "left",
                degree: "CEH Certified Ethical Hacker",
                college: "EC-Council",
                duration: "Año de finalización: 2016",
                percentage: "Certificado"
            },
            {
                animationClass: "Right left",
                delay: "0",
                textAlignment: "right",
                degree: "GIAC Cloud Penetration Tester (GCPN)",
                college: "Global Information Assurance Certification (GIAC)",
                duration: "Año de finalización: 2021",
                percentage: "Certificado"
            },
            {
                animationClass: "Left right",
                delay: "0",
                textAlignment: "left",
                degree: "Hack The Box Pro Labs: Zephyr",
                college: "Hack The Box",
                duration: "Fecha estimada de finalización: Mayo 2024",
                percentage: "Certificado"
            },
            {
                animationClass: "Right left",
                delay: "0",
                textAlignment: "right",
                degree: "Microsoft Technology Associate (MTA): Fundamentos de Desarrollo de Software (C#)",
                college: "Microsoft",
                duration: "Año de finalización: 2015",
                percentage: "Certificado"
            },
            {
                animationClass: "Left right",
                delay: "0",
                textAlignment: "left",
                degree: "Stealing the Crown – Active Directory Attacks",
                college: "EKOParty Buenos Aires",
                duration: "Año de finalización: 2019",
                percentage: "Completado"
            },
            {
                animationClass: "Right left",
                delay: "0",
                textAlignment: "right",
                degree: "Introduction to Software Vulnerability Exploitation",
                college: "EKOParty Buenos Aires",
                duration: "Año de finalización: 2018",
                percentage: "Completado"
            },
            {
                animationClass: "Left right",
                delay: "0",
                textAlignment: "left",
                degree: "Cisco Certified Network Associate (CCNA) Training",
                college: "Cisco Networking Academy",
                duration: "Curso completado: Septiembre 2015",
                percentage: "Curso completado"
            }
        ]
        
    },
    Quote: [
        {
            "author": "Nassim Nicholas Taleb",
            "quote": "The dark side of complexity is that it makes things invisible, but to those who navigate complexity, it offers unlimited opportunities."
        },
        {
            "author": "Eddie Vedder",
            "quote": "I know all the rules but the rules do not know me."
        },
        {
            "author": "Warren Buffet",
            "quote": "Risk comes from not knowing what you're doing."
        },
        {
            "author": "Nikola Tesla",
            "quote": "The present is theirs; the future, for which I really worked, is mine."
        },
        {
            "author": "Friedrich Nietzsche",
            "quote": "He who fights with monsters should be careful lest he thereby become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you."
        },
        {
            "author": "Sun Tzu",
            "quote": "Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt."
        },
        {
            "author": "Sun Tzu",
            "quote": "If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle."
        },
    {
        quote: "Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road.",
        author: "Stewart Brand"
    }],
    Portfolio: [{
        animationClass: "rotateInDownLeft",
        delay: "0.5s",
        project: "AI-Image-Caption-Bot",
        description: "AI Image Caption Bot is a special project which uses almost every topic of data science and Machine Learning. In this project, we can upload image and bot will predict the caption of that image.",
        placement: "top"
    },
    {
        animationClass: "slideInUp",
        delay: "0",
        project: "AI-Music-Generation",
        description: "In this project we were able to generates melodious sound of piano by mixing different nodes and chords By training on LSTM Model.",
        placement: "top"
    },
    {
        animationClass: "rotateInDownRight",
        delay: "0.5s",
        project: "School-Donation-Analysis",
        description: "Using School Donation Datasets, I was able to Analysed and Visualized using numPy and pandas & Plotly, Cufflinks and Matplotlib respectively.",
        placement: "top"
    },
    {
        animationClass: "rotateInUpLeft",
        delay: "0.5s",
        project: "A-Social-Media",
        description: " A Social Media Is an application developed with MEAN Stack Development. In this application, you can make friends, besties and enemy, allow user to share their thoughts as post and can chat through one- to - one messages.",
        placement: "bottom"
    },
    {
        animationClass: "slideInDown",
        delay: "0",
        project: "E-Commerce-Site",
        description: "Created An E-Commerce Site using Reactjs, REDUX, HTML, CSS and JavaScript where a user can buy product, add it to cart and added PayPal Button to make payment.",
        placement: "bottom"
    },
    {
        animationClass: "rotateInUpRight",
        delay: "0.5s",
        project: "URL-Shortner",
        description: "Created An Web Application which help us to shorten the URL by using Firebase Firestore as Database and Bootstrap for Front end.",
        placement: "bottom"
    }],
    Training: {
        background: "footer-cloud.svg",
        sun: ["stream z-1 d-block",
            "stream z-1 d-block",
            "stream z-1 d-block",
            "stream z-1 d-block",
            "stream z-1 d-block",
            "stream z-1 d-block",
            "stream z-1 d-block",
            "stream z-1 d-block",
            "circle z-2 height-full width-full",
            "circle-night z-2 height-full width-full"],
        developTime: [{
            time: "1",
            style: {
                left: "66px",
                top: "-10px"
            }
        },
        {
            time: "2",
            style: {
                left: "88px",
                top: "-20px"
            }
        },
        {
            time: "3",
            style: {
                left: "110px",
                top: "-10px"
            }
        }],
        moon: {
            dot: ["dot",
                "dot",
                "dot"],
            name: ["Moon-dark",
                "Moon"]
        },
        training: [[{
            class: "Left",
            title: "Theatron",
            subtitle: "Internship - Android Development",
            date: "10 Feb,2020 - 30 Sept, 2020",
            description: "Theatron is an entertainment Android Application which I created using Kotlin with Firebase as Backend and Deployed It On Play Store.",
            link: "1Ahg2Gzz8oLBs495N4PT9a1fszNBcJUB9"
        },
        {
            class: "Down",
            title: "Android Development",
            subtitle: "Classroom Training - Coding Blocks",
            date: "21 Aug,2019 - 17 Dec, 2019",
            description: "The training included the basics and practical application of Android Development which included a lot of projects on Integrating API's and Firebase in Kotlin.",
            link: "1lSc9it--0LooJpp6A7riggSFZPVq2vn6"
        },
        {
            class: "Right",
            title: "Talent Decrypt",
            subtitle: "Internship - Data Science",
            date: "12 Jan,2021 - 1 Oct, 2021",
            description: "In TalentDecrypt, We worked on candidate suspicious activity detection which included Face Detection & Recognition and Object Detection to detect any abnormal activity.",
            link: "17-DFgOcSbG0xDdktRRiiSUSSK33WUFMe"
        }],
        [{
            class: "Left",
            title: "Complete Web Developer Master Course",
            subtitle: "Online Training - Udemy",
            date: "1 July 2020 - 25 Aug 2020",
            description: "Complete Web Development course which focused on both Front and Back-end Development, starting with HTML, CSS, JavaScript to MEAN Stack Development.",
            link: "12THg9_3-KtjSRe7pLfw27_pqwkDtSQMx"
        },
        {
            class: "Up",
            title: "Python Bootcamp",
            subtitle: "Online Training - Udemy",
            date: "15 Oct,2020 - 27 Dec, 2020",
            description: "Python bootcamp served as a window for me for the Advanced Python Developer, as it helped me to start applying my knowledge in more Advance and GUI Part.",
            link: "1AdmAM40vQ_mfzz7pVUcUea2S38E6Epuz"
        },
        {
            class: "Right",
            title: "Data Science",
            subtitle: "Classroom/Live Training - Coding Blocks",
            date: "29 Dec,2019 - 05 May, 2020",
            description: "This course covered all the intuitions and theoretical aspects of Machine Learning and Data Science which included all the types of visualisation, analysis etc.",
            link: "1lZmX1wmZLo8ksY6NsrFM9cNfL8HWdMBn"
        }]]
    },
    Achievement: [{ animationClass: "Left", description: "7th place in Cisco Netriders 2014 latam contest", image: "Cisco" },
        { animationClass: "Up", description: "Identified and replicated Vulnerabilities in the mexican financial system in 2015", image: "SPEI" },
        { animationClass: "Right", description: "Domain Admin in one of the most secure and biggest financial institution in México", image: "DataScience" }],
        Contact: [
            {
                animationClass: "Left", title: "Location", icon: "fas fa-street-view", links: [
                    {
                        type: "https://maps.google.com/?q=", title: "Puebla, México"
                    }
                ]
            },
            {
                animationClass: "Up", title: "Contact Number", icon: "fas fa-mobile-alt", links: [
                    { type: "tel:", title: "ask" }
                ]
            },
            {
                animationClass: "Right", title: "E-Mail", icon: "far fa-envelope", links: [
                    {
                        type: "mailto:", title: "cthulhu@diax.mx"
                    }
                ]
            }
        ],
        Social: [[
            { link: "https://github.com/cthulhu897", class: "fab fa-github", name: "GitHub", placement: "left" },
            { link: "https://www.linkedin.com/in/cthulhu897", class: "fab fa-linkedin-in", name: "LinkedIn", placement: "top" },
            { link: "https://gist.github.com/cthulhu897", class: "fas fa-laptop-code", name: "Gist", placement: "top" },
            { link: "https://twitter.com/cthulhu897", class: "fab fa-twitter", name: "Twitter", placement: "right" }
        ],
        [ ]],
        Footer: {
            dev: { name: "dev", link: "https://dev.to/cthulhu897", image: "monkey" },
            citation: { ...identity, animationClass: "flipInX", icon: "fas fa-heart" }
        }
    };