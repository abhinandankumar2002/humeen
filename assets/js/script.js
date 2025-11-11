document.addEventListener('DOMContentLoaded', function () {
    // Services data - easily extendable
    const servicesData = [
        {
            icon: '🎯',
            title: 'Search Engine Optimization',
            description: 'Improve your website visibility and rank higher on search engines to get found by potential customers.',
            features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Local SEO'],
            link: '#'
        },
        {
            icon: '💬',
            title: 'Social Media Marketing',
            description: 'Build meaningful connections with your audience and engage customers across social platforms.',
            features: ['Content Strategy', 'Community Management', 'Paid Social Ads', 'Analytics & Reporting'],
            link: '#'
        },
        {
            icon: '📈',
            title: 'Growth Strategy',
            description: 'Data-driven approaches to drive sustainable growth and maximize your marketing ROI.',
            features: ['Performance Analytics', 'Conversion Optimization', 'Marketing Automation', 'ROI Tracking'],
            link: '#'
        },
        {
            icon: '🎨',
            title: 'Content Marketing',
            description: 'Create compelling content that resonates with your audience and builds brand authority.',
            features: ['Content Strategy', 'Blog Writing', 'Video Production', 'Content Distribution'],
            link: '#'
        },
        {
            icon: '📱',
            title: 'Digital Advertising',
            description: 'Reach your target audience with precision through strategic paid advertising campaigns.',
            features: ['PPC Management', 'Display Advertising', 'Retargeting', 'Campaign Optimization'],
            link: '#'
        },
        {
            icon: '🔍',
            title: 'Analytics & Insights',
            description: 'Turn data into actionable insights to make informed marketing decisions and drive growth.',
            features: ['Data Analysis', 'Performance Tracking', 'Competitor Analysis', 'Strategic Reporting'],
            link: '#'
        }
    ];

    const servicesGrid = document.querySelector('.services-grid');

    // Function to create service card
    function createServiceCard(service) {
        return `
                <div class="service-card">
                    <div class="service-icon">${service.icon}</div>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                    <ul class="service-features">
                        ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <a href="${service.link}" class="service-link">
                        Learn More
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M5 12h14m-7-7l7 7-7 7"/>
                        </svg>
                    </a>
                </div>
            `;
    }

    // Function to initialize services grid
    function initServicesGrid() {
        servicesGrid.innerHTML = servicesData.map(service => createServiceCard(service)).join('');
    }

    // Function to add new service
    function addService(serviceData) {
        servicesData.push(serviceData);
        initServicesGrid();
    }

    // Function to remove service by index
    function removeService(index) {
        if (index >= 0 && index < servicesData.length) {
            servicesData.splice(index, 1);
            initServicesGrid();
        }
    }

    // Function to get all services
    function getServices() {
        return [...servicesData];
    }

    // Initialize the services grid
    initServicesGrid();

    // Make functions available globally for easy management
    window.servicesManager = {
        addService,
        removeService,
        getServices,
        initServicesGrid
    };
});


