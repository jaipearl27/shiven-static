// Feature Data
const featureData = [
    {
      title: "File/Folder Management",
      slug: "file-folder-management",
      content: "This is the content of the first feature.",
      image: "images/feature1.png",
      link:"/features-detail.html"

    },
    {
      title: "Calculate Funds/Interest",
      slug: "calculate-funds-interest",
      content: "Details of the second feature post.",
      image: "images/feature2.png",
      link:"/features-detail.html"

    },
    {
      title: "Customer Data Management",
      slug: "customer-data-management",
      content: "Details of the third feature post.",
      image: "images/feature3.png",
      link:"/features-detail.html"

    },
    {
      title: "Staff Management",
      slug: "staff-management",
      content: "Details of the fourth feature post.",
      image: "images/feature4.png",
      link:"/features-detail.html"

    },
    {
      title: "Ads Plan & Policy",
      slug: "ads-plan-policy",
      content: "Details of the fifth feature post.",
      image: "images/feature5.png",
      link:"/features-detail.html"

    },
    {
      title: "Customized Reminders",
      slug: "customized-reminders",
      content: "Details of the sixth feature post.",
      image: "images/feature6.png",
      link:"/features-detail.html"
    }
  ];
  
  // Render feature list

  // Consultant Data
const customerData = [
  {
    name: "Personalized Experience",
    slug: "personalized-experience",
    role: "Tax Consultant",
    image: "images/features/customers/wohoo.png",
    description: "Tailored interactions to meet individual client needs.",
    link: "/consultant-detail.html"
  },
  {
    name: "Data Security",
    slug: "data-security",
    role: "Investment Advisor",
    image: "images/features/customers/dataSecurity.png",
    description: "Advanced encryption to protect sensitive financial information.",
    link: "/consultant-detail.html"
  },
  {
    name: "Multi-Insurance Type Support",
    slug: "multi-insurance-type-support",
    role: "Investment Advisor",
    image: "images/features/customers/meetGood.png",
    description: "Manage various insurance products within a single platform.",
    link: "/consultant-detail.html"
  },
  {
    name: "Calculate Funds / Interest",
    slug: "calculate-funds-interest",
    role: "Investment Advisor",
    image: "images/features/customers/coins.png",
    description: "Automated calculations for accurate financial assessments.",
    link: "/consultant-detail.html"
  },
  {
    name: "File/Folder Management",
    slug: "file-folder-management",
    role: "Investment Advisor",
    image: "images/features/customers/fileNFolder.png",
    description: "Organize and access documents efficiently.",
    link: "/consultant-detail.html"
  },
 
  {
    name: "Customer Support and Assistance",
    slug: "customer-support-assistance",
    role: "Investment Advisor",
    image: "images/features/customers/customerSupport.png",
    description: "Dedicated support to address client inquiries.",
    link: "/consultant-detail.html"
  },
  {
    name: "Notifications & Alerts",
    slug: "notifications-alerts",
    role: "Investment Advisor",
    image: "images/features/customers/phone.png",
    description: "Timely updates on policy changes and important dates.",
    link: "/consultant-detail.html"
  },
  {
    name: "Policy Management",
    slug: "policy-management:",
    role: "Investment Advisor",
    image: "images/features/customers/policyManagement.png",
    description: "Comprehensive tools for managing and storing policy information.",
    link: "/consultant-detail.html"
  },
  
  {
    name: "Smart Calendar",
    slug: "smart-calendar",
    role: "Investment Advisor",
    image:"images/features/customers/smartCalender.png",
    description: "Our Smart Calender application for financial CRM makers scheduling, task management, and tracking of finances is a hassle-free affair with a smooth client interaction.",
    link: "/consultant-detail.html"
  }
];

