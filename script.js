/**
 * script.js - Interactive functionality and content management for personal technology leadership & AI portfolio website
 * This file handles dynamic content rendering, navigation, animations, and form validation
 */

// ============================================
// SITE CONTENT OBJECT
// ============================================
// Centralized content management - edit this object to update site content
// TODO: Add/edit gigs, case studies, skills, achievements as needed
// TODO: Update CV file link in index.html line 61
// TODO: Update social handles below
const siteContent = {
    // Navigation
    brandName: "Portfolio",
    navHome: "Home",
    navAbout: "About",
    navFocus: "Focus",
    navSkills: "Skills",
    navExperience: "Experience",
    navCaseStudies: "Case Studies",
    navEducation: "Education",
    navContact: "Contact",

    // Hero Section
    heroName: "Technology Leader -  Digital & AI Transformation ",
    heroTitle: "Worked across engineering, cloud, and large‑scale transformation, now focused on turning AI from hype into production",
    heroTagline: "I help technology and business units transform into simpler, smarter and safer delivery units by leveraging technology.He has two decades of global experience driving digital transformation across financial services - leveraging technology to enable better outcomes for clients. Currently , he leads the Innovation COE for a global asset management firm working closely with business users - focusing on AI solution delivery and adoption using emerging technology stack. He remains a hands-on geek.",
    ctaPrimary: "Get In Touch",
    ctaSecondary: "Download CV",
    profileImageAlt: "Profile Image",

    // About Section
    aboutTitle: "About Me",
    aboutIntro: "With over 23 years of experience in the technology sector, I specialize in driving AI transformation within financial services organizations. My expertise spans from hands-on technical implementation to strategic program leadership, ensuring that technology initiatives deliver measurable business value.",
    aboutDescription: "I am a hands-on yet strategic technology leader who brings a pragmatic approach to programme leadership. My focus is on bridging the gap between cutting-edge AI capabilities and practical business applications. Currently, I'm deeply engaged in helping organizations navigate the GenAI revolution, from initial strategy through to enterprise-wide adoption and scaling.",
    highlightYears: "23+",
    highlightYearsLabel: "Years Experience",
    highlightProjects: "12+",
    highlightProjectsLabel: "Initiatives Delivered",
    highlightTransformations: "5+",
    highlightTransformationsLabel: "Digital Transformations",

    // Focus Areas
    focusTitle: "Focus Areas",
    focusAreas: [
        {
            icon: "🎯",
            title: "Enterprise-wide GenAI Adoption",
            description: "Leading comprehensive AI transformation programs from strategy to implementation across financial services organizations"
        },
        {
            icon: "🚀",
            title: "Technology-led Innovation",
            description: "Driving innovation through emerging technologies, data science, and low-code platforms"
        },
        {
            icon: "💼",
            title: "Programme Leadership",
            description: "Managing complex technology programs with focus on delivery governance and quality frameworks"
        },
        {
            icon: "🤖",
            title: "AI Strategy & Implementation",
            description: "Developing and executing AI strategies that align with business objectives and regulatory requirements"
        },
        {
            icon: "📊",
            title: "Agile & DevOps Transformation",
            description: "Transforming engineering practices and operating models for faster, more reliable delivery"
        },
        {
            icon: "🔐",
            title: "Digital Transformation",
            description: "Leading end-to-end digital transformation initiatives with measurable business impact"
        }
    ],

    // Skills Section
    skillsTitle: "Skills & Expertise",
    skillsCategories: [
        {
            title: "AI & GenAI",
            skills: ["LLM Tooling", "GenAI Platforms", "AI Strategy", "Automation", "Machine Learning", "Data Science"]
        },
        {
            title: "Cloud & DevOps",
            skills: ["AWS", "Azure", "DevOps", "Cloud-native Architecture", "CI/CD", "Infrastructure as Code"]
        },
        {
            title: "Enterprise Transformation",
            skills: ["Agile Methodologies", "Digital Transformation", "Operating Model Change", "Change Management", "Strategic Planning"]
        },
        {
            title: "Operating Model & Ways of Working",
            skills: ["Programme Leadership", "Delivery Governance", "Quality Frameworks", "Team Building", "Stakeholder Management"]
        }
    ],

    // Experience/Engagements Section
    experienceTitle: "Professional Engagements",
    engagements: [
        {
            date: "2025 – present",
            role: "Technology Solutions Manager - Innovation Centre of Excellence (GenAI, Data Science, Lo-Code)",
            company: "Current Role",
            description: "Leading enterprise-wide adoption of generative AI, data science, and no-code to transform asset management operations, directing the Innovation CoE, driving AI deployment across investment workflows, and democratizing analytics via no-code platforms.",
            achievements: []
        },
        {
            date: "2025",
            role: "Global Technology Services Provider",
            company: "Consulting Engagement",
            description: "Delivery review and improvement of GenAI platform and pre-sales support – Delivery review of a GenAI sandbox platform to accelerate innovation and improve customer engagement and retention.",
            achievements: []
        },
        {
            date: "2020",
            role: "Ways of Working and Operating Model Transformation",
            company: "Global Investment Bank",
            description: "Ways of working and operating model transformation for enterprise infrastructure – Coaching/consulting across fleets on new operating model, Agile advisory, scaling methods, enabling 3 global infra platforms, 30 fleets, 400 teams with double‑digit lead-time improvement.",
            achievements: []
        },
        {
            date: "2020",
            role: "Learning and Personal Break During the Pandemic",
            company: "Professional Development",
            description: "AWS cloud architect and Azure certifications, hands-on Terraform and blockchain smart contracts.",
            achievements: []
        },
        {
            date: "2018 – 2020",
            role: "DevOps and Agile Transformation",
            company: "Leading Scandinavian Bank",
            description: "DevOps and Agile transformation – Shaped and scaled ways-of-working strategy, modern engineering for infra teams, multi-million NOK savings via tooling optimisation.",
            achievements: []
        },
        {
            date: "2017 – 2018",
            role: "Global DevOps and Agile Transformation",
            company: "Global Chemical Manufacturer",
            description: "Global DevOps and Agile transformation – Helped launch enterprise-wide DevOps transformation strategy across a large global manufacturer.",
            achievements: []
        },
        {
            date: "2016 – 2017",
            role: "DevOps Transformation",
            company: "Global Insurance and Banking Group",
            description: "DevOps transformation of a 600-member IT team for global insurance – Operating model change to squads, automation across open systems/mainframes/AS400, scaled Agile ways of working.",
            achievements: []
        },
        {
            date: "2016",
            role: "DevOps Maturity Assessment",
            company: "National Postal & Logistics Organisation",
            description: "DevOps maturity assessment – Assessed DevOps state and recommended improvements.",
            achievements: []
        },
        {
            date: "2016",
            role: "Agile Analytics Service Line Setup",
            company: "Global Energy & Resources Company",
            description: "Setup of an Agile Analytics Service line – Built Agile analytics delivery framework on SAP HANA/Hadoop on AWS, reducing time-to-query from 3 months to 2 weeks.",
            achievements: []
        },
        {
            date: "2016",
            role: "Agile/DevOps Transformation Consultant",
            company: "UK-based Life & Pensions Provider",
            description: "Agile/DevOps transformation consultant – Formulated and kick-started an Agile & DevOps-focused innovation roadmap.",
            achievements: []
        },
        {
            date: "2015 – 2016",
            role: "Delivery Management",
            company: "Major UK Retail and Commercial Bank",
            description: "Delivery management of critical batch testing work stream – Managed testing for a major bank de-merger batch stream.",
            achievements: []
        },
        {
            date: "2015",
            role: "Quality Architect",
            company: "Central Government Department",
            description: "Quality Architect for multiple DevOps infra automation squads – Test strategy for infra automation; early award-winning infra automation adoption.",
            achievements: []
        },
        {
            date: "2013 – 2014",
            role: "Test Programme Management",
            company: "UK Building Society",
            description: "Test programme management for intranet and COREP/FINREP regulatory projects.",
            achievements: []
        },
        {
            date: "2013",
            role: "Test Management",
            company: "Leading UK Health & Beauty Retailer",
            description: "Test Management of multi-site e-commerce rollout to 20+ countries.",
            achievements: []
        },
        {
            date: "2012 – 2013",
            role: "Agile Delivery Management",
            company: "European Payments Network",
            description: "Agile Delivery Management of Digital Wallet rollout – Reduced time-to-market from 9 to 3 months; early at-scale Agile rollout in European FS.",
            achievements: []
        },
        {
            date: "2011 – 2012",
            role: "Consulting Assignments",
            company: "Multiple European Media and Financial Services Clients",
            description: "Short consulting assignments; set up European Test Consulting practice.",
            achievements: []
        },
        {
            date: "2010",
            role: "Portfolio Delivery Management",
            company: "Global Payments & Card Services Provider",
            description: "Portfolio delivery management of a 90-person test portfolio – Recovered a managed service; margins from negative to double-digit.",
            achievements: []
        },
        {
            date: "2007 – 2009",
            role: "Delivery Management and Assurance",
            company: "Major UK Banking Group",
            description: "Delivery management and assurance roles – QA oversight of key programmes, recovery of troubled programmes, ramp-up of managed test service from 10 to ~800 people.",
            achievements: []
        },
        {
            date: "2005 – 2007",
            role: "Full-time MBA in Information Management",
            company: "Leading Indian Business School",
            description: "Awards and leadership in experiential learning and rural banking/tourism initiatives.",
            achievements: []
        },
        {
            date: "2001 – 2005",
            role: "Full-stack IT Consultant",
            company: "International Financial Institution",
            description: "Full stack IT consultant for global corporate payment system – Built and rolled out payment system across 10 African markets; major offshore transition effort.",
            achievements: []
        },
        {
            date: "2000 – 2001",
            role: "Software Developer",
            company: "National Central Bank",
            description: "Software developer for a greenfield securities trading and settlement platform – C++/Java on mainframes for messaging/security in a critical government securities system.",
            achievements: []
        }
    ],

    // Case Studies Section
    caseStudiesTitle: "Case Studies",
    caseStudies: [
        {
            title: "Enterprise GenAI Transformation",
            summary: "Led the adoption of GenAI across a premier financial services firm, establishing governance frameworks and scaling from pilot to enterprise-wide implementation.",
            tags: ["GenAI", "Financial Services", "Enterprise Scale"],
            imageAlt: "GenAI Transformation Case Study",
            linkText: "Read More →",
            problem: "Organization needed to adopt GenAI capabilities while maintaining regulatory compliance and managing risks",
            approach: "Established comprehensive AI governance framework, built cross-functional teams, and implemented phased rollout strategy",
            outcome: "Successfully scaled GenAI adoption across the enterprise with measurable productivity improvements and strong risk controls"
        },
        {
            title: "DevOps Operating Model Transformation",
            summary: "Coached infrastructure and operations teams at a global investment bank through a complete operating model transformation.",
            tags: ["DevOps", "Operating Model", "Financial Services"],
            imageAlt: "DevOps Transformation Case Study",
            linkText: "Read More →",
            problem: "Legacy infrastructure and siloed teams were slowing down delivery and increasing operational risk",
            approach: "Implemented DevOps practices, redesigned operating model, and established new ways of working across teams",
            outcome: "Achieved significant reduction in deployment time, improved system reliability, and enhanced team collaboration"
        },
        {
            title: "Analytics Service Line Build",
            summary: "Built an agile analytics service line from scratch for a global industrial client to support data-driven decision making.",
            tags: ["Analytics", "Agile", "Data Science"],
            imageAlt: "Analytics Service Line Case Study",
            linkText: "Read More →",
            problem: "Client lacked centralized analytics capability and data governance framework",
            approach: "Established analytics team, implemented agile processes, and created data governance and quality frameworks",
            outcome: "Delivered multiple high-impact analytics projects and established sustainable analytics capability"
        }
    ],

    // Education Section
    educationTitle: "Education & Certifications",
    education: [
        {
            icon: "🎓",
            degree: "B.Tech in Computer Engineering",
            institution: "SPJIMR, Mumbai",
            year: "Graduation Year"
        },
        {
            icon: "📜",
            degree: "MBA in Information Management",
            institution: "SPJIMR, Mumbai",
            year: "Graduation Year"
        },
        {
            icon: "📚",
            degree: "AWS Certified Solutions Architect",
            institution: "Amazon Web Services",
            year: "Certification Year"
        },
        {
            icon: "🏅",
            degree: "Azure Solutions Architect Expert",
            institution: "Microsoft",
            year: "Certification Year"
        }
    ],

    // Contact Section
    contactTitle: "Get In Touch",
    contactSubtitle: "Let's Connect",
    contactDescription: "Let's connect and explore how we can collaborate on AI initiatives, technology transformation, or share insights on driving innovation in financial services.",
    contactLocation: "London, UK",

    // Social Links
    socialLinks: {
        linkedin: "https://www.linkedin.com/in/adityavadaganadam/",
        twitter: "https://x.com/adihere",
        github: "https://github.com/adihere"
    },

    // Footer
    footerName: "Technology Leader -  Digital & AI Transformation ",
    footerTagline: "Technology Leadership & AI Transformation",
    footerQuickLinks: "Quick Links",
    footerHome: "Home",
    footerAbout: "About",
    footerExperience: "Experience",
    footerContact: "Contact",
    footerConnect: "Connect",
    footerCopyright: "© 2024 All Rights Reserved"
};

