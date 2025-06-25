const carsData = [
    {
    id: 1,
    make: "BMW",
    model: "X1",
    year: 2015,
    price: 7250,
    monthlyPayment: 229,
    mileage: 28000,
    fuel: "Gasoline",
    transmission: "Automatic",
    doors: 4,
    badge: "Great Value",
    images: ["Bmw1.jpeg", "Bmw2.jpeg", "Bmw3.jpeg", "Bmw4.jpeg", "Bmw5.jpeg", "Bmw6.jpeg", "Bmw7.jpeg"],
    features: ["Air Conditioning", "Bluetooth Audio", "USB Connectivity", "Electric Mirrors", "Power Steering", "ABS Brakes", "Airbags", "Remote Central Locking", "Cruise Control", "All-Wheel Drive"],
    description: "A stylish and versatile BMW X1 in excellent condition. Perfect for those seeking a premium compact SUV with advanced features and all-wheel-drive capability."
    },
    {
    id: 2,
    make: "Mercedes-Benz",
    model: "A-Class",
    year: 2015,
    price: 8500,
    monthlyPayment: 229,
    mileage: 28000,
    fuel: "Petrol",
    transmission: "Manual",
    doors: 4,
    badge: "Great Value",
    images: ["B1.jpeg","B2.jpeg", "B4.jpeg", "B5.jpeg", "B6.jpeg", "B7.jpeg", "B8.jpeg"],
    features: [
  "Air Conditioning", "Bluetooth Audio", "USB Connectivity", "Electric Mirrors",
  "Power Steering", "ABS Brakes", "Airbags", "Remote Central Locking",
  "Cruise Control", "LED Daytime Running Lights"],
description: "A luxurious and reliable Mercedes-Benz A-Class in excellent condition. Ideal for those seeking a premium compact car with advanced features and great handling."
    },
    {
    id: 3,
    make: "Mercedes-Benz",
    model: "ML-Class",
    year: 2012,
    price: 18995,
    monthlyPayment: 229,
    mileage: 28000,
    fuel: "Petrol",
    transmission: "Automatic",
    doors: 4,
    badge: "Great Value",
    images: ["M3.jpeg", "M4.jpeg", "M5.jpeg", "M6.jpeg", "M7.jpeg", "M8.jpeg"],
    features: ["Air Conditioning", "Bluetooth Audio", "USB Connectivity", "Electric Mirrors", "Power Steering", "ABS Brakes", "Airbags", "Remote Central Locking", "Cruise Control", "All-Wheel Drive"],
    description: "A luxurious and robust Mercedes-Benz ML-Class in excellent condition. Ideal for those seeking a premium SUV with advanced features and all-wheel-drive capability."
    },
    {
    id: 4,
    make: "BMW",
    model: "2 Series",
    year: 2017,
    price: 8495,
    monthlyPayment: 229,
    mileage: 28000,
    fuel: "Petrol",
    transmission: "Manual",
    doors: 2,
    badge: "Great Value",
    images: ["BMWW1.jpeg", "BMWW2.jpeg", "BMWW3.jpeg", "BMWW4.jpeg", "BMWW5.jpeg", "BMWW6.jpeg"],
    features: ["Air Conditioning", "Bluetooth Audio", "USB Connectivity", "Electric Mirrors", "Power Steering", "ABS Brakes", "Airbags", "Remote Central Locking", "Cruise Control", "LED Headlights"],
    description: "A sleek and dynamic BMW 2 Series in excellent condition. Perfect for enthusiasts seeking a premium compact coupe with sporty performance."
    },
    {
    id: 5,
    make: "Honda",
    model: "CR-V",
    year: 2017,
    price: 12995,
    monthlyPayment: 299,
    mileage: 48000,
    fuel: "Petrol",
    transmission: "Automatic",
    doors: 4,
    badge: "Luxury",
    images: ["Suv.jpeg", "suv1.jpeg", "suv2.jpeg", "suv3.jpeg", "suv4.jpeg", "suv5.jpeg"],
    features: ["Premium Leather Interior", "Command Navigation", "Harman Kardon Sound", "Panoramic Sunroof", "Memory Seats", "Automatic Lights", "Rain Sensors", "All-Wheel Drive"],
    description: "A stylish and versatile Honda CR-V with premium luxury features. This sophisticated SUV offers exceptional comfort and all-wheel-drive capability."
    },
   {
    id: 6,
    make: "Toyota",
    model: "Yaris",
    year: 2009,
    price: 2495,
    monthlyPayment: 279,
    mileage: 32000,
    fuel: "Petrol",
    transmission: "Manual",
    doors: 4,
    badge: "Family SUV",
    images: ["Nisan1.jpeg", "nisan2.jpeg", "nisan3.jpeg", "nisan4.jpeg", "nisan5.jpeg", "nisan6.jpeg"],
    features: ["Air Conditioning", "CD Player", "Electric Mirrors", "Power Steering", "ABS Brakes", "Airbags", "Remote Central Locking", "Traction Control"],
    description: "A reliable and compact Toyota Yaris in excellent condition. Ideal for small families or city driving with great fuel efficiency."
    },
    {
    id: 7,
    make: "BMW",
    model: "3 Series",
    year: 2020,
    price: 11495,
    monthlyPayment: 279,
    mileage: 32000,
    fuel: "Petrol",
    transmission: "Automatic",
    doors: 4,
    badge: "Family SUV",
    images: ["BBMW.jpeg", "BBMW1.jpeg", "BBMW2.jpeg", "BBMW3.jpeg", "BBMW4.jpeg", "BBMW5.jpeg"],
    features: ["360° Camera System", "Driving Assistant", "BMW Connected", "Heated Steering Wheel", "Keyless Entry", "Blind Spot Detection", "Traffic Sign Recognition", "Parking Assistant"],
    description: "A sophisticated family sedan with advanced technology and comfort. Perfect for those seeking a premium driving experience with practicality."
    },
{
    id: 8,
    make: "BMW",
    model: "5 Series",
    year: 2008,
    price: 5995,
    monthlyPayment: 279,
    mileage: 32000,
    fuel: "Petrol",
    transmission: "Automatic",
    doors: 4,
    badge: "Family SUV",
    images: ["BMMW.jpeg", "BMMW1.jpeg", "BMMW2.jpeg", "BMMW3.jpeg", "BMMW4.jpeg", "BMMW5.jpeg"],
    features: ["Air Conditioning", "CD Player", "Electric Seats", "Power Steering", "ABS Brakes", "Airbags", "Remote Central Locking", "Cruise Control"],
    description: "A luxurious family sedan with advanced technology and comfort. Perfect for those seeking a premium driving experience with practicality."
}
];

