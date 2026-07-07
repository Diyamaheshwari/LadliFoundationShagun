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
            
            // Update input
            customAmountInput.value = target.getAttribute('data-amount');
        });
    });

    customAmountInput.addEventListener('input', (e) => {
        // Clear active buttons if custom amount is typed
        amountBtns.forEach(b => {
            b.classList.remove('border-wedding-500', 'bg-wedding-50', 'text-wedding-600');
            b.classList.add('border-wedding-200', 'text-wedding-700', 'bg-white');
        });
    });

    // Prevent form submission for demo
    document.getElementById('donation-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your pledge! In a real environment, this would redirect to a secure payment gateway.');
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