document.addEventListener('DOMContentLoaded', function () {
    // Image loading and optimization
    const serviceImages = document.querySelectorAll('.service-image');

    serviceImages.forEach(img => {
        // Add loading state
        img.addEventListener('load', function () {
            this.style.opacity = '1';
        });

        // Set initial opacity for fade-in effect
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease, transform 0.4s ease';
    });

    // Intersection Observer for animation on scroll
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service columns for scroll animations
    const serviceColumns = document.querySelectorAll('.service-column');
    serviceColumns.forEach(column => {
        column.style.opacity = '0';
        column.style.transform = 'translateY(30px)';
        column.style.transition = 'all 0.6s ease';
        observer.observe(column);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered animation for each concept box
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 100);
            }
        });
    }, observerOptions);

    // Observe concept boxes for scroll animations
    const conceptBoxes = document.querySelectorAll('.concept-box');
    conceptBoxes.forEach((box, index) => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(30px) scale(0.9)';
        box.style.transition = 'all 0.6s ease';
        observer.observe(box);
    });

    // Add click handlers for additional interactivity
    conceptBoxes.forEach(box => {
        box.addEventListener('click', function () {
            const title = this.querySelector('.concept-title').textContent;
            console.log(`Clicked on: ${title}`);
            // Add your custom click behavior here
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered animation for each content div
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, observerOptions);

    // Observe content divs for scroll animations
    const contentDivs = document.querySelectorAll('.content-div');
    contentDivs.forEach((div, index) => {
        div.style.opacity = '0';
        div.style.transform = 'translateY(50px)';
        div.style.transition = 'all 0.8s ease';
        observer.observe(div);
    });

    // Image loading optimization
    const contentImages = document.querySelectorAll('.content-image');
    contentImages.forEach(img => {
        img.addEventListener('load', function () {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease, transform 0.4s ease';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Testimonials data
    const testimonialsData = [
        {
            company: "TechCorp Inc",
            text: "HUMEEN transformed our digital presence completely. Our organic traffic increased by 240% in just 6 months, and we're seeing consistent growth in qualified leads.",
            image: "https://via.placeholder.com/60/DE7415/FFFFFF?text=TC",
            name: "Sarah Johnson",
            designation: "Marketing Director"
        },
        {
            company: "StartupXYZ",
            text: "The data-driven approach and strategic planning helped us scale from 0 to 10,000 customers in our first year. Incredible results!",
            image: "https://via.placeholder.com/60/0068A6/FFFFFF?text=SX",
            name: "Mike Chen",
            designation: "CEO & Founder"
        },
        {
            company: "GlobalBrand Co",
            text: "Their multi-channel strategy unified our messaging across all platforms. We've seen a 180% ROI on our marketing spend since partnering with HUMEEN.",
            image: "https://via.placeholder.com/60/6F6E5E/FFFFFF?text=GB",
            name: "Emily Rodriguez",
            designation: "Global Marketing Head"
        },
        {
            company: "EcommercePro",
            text: "The SEO optimization and content strategy doubled our conversion rates. Our online sales have never been better!",
            image: "https://via.placeholder.com/60/DE7415/FFFFFF?text=EP",
            name: "David Kim",
            designation: "E-commerce Manager"
        },
        {
            company: "InnovateLabs",
            text: "HUMEEN's creative team delivered stunning visuals that perfectly captured our brand voice. Engagement rates are through the roof!",
            image: "https://via.placeholder.com/60/0068A6/FFFFFF?text=IL",
            name: "Lisa Wang",
            designation: "Creative Director"
        },
        {
            company: "Enterprise Solutions",
            text: "The analytics and conversion optimization work provided insights we never had before. Data-driven decisions are now our standard.",
            image: "https://via.placeholder.com/60/6F6E5E/FFFFFF?text=ES",
            name: "Robert Brown",
            designation: "VP of Operations"
        },
        {
            company: "DigitalFirst",
            text: "From social media management to email campaigns, every aspect of our digital marketing is now streamlined and effective.",
            image: "https://via.placeholder.com/60/DE7415/FFFFFF?text=DF",
            name: "Amanda White",
            designation: "Digital Marketing Lead"
        },
        {
            company: "GrowthHackers",
            text: "The personal branding coordination helped our executives become thought leaders in our industry. Amazing impact!",
            image: "https://via.placeholder.com/60/0068A6/FFFFFF?text=GH",
            name: "Kevin Patel",
            designation: "Growth Strategist"
        },
        {
            company: "BrandMasters",
            text: "HUMEEN's reputation management services transformed how customers perceive our brand. Reviews and ratings have never been better.",
            image: "https://via.placeholder.com/60/6F6E5E/FFFFFF?text=BM",
            name: "Jessica Lee",
            designation: "Brand Manager"
        }
    ];

    const testimonialsTrack = document.getElementById('testimonialsTrack');

    // Function to create testimonial card
    function createTestimonialCard(testimonial, index) {
        return `
                <div class="testimonial-card" data-index="${index}">
                    <div>
                        <div class="company-name">${testimonial.company}</div>
                        <p class="testimonial-text">"${testimonial.text}"</p>
                    </div>
                    <div class="testimonial-details">
                        <img src="${testimonial.image}" alt="${testimonial.name}" class="client-image">
                        <div class="client-info">
                            <h4 class="client-name">${testimonial.name}</h4>
                            <p class="client-designation">${testimonial.designation}</p>
                        </div>
                    </div>
                </div>
            `;
    }

    // Function to initialize infinite testimonials
    function initInfiniteTestimonials() {
        // Clear existing content
        testimonialsTrack.innerHTML = '';

        // Create multiple sets for seamless infinite loop
        const setsToCreate = 3; // Creates 3 identical sets

        for (let set = 0; set < setsToCreate; set++) {
            testimonialsData.forEach((testimonial, index) => {
                const card = createTestimonialCard(testimonial, index);
                testimonialsTrack.innerHTML += card;
            });
        }
    }

    // Initialize the infinite testimonials
    initInfiniteTestimonials();

    // Pause animation on hover (optional)
    testimonialsTrack.addEventListener('mouseenter', () => {
        testimonialsTrack.style.animationPlayState = 'paused';
    });

    testimonialsTrack.addEventListener('mouseleave', () => {
        testimonialsTrack.style.animationPlayState = 'running';
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const planCards = document.querySelectorAll('.plan-card');
    const planButtons = document.querySelectorAll('.plan-btn');

    // Plan button click handlers
    planButtons.forEach(button => {
        button.addEventListener('click', function () {
            const planName = this.closest('.plan-card').querySelector('.plan-name').textContent;
            const planPrice = this.closest('.plan-card').querySelector('.plan-price').textContent;

            if (planName === 'Enterprise') {
                // Open contact form or redirect to contact page
                console.log('Contact sales for Enterprise plan');
                // Add your contact sales logic here
            } else {
                // Add to cart or proceed to checkout
                console.log(`Selected ${planName} plan for ${planPrice}`);
                // Add your purchase logic here
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered animation for each plan card
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 200);
            }
        });
    }, observerOptions);

    // Observe plan cards for scroll animations
    planCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.95)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered animation for each step box
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 200);
            }
        });
    }, observerOptions);

    // Observe step boxes for scroll animations
    const stepBoxes = document.querySelectorAll('.step-box');
    stepBoxes.forEach((box, index) => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(30px) scale(0.9)';
        box.style.transition = 'all 0.6s ease';
        observer.observe(box);
    });

    // Image loading optimization
    const stepImages = document.querySelectorAll('.step-image');
    stepImages.forEach(img => {
        img.addEventListener('load', function () {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease, transform 0.4s ease';
    });

    // Add click handlers for additional interactivity
    stepBoxes.forEach(box => {
        box.addEventListener('click', function () {
            const heading = this.querySelector('.step-heading').textContent;
            console.log(`Clicked on: ${heading}`);
            // Add your custom click behavior here
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');
    const contactBtn = document.querySelector('.contact-btn');

    // Accordion functionality
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');

        header.addEventListener('click', () => {
            // Close all other items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Contact button functionality
    contactBtn.addEventListener('click', function () {
        // Scroll to contact section or open contact form
        console.log('Contact button clicked');
        // Add your contact functionality here
    });

    // Open first accordion by default
    if (accordionItems.length > 0) {
        accordionItems[0].classList.add('active');
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe FAQ columns for scroll animations
    const faqColumns = document.querySelector('.faq-columns');
    faqColumns.style.opacity = '0';
    faqColumns.style.transform = 'translateY(30px)';
    faqColumns.style.transition = 'all 0.6s ease';
    observer.observe(faqColumns);
});

// Update copyright year automatically
document.addEventListener('DOMContentLoaded', function () {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Update copyright year automatically
document.addEventListener('DOMContentLoaded', function () {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Smooth scroll for footer links
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const navButton = document.querySelector('.nav-button');
    const mobileButton = document.querySelector('.mobile-button');

    // Toggle mobile menu
    hamburger.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');

        // Transform hamburger to X when active
        const spans = hamburger.querySelectorAll('span');
        if (mobileMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.transform = 'none';
        });
    });

    // Button click handlers
    navButton.addEventListener('click', function () {
        alert('Get Started button clicked!');
    });

    mobileButton.addEventListener('click', function () {
        alert('Get Started button clicked!');
        mobileMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.transform = 'none';
    });

    // Scroll effect for navbar
    window.addEventListener('scroll', function () {
        const navContainer = document.querySelector('.nav-container');
        const navbar = document.querySelector('.navbar');

        if (window.scrollY > 50) {
            navContainer.style.padding = '10px 0';
            navbar.style.background = 'rgba(255, 255, 255, 0.25)';
        } else {
            navContainer.style.padding = '20px 0';
            navbar.style.background = 'rgba(255, 255, 255, 0.15)';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Customer logos data - easily extendable
    const customerLogos = [
        { type: 'image', src: './assets/images/featured-icons/chat-gpt.png', alt: 'ChatGPT' },
        { type: 'image', src: './assets/images/featured-icons/facebook.png', alt: 'Facebook' },
        { type: 'image', src: './assets/images/featured-icons/meta.png', alt: 'Meta' },
        { type: 'image', src: './assets/images/featured-icons/instagram.png', alt: 'Instagram' },
        { type: 'image', src: './assets/images/featured-icons/search.png', alt: 'Search' },
        { type: 'image', src: './assets/images/featured-icons/amazon.png', alt: 'Amazon' },
        { type: 'image', src: './assets/images/featured-icons/social.png', alt: 'Social' },
        { type: 'image', src: './assets/images/featured-icons/whatsapp.png', alt: 'WhatsApp' },
        { type: 'image', src: './assets/images/featured-icons/youtube.png', alt: 'YouTube' },
        { type: 'image', src: './assets/images/featured-icons/noon.png', alt: 'Dubai Noon' },
        { type: 'image', src: './assets/images/featured-icons/hostinger.png', alt: 'Hostinger' }
    ];

    const sliderTrack = document.getElementById('sliderTrack');

    // Function to create logo element
    function createLogoElement(logo) {
        const logoItem = document.createElement('div');
        logoItem.className = 'logo-item';

        if (logo.type === 'text') {
            const textElement = document.createElement('p');
            textElement.className = 'logo-text';
            textElement.textContent = logo.content;
            logoItem.appendChild(textElement);
        } else if (logo.type === 'image') {
            const imgElement = document.createElement('img');
            imgElement.className = 'logo-image';
            imgElement.src = logo.src;
            imgElement.alt = logo.alt;
            logoItem.appendChild(imgElement);
        }

        return logoItem;
    }

    // Function to initialize slider
    function initSlider() {
        // Clear existing content
        sliderTrack.innerHTML = '';

        // Create multiple sets for seamless looping
        const setsToCreate = 3; // Creates 3 identical sets for smooth looping

        for (let set = 0; set < setsToCreate; set++) {
            customerLogos.forEach(logo => {
                const logoElement = createLogoElement(logo);
                sliderTrack.appendChild(logoElement);
            });
        }

        // Update animation duration based on number of logos
        updateAnimationDuration();
    }

    // Function to update animation duration based on logo count
    function updateAnimationDuration() {
        const logoCount = customerLogos.length;
        const duration = logoCount * 4; // 4 seconds per logo
        document.styleSheets[0].insertRule(`
            @keyframes slide {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-${150 + 60}px * ${logoCount})); }
            }
        `, document.styleSheets[0].cssRules.length);
    }

    // Function to add new logo
    function addLogo(logoData) {
        customerLogos.push(logoData);
        initSlider(); // Reinitialize with new data
    }

    // Function to remove logo by index
    function removeLogo(index) {
        if (index >= 0 && index < customerLogos.length) {
            customerLogos.splice(index, 1);
            initSlider(); // Reinitialize with updated data
        }
    }

    // Function to get all logos
    function getLogos() {
        return [...customerLogos];
    }

    // Initialize the slider
    initSlider();

    // Make functions available globally for easy management
    window.customerSlider = {
        addLogo,
        removeLogo,
        getLogos,
        initSlider
    };
});
