document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navigation Background Change on Scroll
    const header = document.getElementById('header');
    const navContainer = document.getElementById('nav-container');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-white/95', 'shadow-md');
            header.classList.remove('bg-white/60', 'shadow-sm');
        } else {
            header.classList.add('bg-white/60', 'shadow-sm');
            header.classList.remove('bg-white/95', 'shadow-md');
        }
    });

    // 2. Donation Button Logic
    const amountBtns = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.getElementById('custom-amount');
    const customAmountWrapper = document.getElementById('custom-amount-wrapper');

    amountBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active classes
            amountBtns.forEach(b => {
                b.classList.remove('border-wedding-500', 'bg-wedding-50', 'text-wedding-600');
                b.classList.add('border-wedding-200', 'text-wedding-700', 'bg-white');
            });
            
            // Add active class to clicked
            const target = e.target;
            target.classList.remove('border-wedding-200', 'text-wedding-700', 'bg-white');
            target.classList.add('border-wedding-500', 'bg-wedding-50', 'text-wedding-600');
            
            const amt = target.getAttribute('data-amount');
            if (amt === 'other') {
                customAmountWrapper.classList.remove('hidden');
                customAmountInput.value = '';
                customAmountInput.focus();
            } else {
                customAmountWrapper.classList.add('hidden');
                customAmountInput.value = amt;
            }
        });
    });

    customAmountInput.addEventListener('input', (e) => {
        // Clear active buttons if custom amount is typed
        amountBtns.forEach(b => {
            b.classList.remove('border-wedding-500', 'bg-wedding-50', 'text-wedding-600');
            b.classList.add('border-wedding-200', 'text-wedding-700', 'bg-white');
        });
    });

    // Modal Elements
    const modal = document.getElementById('extended-donation-modal');
    const modalContent = document.getElementById('modal-content');
    const backdrop = document.getElementById('modal-backdrop');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const taxCheckbox = document.getElementById('tax-exemption-checkbox');
    const taxSection = document.getElementById('tax-details-section');

    // Prevent main form submission and open modal
    document.getElementById('donation-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Open Modal
        modal.classList.remove('hidden');
        // Small delay to allow display:block to apply before animating opacity
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
        }, 10);
    });

    // Close Modal Function
    const closeModal = () => {
        modal.classList.add('opacity-0');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');
        
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300); // match duration-300
    };

    closeModalBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    // Toggle Tax Section
    taxCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            taxSection.classList.remove('hidden');
            // Make PAN required if checked
            document.getElementById('donor-pan').setAttribute('required', 'true');
        } else {
            taxSection.classList.add('hidden');
            document.getElementById('donor-pan').removeAttribute('required');
        }
    });

    // Handle Complete Donation
    document.getElementById('complete-donation-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for completing your donation details! In a real environment, this would redirect to a secure payment gateway.');
        closeModal();
    });

    // 3. Scroll Reveal Animation Setup
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const revealOptions = {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
});