const $ = id => document.getElementById(id);
const $$ = selector => document.querySelectorAll(selector);
const sliderStates = new Map();
let cookieAccepted = false;

const elements = {
    mobileMenuBtn: $('mobileMenuBtn'),
    navMenu: $('navMenu'),
    carsGrid: $('carsGrid'),
    carModal: $('carModal'),
    carModalContent: $('carModalContent'),
    contactForm: $('contactForm'),
    cookieNotice: $('cookieNotice')
};

document.addEventListener('DOMContentLoaded', () => {
    loadCars();
    initMobileMenu();
    initContactForm();
    initCookieNotice();
    initModal();
    initSmoothScrolling();
});

function loadCars() {
    if (!elements.carsGrid) return;
    elements.carsGrid.innerHTML = carsData.map(createCarCard).join('');
    
    elements.carsGrid.addEventListener('click', (e) => {
        const carCard = e.target.closest('.car-card');
        if (carCard) {
            // Prevent opening modal if user clicked on a button
            if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
                return;
            }
            
            const carId = parseInt(carCard.dataset.carId);
            if (carId) {
                openCarModal(carId);
            }
        }
    });
}

function createCarCard(car) {
    const img = car.images?.[0];
    const imageElement = img ? `<img src="${img}" alt="${car.year} ${car.make} ${car.model}" style="display: none;" onload="this.style.display='block';" onerror="this.parentElement.innerHTML='<div class=&quot;no-image&quot;>Image not available</div>';">` : '<div class="no-image">Image not available</div>';
    
    return `<div class="car-card" data-car-id="${car.id}">
        <div class="car-image">
            ${imageElement}
            <div class="car-badge">${car.badge}</div>
        </div>
        <div class="car-info">
            <h3 class="car-title">${car.year} ${car.make} ${car.model}</h3>
            <div class="car-price">£${car.price.toLocaleString()}</div>
            <div class="car-specs">
                <div class="spec-item"><i class="fas fa-tachometer-alt"></i><span>${car.mileage.toLocaleString()} miles</span></div>
                <div class="spec-item"><i class="fas fa-gas-pump"></i><span>${car.fuel}</span></div>
                <div class="spec-item"><i class="fas fa-cogs"></i><span>${car.transmission}</span></div>
                <div class="spec-item"><i class="fas fa-car-side"></i><span>${car.doors} doors</span></div>
            </div>
            <div class="car-actions">
                <button class="btn btn-primary btn-small" onclick="openCarModal(${car.id})">View Details</button>
                <button class="btn btn-secondary btn-small" onclick="contactAboutCar(${car.id})">Enquire Now</button>
            </div>
        </div>
    </div>`;
}

