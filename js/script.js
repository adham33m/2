let currentTestimonial = 0;
        const testimonials = document.querySelectorAll(".testimonial");

        function changeTestimonial(direction) {
        
          testimonials[currentTestimonial].classList.remove("active");
 
          currentTestimonial =
            (currentTestimonial + direction + testimonials.length) %
            testimonials.length;

         
          testimonials[currentTestimonial].classList.add("active");
        }