// ============================================
// RENDER FUNCTIONS
// ============================================

/**
 * Render hero section content
 */
function renderHero() {
    setTextContent('[data-content="heroName"]', siteContent.heroName);
    setTextContent('[data-content="heroTitle"]', siteContent.heroTitle);
    setTextContent('[data-content="heroTagline"]', siteContent.heroTagline);
    setTextContent('[data-content="ctaPrimary"]', siteContent.ctaPrimary);
    setTextContent('[data-content="ctaSecondary"]', siteContent.ctaSecondary);
    
    // Set alt attribute on profile image
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.alt = siteContent.profileImageAlt;
    }
}

/**
 * Render about section content
 */
function renderAbout() {
    setTextContent('[data-content="aboutTitle"]', siteContent.aboutTitle);
    setTextContent('[data-content="aboutIntro"]', siteContent.aboutIntro);
    setTextContent('[data-content="aboutDescription"]', siteContent.aboutDescription);
    setTextContent('[data-content="highlightYears"]', siteContent.highlightYears);
    setTextContent('[data-content="highlightYearsLabel"]', siteContent.highlightYearsLabel);
    setTextContent('[data-content="highlightProjects"]', siteContent.highlightProjects);
    setTextContent('[data-content="highlightProjectsLabel"]', siteContent.highlightProjectsLabel);
    setTextContent('[data-content="highlightTransformations"]', siteContent.highlightTransformations);
    setTextContent('[data-content="highlightTransformationsLabel"]', siteContent.highlightTransformationsLabel);
}