function renderFeatureList() {
  const featureclass = document.getElementById("featureclass");

let featureCards = featureData.map(feature => {
  const linkWithSlug = `/features-consultant-detail.html?slug=${feature.slug}`;

  return `
    <a href="${linkWithSlug}"
       class="block bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition">
      <img src="${feature.image}" alt="${feature.title}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h2 class="text-xl font-semibold">${feature.title}</h2>
      </div>
    </a>
  `;
}).join("");

featureclass.innerHTML = `
    <h1 class="text-3xl font-bold mb-6">Features</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      ${featureCards}
    </div>
  `;
}


  // Render feature detail
  function renderFeatureDetail(slug) {
    const feature = featureData.find(b => b.slug === slug);
    const featureclass = document.getElementById("featureclass");
  
    featureclass.innerHTML = `
      <div class="py-12 px-6 max-w-6xl mx-auto">
        <div>
          <h2 class="text-4xl font-bold mb-4">${feature.title}</h2>
        </div>
        <div class="mt-8 flex flex-col gap-6">
          <img src="${feature.image}" alt="${feature.title}" class="w-full h-64 object-cover rounded">
          <div class="flex flex-col gap-4 text-lg text-gray-700">
            <p>${feature.content}</p>
          </div>
        </div>
      </div>
    `;
  }
  
  
  // Navigation
  function navigateToFeature(slug) {
    const url = new URL(window.location.origin + "/features-consultant-details.html");
    url.searchParams.set("slug", slug);
    window.location.href = url.toString(); // full redirect
  }
  
  function navigateToHome() {
    const url = new URL(window.location);
    url.searchParams.delete("slug");
    window.history.pushState({}, "", url);
    handleRouting();
  }
  


  
  function renderCustomerList() {
    const customerClass = document.getElementById("featurecustomer");
  
    const customerCards = customerData.map(customer => {
      const linkWithSlug = `/feature-customer-deatails.html?slug=${customer.slug}`;
  
      return `
        <a href="${linkWithSlug}" class="block bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition">
          <img src="${customer.image}" alt="${customer.name}" class="w-full h-48 object-cover">
          <div class="p-4">
           <p class="text-blue-600 font-medium mt-3">${customer.name}:</h2>
             <p class="text-gray-600 text-sm">${customer.description}</p>
          </div>
        </a>
      `;
    }).join("");
  
    customerClass.innerHTML = `
      <h1 class="text-3xl font-bold mb-6">Customers</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${customerCards}
      </div>
    `;
  }
  
  function renderCustomerDetail(slug) {
    const customer = customerData.find(c => c.slug === slug);

    const customerClass = document.getElementById("featurecustomer");
  
    if (!customer) {
      customerClass.innerHTML = `<p>Customer not found</p>`;
      return;
    }
  
    customerClass.innerHTML = `
      <div class="py-12 px-6 max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold mb-4">${customer.name}</h2>
        <img src="${customer.image}" alt="${customer.name}" class="w-full h-64 object-cover mb-6 rounded">
        <p class="text-xl font-semibold mb-2">${customer.role}</p>
        <p class="text-gray-700">${customer.description}</p>
      </div>
    `;
  }
  function handleRouting() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    const pathname = window.location.pathname;
  
    // Consultant detail
    if (pathname.endsWith("features-consultant-detail.html")) {
      if (slug) {
        renderFeatureDetail(slug);
      } else {
        document.getElementById("features").innerHTML = "<p>No feature selected.</p>";
      }
    }
  

    if (pathname.endsWith("feature-customer-deatails.html")) {
      if (slug) {
        renderCustomerDetail(slug);
      } else {
        document.getElementById("featurecustomer").innerHTML = "<p>No consultant selected</p>";
      }
    }
  
    if (pathname === "/"||pathname==="/index.html" || pathname==="/about-us.html" || pathname.endsWith("features-for-consultants.html")) {
      renderFeatureList();
    }
    
    if (pathname === "/" || pathname==="/index.html" || pathname==="/about-us.html" || pathname.endsWith("features-for-customers.html")) {
      renderCustomerList();
    }
    
  }
  

  // Init
  window.addEventListener("load", handleRouting);
  window.addEventListener("popstate", handleRouting);
  