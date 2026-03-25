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
// TODO: Replace profile image in index.html line 67
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
    navAchievements: "Achievements",
    navContact: "Contact",

    // Hero Section
    heroName: "Senior Technology Leader",
    heroTitle: "Senior Technology Leader & AI Transformation Partner",
    heroTagline: "Transforming enterprises through AI innovation and strategic technology leadership",
    ctaPrimary: "Get In Touch",
    ctaSecondary: "Download CV",
    profileImageAlt: "Profile Image",

    // About Section
    aboutTitle: "About Me",
    aboutIntro: "With over 23 years of experience in the technology sector, I specialize in driving AI transformation within financial services organizations. My expertise spans from hands-on technical implementation to strategic program leadership, ensuring that technology initiatives deliver measurable business value.",
    aboutDescription: "I am a hands-on yet strategic technology leader who brings a pragmatic approach to programme leadership. My focus is on bridging the gap between cutting-edge AI capabilities and practical business applications. Currently, I'm deeply engaged in helping organizations navigate the GenAI revolution, from initial strategy through to enterprise-wide adoption and scaling.",
    highlightYears: "23+",
    highlightYearsLabel: "Years Experience",
    highlightProjects: "50+",
    highlightProjectsLabel: "Projects Delivered",
    highlightTransformations: "15+",
    highlightTransformationsLabel: "AI Transformations",

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
            date: "Recent",
            role: "Senior Technology Leader",
            company: "Premier Financial Services Firm",
            description: "Leading enterprise-wide adoption of GenAI, data science, and low-code platforms across the organization",
            achievements: [
                "Established AI governance framework and operating model",
                "Scaled GenAI adoption from pilot to enterprise-wide implementation",
                "Built cross-functional teams to support AI transformation"
            ]
        },
        {
            date: "Recent",
            role: "Transformation Coach",
            company: "Global Investment Bank",
            description: "Coached infrastructure and operations teams through new operating model implementation",
            achievements: [
                "Redesigned operating model for improved efficiency",
                "Implemented DevOps practices across infrastructure teams",
                "Achieved significant reduction in deployment time"
            ]
        },
        {
            date: "Recent",
            role: "Agile & DevOps Advisor",
            company: "Scandinavia's Leading Bank",
            description: "Advised on Agile and DevOps modern engineering practices",
            achievements: [
                "Developed modern engineering roadmap",
                "Implemented CI/CD pipelines across development teams",
                "Established quality assurance frameworks"
            ]
        },
        {
            date: "Recent",
            role: "Automation Enablement Lead",
            company: "Fortune 500 Manufacturer",
            description: "Set up automation-enablement team to drive process optimization",
            achievements: [
                "Built automation capability from ground up",
                "Implemented RPA solutions across business processes",
                "Achieved measurable efficiency improvements"
            ]
        },
        {
            date: "Recent",
            role: "Analytics Service Line Lead",
            company: "Global Industrial Client",
            description: "Built agile analytics service line to support data-driven decision making",
            achievements: [
                "Established analytics team and processes",
                "Delivered multiple high-impact analytics projects",
                "Created data governance framework"
            ]
        },
        {
            date: "Recent",
            role: "Managed Service Co-Lead",
            company: "UK Bank",
            description: "Co-led setup and scaling of large managed service operation",
            achievements: [
                "Scaled managed service to support multiple business units",
                "Established service level agreements and governance",
                "Built high-performing delivery teams"
            ]
        },
        {
            date: "Recent",
            role: "Portfolio Manager",
            company: "International Markets",
            description: "Managed ~90-person portfolio delivering to 30+ international markets",
            achievements: [
                "Coordinated delivery across multiple geographies",
                "Optimized resource allocation and utilization",
                "Maintained high delivery quality across diverse markets"
            ]
        },
        {
            date: "Recent",
            role: "Full-stack IT Consultant",
            company: "Global Financial Services",
            description: "Worked as full-stack IT consultant on global roll-out of corporate payments platform",
            achievements: [
                "Contributed to platform architecture and implementation",
                "Supported deployment across multiple regions",
                "Resolved complex technical challenges"
            ]
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

    // Achievements Section
    achievementsTitle: "Achievements & Awards",
    achievements: [
        {
            icon: "🏆",
            title: "AI Transformation Leadership",
            description: "Successfully led enterprise-wide AI transformation initiatives at major financial services organizations",
            year: "Recent"
        },
        {
            icon: "⭐",
            title: "Programme Excellence",
            description: "Delivered complex technology programs on time and within budget across multiple geographies",
            year: "Recent"
        },
        {
            icon: "🎖️",
            title: "Innovation Champion",
            description: "Recognized for driving innovation and adopting emerging technologies to solve business challenges",
            year: "Recent"
        },
        {
            icon: "🌟",
            title: "Team Building",
            description: "Built and led high-performing technology teams that consistently delivered exceptional results",
            year: "Recent"
        }
    ],

    // Contact Section
    contactTitle: "Get In Touch",
    contactSubtitle: "Let's Connect",
    contactDescription: "I'm always open to discussing new opportunities, collaborations, or sharing insights about AI and technology leadership.",
    contactEmail: "your.email@example.com",
    contactLocation: "London, UK",
    formLabelName: "Name",
    formLabelEmail: "Email",
    formLabelSubject: "Subject",
    formLabelMessage: "Message",
    formSubmit: "Send Message",

    // Social Links
    // TODO: Update these with actual social media handles
    socialLinks: {
        linkedin: "https://linkedin.com/in/yourprofile",
        twitter: "https://twitter.com/yourhandle",
        github: "https://github.com/yourusername"
    },

    // Footer
    footerName: "Senior Technology Leader",
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
    setTextContent('[data-content="profileImageAlt"]', siteContent.profileImageAlt);
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
 * Render achievements section content
 */
function renderAchievements() {
    setTextContent('[data-content="achievementsTitle"]', siteContent.achievementsTitle);

    const achievementItems = document.querySelectorAll('.achievement-item');
    siteContent.achievements.forEach((achievement, index) => {
        if (achievementItems[index]) {
            const item = achievementItems[index];
            setTextContentInElement(item.querySelector('[data-content*="Icon"]'), achievement.icon);
            setTextContentInElement(item.querySelector('[data-content*="Title"]'), achievement.title);
            setTextContentInElement(item.querySelector('[data-content*="Description"]'), achievement.description);
            setTextContentInElement(item.querySelector('[data-content*="Year"]'), achievement.year);
        } else {
            console.warn(`Achievement item index ${index} not found in HTML. Consider adding more achievements.`);
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
    setTextContent('[data-content="contactEmail"]', siteContent.contactEmail);
    setTextContent('[data-content="contactLocation"]', siteContent.contactLocation);
    setTextContent('[data-content="formLabelName"]', siteContent.formLabelName);
    setTextContent('[data-content="formLabelEmail"]', siteContent.formLabelEmail);
    setTextContent('[data-content="formLabelSubject"]', siteContent.formLabelSubject);
    setTextContent('[data-content="formLabelMessage"]', siteContent.formLabelMessage);
    setTextContent('[data-content="formSubmit"]', siteContent.formSubmit);
    
    // Update email link
    const emailLink = document.querySelector('.contact-link[href^="mailto:"]');
    if (emailLink) {
        emailLink.href = `mailto:${siteContent.contactEmail}`;
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
        navAchievements: siteContent.navAchievements,
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
    const animatedElements = document.querySelectorAll('.section-title, .focus-card, .skill-item, .experience-item, .case-study-card, .education-item, .achievement-item');
    
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
// FORM VALIDATION
// ============================================

/**
 * Initialize contact form validation
 */
function initFormValidation() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm(form)) {
                // Form is valid - in production, you would send to server here
                alert('Thank you for your message! This is a demo form - no data was sent.');
                form.reset();
            }
        });
        
        // Real-time validation
        const formInputs = form.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                // Clear error on input
                this.classList.remove('error');
                const errorMessage = this.parentNode.querySelector('.error-message');
                if (errorMessage) {
                    errorMessage.remove();
                }
            });
        });
    }
}

/**
 * Validate entire form
 */
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

/**
 * Validate individual form field
 */
function validateField(field) {
    // Remove existing error
    field.classList.remove('error');
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    let isValid = true;
    let errorMessage = '';
    
    // Check required fields
    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
        errorMessage = 'This field is required';
    }
    
    // Email validation
    if (field.type === 'email' && field.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value.trim())) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    
    // Minimum length for message
    if (field.tagName === 'TEXTAREA' && field.value.trim() && field.value.trim().length < 10) {
        isValid = false;
        errorMessage = 'Message must be at least 10 characters';
    }
    
    // Display error if validation failed
    if (!isValid) {
        field.classList.add('error');
        const errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        errorElement.textContent = errorMessage;
        field.parentNode.appendChild(errorElement);
    }
    
    return isValid;
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
    renderAchievements();
    renderContact();
    renderFooter();
    
    // Initialize navigation and scroll
    initSmoothScroll();
    initMobileNavigation();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize form validation
    initFormValidation();
    
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