/**
 * Render focus areas section content
 */
function renderFocus() {
    setTextContent('[data-content="focusTitle"]', siteContent.focusTitle);

    const focusCards = document.querySelectorAll('.focus-card');
    siteContent.focusAreas.forEach((area, index) => {
        if (focusCards[index]) {
            const card = focusCards[index];
            setTextContentInElement(card.querySelector('[data-content*="Icon"]'), area.icon);
            setTextContentInElement(card.querySelector('[data-content*="Title"]'), area.title);
            setTextContentInElement(card.querySelector('[data-content*="Description"]'), area.description);
        } else {
            console.warn(`Focus card index ${index} not found in HTML. Consider adding more focus areas.`);
        }
    });
}

/**
 * Render skills section content
 */
function renderSkills() {
    setTextContent('[data-content="skillsTitle"]', siteContent.skillsTitle);
    
    const skillsCategories = document.querySelectorAll('.skills-category');
    siteContent.skillsCategories.forEach((category, catIndex) => {
        if (skillsCategories[catIndex]) {
            const catElement = skillsCategories[catIndex];
            const titleElement = catElement.querySelector('.category-title');
            if (titleElement) {
                setTextContentInElement(titleElement, category.title);
            }
            
            const skillsList = catElement.querySelector('.skills-list');
            if (skillsList) {
                // Clear existing skills
                skillsList.innerHTML = '';
                
                // Add new skills
                category.skills.forEach(skill => {
                    const li = document.createElement('li');
                    li.className = 'skill-item';
                    li.textContent = skill;
                    skillsList.appendChild(li);
                });
            }
        } else {
            console.warn(`Skills category index ${catIndex} not found in HTML. Consider adding more skills categories.`);
        }
    });
}