function initModal() {
    if (!elements.carModal) return;
    elements.carModal.addEventListener('click', e => e.target === elements.carModal && closeCarModal());
    document.addEventListener('keydown', e => e.key === 'Escape' && elements.carModal.style.display === 'block' && closeCarModal());
}

function openCarModal(carId) {
    const car = carsData.find(c => c.id === carId);
    if (!car) return;
    
    elements.carModalContent.innerHTML = createModalContent(car);
    elements.carModalContent.querySelector('.close')?.addEventListener('click', closeCarModal);
    initSlider(carId);
    elements.carModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function createModalContent(car) {
    const features = car.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('');
    const images = car.images?.length ? car.images : [];
    
    let imageContent = '';
    if (images.length > 0) {
        const thumbnails = images.map((img, i) => 
            `<img src="${img}" alt="${car.year} ${car.make} ${car.model} - Image ${i + 1}" class="thumbnail ${i === 0 ? 'active' : ''}" data-index="${i}" onclick="changeSlide(${car.id}, ${i})" style="display: none;" onload="this.style.display='inline-block';" onerror="this.style.display='none';">`
        ).join('');
        
        imageContent = `
            <div class="slider-container">
                <div class="main-image">
                    <img src="${images[0]}" alt="${car.year} ${car.make} ${car.model}" id="mainImage-${car.id}" style="display: none;" onload="this.style.display='block';" onerror="this.parentElement.innerHTML='<div class=&quot;no-image-large&quot;>Image not available</div>';">
                </div>
                ${images.length > 1 ? `
                    <button class="slider-arrow left" onclick="prevSlide(${car.id})"><i class="fas fa-chevron-left"></i></button>
                    <button class="slider-arrow right" onclick="nextSlide(${car.id})"><i class="fas fa-chevron-right"></i></button>
                ` : ''}
                <div class="thumbnails">${thumbnails}</div>
            </div>
        `;
    } else {
        imageContent = '<div class="no-image-large">Images not available</div>';
    }
    
    return `<span class="close">&times;</span>
        <div class="car-modal-grid">
            <div class="car-modal-image">
                ${imageContent}
            </div>
            <div class="car-modal-info">
                <h2>${car.year} ${car.make} ${car.model}</h2>
                <div class="car-modal-price">£${car.price.toLocaleString()}</div>
                <div class="car-modal-monthly">From £${car.monthlyPayment}/month</div>
                <div class="car-modal-specs">
                    <div class="car-modal-spec"><i class="fas fa-calendar-alt"></i><span>Year: ${car.year}</span></div>
                    <div class="car-modal-spec"><i class="fas fa-tachometer-alt"></i><span>Mileage: ${car.mileage.toLocaleString()} miles</span></div>
                    <div class="car-modal-spec"><i class="fas fa-gas-pump"></i><span>Fuel: ${car.fuel}</span></div>
                    <div class="car-modal-spec"><i class="fas fa-cogs"></i><span>Transmission: ${car.transmission}</span></div>
                    <div class="car-modal-spec"><i class="fas fa-car-side"></i><span>Doors: ${car.doors}</span></div>
                </div>
            </div>
        </div>
        <div class="car-modal-features">
            <h3>Key Features</h3>
            <ul class="car-features-list">${features}</ul>
        </div>
        <div class="car-description">
            <h3>Description</h3>
            <p>${car.description}</p>
        </div>
        <div class="car-modal-actions">
            <button class="btn btn-primary" onclick="contactAboutCar(${car.id})"><i class="fas fa-envelope"></i> Enquire About This Car</button>
            <button class="btn btn-secondary" onclick="contactAboutCar(${car.id}, true)"><i class="fas fa-car"></i> Book Test Drive</button>
            <button class="btn btn-secondary" onclick="closeCarModal()"><i class="fas fa-arrow-left"></i> Go Back</button>
        </div>`;
}

function initSlider(carId) {
    const car = carsData.find(c => c.id === carId);
    if (!car?.images?.length || car.images.length <= 1) return;
    
    sliderStates.set(carId, {
        currentIndex: 0,
        images: car.images,
        intervalId: setInterval(() => nextSlide(carId), 5000)
    });
    
    const container = document.querySelector('#carModal .slider-container');
    if (container) {
        container.addEventListener('mouseenter', () => pauseSlider(carId));
        container.addEventListener('mouseleave', () => resumeSlider(carId));
    }
}

function changeSlide(carId, index) {
    const state = sliderStates.get(carId);
    if (state) {
        state.currentIndex = index;
        updateSlider(carId);
    }
}

function nextSlide(carId) {
    const state = sliderStates.get(carId);
    if (state) {
        state.currentIndex = (state.currentIndex + 1) % state.images.length;
        updateSlider(carId);
    }
}

function prevSlide(carId) {
    const state = sliderStates.get(carId);
    if (state) {
        state.currentIndex = (state.currentIndex - 1 + state.images.length) % state.images.length;
        updateSlider(carId);
    }
}

function updateSlider(carId) {
    const state = sliderStates.get(carId);
    if (!state) return;
    
    const mainImage = $(`mainImage-${carId}`);
    const thumbnails = $$('#carModal .thumbnail');
    
    if (mainImage) {
        mainImage.src = state.images[state.currentIndex];
        mainImage.style.display = 'none';
        mainImage.onload = () => mainImage.style.display = 'block';
        mainImage.onerror = () => mainImage.parentElement.innerHTML = '<div class="no-image-large">Image not available</div>';
    }
    
    thumbnails.forEach((thumb, i) => thumb.classList.toggle('active', i === state.currentIndex));
}

function pauseSlider(carId) {
    const state = sliderStates.get(carId);
    if (state) clearInterval(state.intervalId);
}

function resumeSlider(carId) {
    const state = sliderStates.get(carId);
    if (state) {
        clearInterval(state.intervalId);
        state.intervalId = setInterval(() => nextSlide(carId), 5000);
    }
}

function closeCarModal() {
    sliderStates.forEach(state => clearInterval(state.intervalId));
    sliderStates.clear();
    elements.carModal.style.display = 'none';
    document.body.style.overflow = '';
}

function contactAboutCar(carId, isTestDrive = false) {
    const car = carsData.find(c => c.id === carId);
    if (!car) return;
    
    const contactSection = $('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            const messageField = document.querySelector('#contactForm textarea[name="message"]');
            if (messageField) {
                if (isTestDrive) {
                    messageField.value = `Hi, I would like to book a test drive for the ${car.year} ${car.make} ${car.model} priced at £${car.price.toLocaleString()}. Please contact me to arrange a suitable time.`;
                } else {
                    messageField.value = `Hi, I'm interested in the ${car.year} ${car.make} ${car.model} priced at £${car.price.toLocaleString()}. Could you please provide more information?`;
                }
                messageField.focus();
            }
        }, 1000);
    }
    
    if (elements.carModal.style.display === 'block') closeCarModal();
}

