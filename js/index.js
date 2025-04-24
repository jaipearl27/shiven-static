function Navbar(targetId = "navbar") {
  const container = document.getElementById(targetId);

  const nav = document.createElement("nav");
  nav.className = `
    w-full flex justify-between items-center 
    fixed top-0 left-0 bg-white shadow-md p-4 z-50
  `.replace(/\s+/g, ' ').trim();

  nav.innerHTML = `
    <div class="w-[100px]">
      <img src="images/logo1.png" alt="Shiven Technology" class="w-full">
    </div>

    <!-- Hamburger Icon for mobile -->
    <button id="mobile-menu-button" class="md:hidden focus:outline-none text-blue-800">
      ☰
    </button>

    <!-- Desktop Nav -->
    <div class="hidden md:flex gap-8 text-blue-800 items-center">
      <a href="/" class="hover:text-orange-500">Home</a>
      <a href="/about-us.html" class="hover:text-orange-500">About</a>
      <a href="/services.html" class="hover:text-orange-500">Services</a>
      <a href="/features-for-consultants.html" class="hover:text-orange-500">Features for Consultants</a>
      <a href="/features-for-customers.html" class="hover:text-orange-500">Features for Customers</a>
      <a href="/contact-us.html" class="hover:text-orange-500">Contact</a>
      <a href="/subscriptions.html" class="hover:text-orange-500">Subscriptions</a>
      <div class="relative group">
  <button class="hover:text-orange-500">More Info ▾</button>
  <div class="absolute left-0 top-full hidden group-hover:block bg-white shadow-md w-40 text-gray-800">
    <a href="/blogs.html" class="block px-4 py-2 hover:bg-gray-100">Blogs</a>
    <a href="/privacy-policy.html" class="block px-4 py-2 hover:bg-gray-100">Privacy Policy</a>
    <a href="/term&condition.html" class="block px-4 py-2 hover:bg-gray-100">Terms & Condition</a>
  </div>
</div>

    </div>

    <!-- Get Started Button (always visible) -->
    <a href="https://app.assetmanagment.in" class="bg-orange-400 text-white px-4 py-2 rounded-md hidden md:inline-block">
      Get Started
    </a>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="absolute top-full left-0 w-full bg-white shadow-md flex-col text-blue-800 p-4 hidden md:hidden">
      <a href="/" class="block py-2 hover:text-orange-500">Home</a>
      <a href="/about-us.html" class="block py-2 hover:text-orange-500">About</a>
      <a href="/services.html" class="block py-2 hover:text-orange-500">Services</a>
      <a href="/features-for-consultants.html" class="block py-2 hover:text-orange-500">Features for Consultants</a>
      <a href="/features-for-customers.html" class="block py-2 hover:text-orange-500">Features for Customers</a>
      <a href="/contact-us.html" class="block py-2 hover:text-orange-500">Contact</a>
      <a href="/subscriptions.html" class="block py-2 hover:text-orange-500">Subscriptions</a>
      <a href="/blogs.html" class="block py-2 hover:text-orange-500">Blogs</a>
      <a href="https://app.assetmanagment.in" class="block mt-2 bg-orange-400 text-white px-4 py-2 rounded-md text-center">Get Started</a>
    </div>
  `;

  container.appendChild(nav);

  // Toggle mobile menu
  const menuButton = nav.querySelector("#mobile-menu-button");
  const mobileMenu = nav.querySelector("#mobile-menu");

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

  

function footer(){
    const footer = document.createElement("footer");
    footer.className = "mt-24";
    footer.innerHTML = `
          <footer class="bg-gray-100 py-8">
            <div class="container mx-auto px-4 md:px-8 lg:px-16">
                <div
                    class="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">

                    <div class="text-center md:text-left">
                        <h2 class="text-3xl text-gray-700 font-bold">Shiven Tech</h2>
                        <div class="flex justify-center md:justify-start space-x-4 mt-3">
                            <a href="#" class="py-2 px-4  bg-gray-200 rounded-full hover:bg-gray-300">
                
                            <i class="fa-brands fa-x-twitter"></i>
                            </a>
                            <a href="#" class="py-2 px-4 bg-gray-200 rounded-full hover:bg-gray-300">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a href="#" class="py-2 px-4 bg-gray-200 rounded-full hover:bg-gray-300">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="py-2 px-4 bg-gray-200 rounded-full hover:bg-gray-300">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    <div class="text-center md:text-left">
                        <h2 class="text-lg text-gray-700 font-bold">Useful Links</h2>
                        <ul class="space-y-2 mt-2 text-gray-600">
                            <li><a href="/" class="hover:underline">Home</a></li>
                            <li><a href="/about-us.html" class="hover:underline">About Us</a></li>
                            <li><a href="/services.html" class="hover:underline">Services</a></li>
                            <li><a href="/features-for-consultants.html" class="hover:underline">Features for
                                    Consultants</a></li>
                            <li><a href="/features-for-customers.html" class="hover:underline">Features for
                                    Customers</a></li>
                                    <li><a href="/privacy-policy.html" class="hover:underline">Privacy Policy
                              </a></li>
                                    <li><a href="/term&condition.html" class="hover:underline">Term&Condition
                                   </a></li>
                          
                            <!-- <li><a href="#" class="hover:underline">Sitemap</a></li> -->
                        </ul>
                    </div>



                    <div class="text-center
                     md:text-left">
                        <h2 class="text-lg text-gray-700 font-bold">Contact Us</h2>
                        <ul class="space-y-2 mt-2 text-gray-600">
                            <li><a href="/contact-us.html" class="text-gray-600 hover:underline">Address</a></li>
                            <li><a href="/contact-us.html" class="text-gray-600 hover:underline">City</a></li>
                            <li><a href="/contact-us.html" class="text-gray-600 hover:underline">Country</a></li>
                            <br>
                        
                        </ul>

                    </div>
                </div>

                <div class="mt-6 p-4 text-center bg-gray-300 text-gray-600 text-sm">
                    <p>© Copyright <strong class="text-gray-700">Shiven Tech</strong> All Rights Reserved</p>
                    <p>Designed by</p>
                </div>
            </div>
        </footer>
    `;
    document.body.appendChild(footer);
}


function contactForm() {
  const form = document.createElement("div");
  form.className = "w-full mt-8 py-6 pb-10 bg-gradient-to-r from-white via-blue-50 to-white mb-0 pb-0" ;

  form.innerHTML = `
<div class="container mx-auto px-4 ">
    <!-- Header -->
    <div class="text-center ">
      <h1 class="text-4xl font-bold text-gray-800 relative inline-block">
        Contact Us
      
      </h1>
        <div class="w-20 h-1 bg-blue-600 mx-auto my-3 rounded animate-pulse"></div>
      <p class="text-gray-500 py-4">We'd love to hear from you!</p>
    </div>

    <!-- Contact Content -->
    <div class="flex flex-col md:flex-row items-center justify-center gap-10">
      <!-- Left Side - Contact Info -->
      <div class="md:w-72  w-56 flex flex-col gap-6">
        <!-- Phone -->
        <div class="flex items-start gap-4 bg-white shadow-md p-6 rounded-lg">
<i class="fas fa-phone text-blue-600 text-2xl animate-pulse"></i>
          <div>
            <h3 class="text-blue-600 font-bold mb-1">Phone</h3>
            <p class="text-gray-600 text-sm">+1 5589 55488 55</p>
            <p class="text-gray-600 text-sm">+1 6678 254445 41</p>
          </div>
        </div>

        <!-- Open Hours -->
        <div class="flex items-start gap-4 bg-white shadow-md p-6 rounded-lg">
          <i class="fas fa-clock text-blue-600 text-2xl animate-pulse"></i>
          <div>
            <h3 class="text-blue-600 font-bold mb-1">Open Hours</h3>
            <p class="text-gray-600 text-sm">Monday - Friday</p>
            <p class="text-gray-600 text-sm">9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>

      <!-- Right Side - Contact Form -->
      <div class="w-full md:w-1/2 shadow-lg">
        <div class="bg-white shadow-lg p-8 rounded-lg">
          <form>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div class="relative">
                <input type="text" id="name" placeholder=" " required
                  class="peer w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <label for="name"
                  class="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400">
                  Your Name
                </label>
              </div>
              <div class="relative">
                <input type="email" id="email" placeholder=" " required
                  class="peer w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <label for="email"
                  class="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400">
                  Your Email
                </label>
              </div>
            </div>

            <div class="relative mb-6">
              <input type="text" id="subject" placeholder=" " required
                class="peer w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <label for="subject"
                class="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400">
                Subject
              </label>
            </div>

            <div class="relative mb-6">
              <textarea rows="5" id="message" placeholder=" " required
                class="peer w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              <label for="message"
                class="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400">
                Message
              </label>
            </div>

            <div class="text-center">
              <button type="submit"
                class="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Optional Lottie -->
    <!--
    <div class="text-center mt-10">
      <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_jcikwtux.json" background="transparent"
        speed="1" style="width: 150px; height: 150px;" loop autoplay></lottie-player>
    </div>
    -->
  </div>
  `;

  document.body.appendChild(form);
}



  Navbar()
  // if (window.location.pathname === "/" || window.location.pathname === "/contact-us.html") {

  // }
  contactForm();
 
  footer()
  