/**
 * Render experience section content
 */
function renderExperience() {
    setTextContent('[data-content="experienceTitle"]', siteContent.experienceTitle);

    const experienceItems = document.querySelectorAll('.experience-item');
    siteContent.engagements.forEach((engagement, index) => {
        if (experienceItems[index]) {
            const item = experienceItems[index];
            setTextContentInElement(item.querySelector('[data-content*="Date"]'), engagement.date);
            setTextContentInElement(item.querySelector('[data-content*="Role"]'), engagement.role);
            setTextContentInElement(item.querySelector('[data-content*="Company"]'), engagement.company);
            setTextContentInElement(item.querySelector('[data-content*="Description"]'), engagement.description);

            // Render achievements
            const achievementsList = item.querySelector('.experience-achievements');
            if (achievementsList) {
                achievementsList.innerHTML = '';
                engagement.achievements.forEach(achievement => {
                    const li = document.createElement('li');
                    li.textContent = achievement;
                    achievementsList.appendChild(li);
                });
            }
        } else {
            console.warn(`Experience item index ${index} not found in HTML. Consider adding more experience items.`);
        }
    });
}

/**
 * Render case studies section content
 */
function renderCaseStudies() {
    setTextContent('[data-content="caseStudiesTitle"]', siteContent.caseStudiesTitle);

    const caseStudyCards = document.querySelectorAll('.case-study-card');
    siteContent.caseStudies.forEach((caseStudy, index) => {
        if (caseStudyCards[index]) {
            const card = caseStudyCards[index];
            setTextContentInElement(card.querySelector('[data-content*="ImageAlt"]'), caseStudy.imageAlt);
            setTextContentInElement(card.querySelector('[data-content*="Title"]'), caseStudy.title);
            setTextContentInElement(card.querySelector('[data-content*="Summary"]'), caseStudy.summary);
            setTextContentInElement(card.querySelector('[data-content*="LinkText"]'), caseStudy.linkText);

            // Render tags
            const tagsContainer = card.querySelector('.case-study-tags');
            if (tagsContainer) {
                tagsContainer.innerHTML = '';
                caseStudy.tags.forEach(tag => {
                    const span = document.createElement('span');
                    span.className = 'tag';
                    span.textContent = tag;
                    tagsContainer.appendChild(span);
                });
            }
        } else {
            console.warn(`Case study card index ${index} not found in HTML. Consider adding more case studies.`);
        }
    });
}