function initMobileMenu() {
    if (!elements.mobileMenuBtn || !elements.navMenu) return;
    
    elements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    elements.navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileMenu));
    document.addEventListener('click', e => {
        if (!elements.mobileMenuBtn.contains(e.target) && !elements.navMenu.contains(e.target) && elements.navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

function toggleMobileMenu() {
    const isActive = elements.navMenu.classList.toggle('active');
    elements.mobileMenuBtn.querySelector('i').className = isActive ? 'fas fa-times' : 'fas fa-bars';
}

function closeMobileMenu() {
    elements.navMenu.classList.remove('active');
    elements.mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
}

function initContactForm() {
    if (!elements.contactForm) return;
    elements.contactForm.addEventListener('submit', e => {
        e.preventDefault();
        
        const inputs = {
            name: elements.contactForm.querySelector('input[name="name"]')?.value,
            email: elements.contactForm.querySelector('input[name="email"]')?.value,
            phone: elements.contactForm.querySelector('input[name="phone"]')?.value,
            message: elements.contactForm.querySelector('textarea[name="message"]')?.value
        };
        
        if (!inputs.name?.trim() || !inputs.email?.trim() || !inputs.message?.trim()) {
            return alert('Please fill in all required fields.');
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email)) {
            return alert('Please enter a valid email address.');
        }
        
        const submitBtn = elements.contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.innerHTML = '<span class="loading"></span> Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert(`Thank you ${inputs.name}! Your message has been sent successfully. We'll get back to you within 24 hours.`);
            elements.contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

function initCookieNotice() {
    if (!elements.cookieNotice || cookieAccepted) return;
    setTimeout(() => elements.cookieNotice.classList.add('show'), 2000);
}

function acceptCookies() {
    cookieAccepted = true;
    elements.cookieNotice.classList.remove('show');
}

function initSmoothScrolling() {
    $$('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href.startsWith('javascript:')) return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (elements.navMenu?.classList.contains('active')) closeMobileMenu();
            }
        });
    });
}

function showPrivacyPolicy() {
    alert(`PRIVACY POLICY\n\nPrime Motors UK is committed to protecting your privacy. This notice explains how we collect, use, and protect your personal information.\n\nINFORMATION WE COLLECT:\n• Contact details (name, email, phone)\n• Vehicle preferences and enquiries\n• Website usage data (via cookies)\n\nHOW WE USE YOUR INFORMATION:\n• To respond to your enquiries\n• To provide vehicle information and quotes\n• To improve our services\n• For legitimate business purposes\n\nWe do not sell or share your personal information with third parties without your consent, except as required by law.\n\nFor full privacy policy details, visit our showroom or contact us directly.`);
}

function showTerms() {
    alert(`TERMS & CONDITIONS\n\nBy using this website and our services, you agree to the following terms:\n\nVEHICLE INFORMATION:\n• All vehicle details are correct at time of listing\n• Prices are subject to change without notice\n• Vehicles are sold subject to viewing and approval\n\nFINANCE:\n• Finance subject to status and approval\n• Terms and conditions apply\n• Written quotations available on request\n\nLIABILITY:\n• We endeavor to ensure information accuracy\n• No liability for errors or omissions\n• Vehicle condition warranties as stated\n\nFor complete terms and conditions, please visit our dealership or contact us directly.\n\nPrime Motors UK Ltd - Registered in England & Wales`);
}