/**
 * Render education section content
 */
function renderEducation() {
    setTextContent('[data-content="educationTitle"]', siteContent.educationTitle);

    const educationItems = document.querySelectorAll('.education-item');
    siteContent.education.forEach((edu, index) => {
        if (educationItems[index]) {
            const item = educationItems[index];
            setTextContentInElement(item.querySelector('[data-content*="Icon"]'), edu.icon);
            setTextContentInElement(item.querySelector('[data-content*="Degree"]'), edu.degree);
            setTextContentInElement(item.querySelector('[data-content*="Institution"]'), edu.institution);
            setTextContentInElement(item.querySelector('[data-content*="Year"]'), edu.year);
        } else {
            console.warn(`Education item index ${index} not found in HTML. Consider adding more education items.`);
        }
    });
}

/**
 * Render contact section content
 */
function renderContact() {
    setTextContent('[data-content="contactTitle"]', siteContent.contactTitle);
    setTextContent('[data-content="contactSubtitle"]', siteContent.contactSubtitle);
    setTextContent('[data-content="contactDescription"]', siteContent.contactDescription);
    setTextContent('[data-content="contactLocation"]', siteContent.contactLocation);
    
    // Update email link if email is provided
    if (siteContent.contactEmail) {
        setTextContent('[data-content="contactEmail"]', siteContent.contactEmail);
        const emailLink = document.querySelector('.contact-link[href^="mailto:"]');
        if (emailLink) {
            emailLink.href = `mailto:${siteContent.contactEmail}`;
        }
    }
    
    // Update social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        const social = link.getAttribute('data-social');
        if (siteContent.socialLinks[social]) {
            link.href = siteContent.socialLinks[social];
        }
    });
}

/**
 * Render footer content
 */
function renderFooter() {
    setTextContent('[data-content="brandName"]', siteContent.brandName);
    setTextContent('[data-content="footerName"]', siteContent.footerName);
    setTextContent('[data-content="footerTagline"]', siteContent.footerTagline);
    setTextContent('[data-content="footerQuickLinks"]', siteContent.footerQuickLinks);
    setTextContent('[data-content="footerHome"]', siteContent.footerHome);
    setTextContent('[data-content="footerAbout"]', siteContent.footerAbout);
    setTextContent('[data-content="footerExperience"]', siteContent.footerExperience);
    setTextContent('[data-content="footerContact"]', siteContent.footerContact);
    setTextContent('[data-content="footerConnect"]', siteContent.footerConnect);
    setTextContent('[data-content="footerCopyright"]', siteContent.footerCopyright);
    
    // Update navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const navMapping = {
        navHome: siteContent.navHome,
        navAbout: siteContent.navAbout,
        navFocus: siteContent.navFocus,
        navSkills: siteContent.navSkills,
        navExperience: siteContent.navExperience,
        navCaseStudies: siteContent.navCaseStudies,
        navEducation: siteContent.navEducation,
        navContact: siteContent.navContact
    };
    
    navLinks.forEach(link => {
        const contentAttr = link.getAttribute('data-content');
        if (navMapping[contentAttr]) {
            link.textContent = navMapping[contentAttr];
        }
    });
    
    // Update footer social links
    const footerSocialLinks = document.querySelectorAll('.footer-social-link');
    footerSocialLinks.forEach(link => {
        const social = link.getAttribute('data-social');
        if (siteContent.socialLinks[social]) {
            link.href = siteContent.socialLinks[social];
        }
    });
}

/**
 * Helper function to set text content for elements matching a selector
 */
function setTextContent(selector, text) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.textContent = text;
    });
}

/**
 * Helper function to set text content for a specific element
 */
function setTextContentInElement(element, text) {
    if (element) {
        element.textContent = text;
    }
}

// ============================================
// NAVIGATION & SCROLL
// ============================================

/**
 * Initialize smooth scrolling for navigation links
 */
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

/**
 * Initialize mobile navigation toggle
 */
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Update aria-expanded
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
}

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

/**
 * Initialize scroll-based animations
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.section-title, .focus-card, .skill-item, .experience-item, .case-study-card, .education-item');
    
    // Create intersection observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    animatedElements.forEach(element => {
        element.classList.add('animate-on-scroll');
        observer.observe(element);
    });
}


// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize all functionality when DOM is ready
 */
function init() {
    // Render all content sections
    renderHero();
    renderAbout();
    renderFocus();
    renderSkills();
    renderExperience();
    renderCaseStudies();
    renderEducation();
    renderContact();
    renderFooter();
    
    // Initialize navigation and scroll
    initSmoothScroll();
    initMobileNavigation();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Add scroll event listener for active nav link
    window.addEventListener('scroll', updateActiveNavLink);
    
    console.log('Portfolio website initialized successfully');
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
