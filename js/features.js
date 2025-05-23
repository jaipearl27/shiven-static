// Feature Data
const featureData = [
  {
    title: "File/Folder Management",
    id: "file-folder-management",
    content: "This is the content of the first feature.",
    image: "images/feature1.png",
    link: "/features-detail.html"

  },
  {
    title: "Calculate Funds/Interest",
    id: "calculate-funds-interest",
    content: "Details of the second feature post.",
    image: "images/features/consultants/calculate-Funds-Interest.png",
    link: "/features-detail.html"

  },
  {
    title: "Customer Data Management",
    id: "customer-data-management",
    content: "Details of the third feature post.",
    image: "images/feature6.png",
    link: "/features-detail.html"

  },
  {
    title: "Staff Management",
    id: "staff-management",
    content: "Details of the fourth feature post.",
    image: "images/feature2.png",
    link: "/features-detail.html"

  },
  {
    title: "Adds Plan & Policy",
    id: "adds-plan-policy",
    content: "Details of the fifth feature post.",
    image: "images/feature3.png",
    link: "/features-detail.html"

  },
  {
    title: "Customized Reminders",
    id: "customized-reminders",
    content: "Details of the sixth feature post.",
    image: "images/feature4.png",
    link: "/features-detail.html"
  },
  {
    title: "Smart Calender:",
    id: "smart-calender",
    content: "Details of the sixth feature post.",
    image: "images/feature5.png",
    link: "/features-detail.html"
  }
];

// Render feature list

const customerData = [
  {
    name: "Personalized Experience",
    id: "personalized-experience",
    role: "Tax Consultant",
    image: "images/features/customers/wohoo.png",
    description: "Tailored interactions to meet individual client needs.",
    detailedDesc: "All our features are as per the recruitment of the users. Our CRM ensures that all the features are hand-crafted as per the requirement and nothing is missed that is not crafted for the user.",
    link: "/consultant-detail.html"
  },
  {
    name: "Data Security",
    id: "data-security",
    role: "Investment Advisor",
    image: "images/features/customers/dataSecurity.png",
    description: "Advanced encryption to protect sensitive financial information.",
    detailedDesc: "With our file management system, which comes with encryption, all the data of the customer remains safe, and there is no issue of data loss, data damage. Our CRM offers an advanced level of security for this matter.",
    link: "/consultant-detail.html"
  },
  {
    name: "Multi-Insurance Type Support",
    id: "multi-insurance-type-support",
    role: "Investment Advisor",
    image: "images/features/customers/meetGood.png",
    description: "Manage various insurance products within a single platform.",
    detailedDesc: "Our CRM is not limited to a singular type of issue, but it enables you to manage different types of policies with a single dashboard.",
    link: "/consultant-detail.html"
  },
  {
    name: "Calculate Funds / Interest",
    id: "calculate-funds-interest",
    role: "Investment Advisor",
    image: "images/features/customers/coins.png",
    description: "Automated calculations for accurate financial assessments.",
    detailedDesc: "Our CRM enables you to manage and calculate funds without making you use any other platform. Our CRM is capable of performing complex calculations regarding Loans and interests in no time. This saves you from the additional mathematical burdens of doing unnecessary calculations.",
    link: "/consultant-detail.html"
  },
  {
    name: "File/Folder Management",
    id: "file-folder-management",
    role: "Investment Advisor",
    image: "images/features/customers/fileNFolder.png",
    description: "Organize and access documents efficiently.",
    detailedDesc: "Our file management system provides easy access. With our state-of-the-art Financial CRM, client relationships have never been easier to manage and portfolios have never been simpler to track. No matter where you are — in the office, on the road, or working remotely, access your complete financial portfolio instantly from any device, desktop, tablet, or smartphone.",
    link: "/consultant-detail.html"
  },

  {
    name: "Customer Support and Assistance",
    id: "customer-support-assistance",
    role: "Investment Advisor",
    image: "images/features/customers/customerSupport.png",
    description: "Dedicated support to address client inquiries.",
    detailedDesc: "Our CRM is developed to deliver one-on-one customer care and support to solve client inquiries quickly. Ticketing and communication integrations enable your support staff to monitor inquiries, answer quickly, and make sure that no client request goes unnoticed.",
    link: "/consultant-detail.html"
  },
  {
    name: "Notifications & Alerts",
    id: "notifications-alerts",
    role: "Investment Advisor",
    image: "images/features/customers/phone.png",
    description: "Timely updates on policy changes and important dates.",
    detailedDesc: "Our CRM is built to deliver customized customer service and support to address client questions promptly. Combined ticketing and communication functionalities allow your support team to monitor queries, respond efficiently, and not miss any client request. Based on a 360-degree customer view, comprising previous interactions, policies, and claims history,",
    link: "/consultant-detail.html"
  },
  {
    name: "Policy Management",
    id: "policy-management:",
    role: "Investment Advisor",
    image: "images/features/customers/policyManagement.png",
    description: "Comprehensive tools for managing and storing policy information.",
    detailedDesc: "Advanced tools to manage and store policy details:Our CRM provides sophisticated Policy Management features that make it easier for you to manage and monitor client policies. From issuing new policies to renewals, endorsements, and tracking claims, each process is automated in a centralized system.",
    link: "/consultant-detail.html"
  },

  {
    name: "Smart Calendar",
    id: "smart-calendar",
    role: "Investment Advisor",
    image: "images/features/customers/smartCalender.png",
    description: "Our Smart Calender application for financial CRM makers scheduling, task management, and tracking of finances is a hassle-free affair with a smooth client interaction.",
    detailedDesc: "Our financial CRM also provides you the facility of tracking your record, this can be done with the feature of our smart calendar With the smart calendar you can not only track your financial proceedings like Loans, EMIs, SIP, the due dates, and investments but also with this calendar, but you can also schedule meetings and manage your finance with ease. This feature helps you to stay updated with the dates and hence you are not prone to exceeding a deadline and due date.",
    link: "/consultant-detail.html"
  }
];


function renderFeatureList() {
  const featureclass = document.getElementById("featureclass");

  let featureCards = featureData.map(feature => {
    const linkWithSlug = `/features-for-consultants.html#${feature.id}`;

    return `
    <a href="${linkWithSlug}"
       class="block bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition bg-red-500 ">
      <img src="${feature.image}" alt="${feature.title}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h2 class="text-xl font-semibold">${feature.title}</h2>
      </div>
    </a>
  `;
  }).join("");

  featureclass.innerHTML = `
    
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
      <div class="py-12 px-6 max-w-6xl bg-red-500 mx-auto">
        <div>
          <h2 class="text-4xl font-bold mb-4 bg-red-500">${feature.title}</h2>
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
    const linkWithSlug = `/features-for-customers.html#${customer.id}`;

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
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${customerCards}
      </div>
    `;
}


function renderCustomerDetailedList() {
  const customerClass = document.getElementById("detailedCustomerFeatureList");

  const customerCards = customerData.map(customer => {
    // const linkWithSlug = `/features-for-customers.html#${customer.id}`;

    return `
        <div href="#" id="${customer.id}" class="block bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition">
          <img src="${customer.image}" alt="${customer.name}" class="w-full h-48 object-cover">
          <div class="p-4">
           <p class="text-blue-600 font-medium mt-3">${customer.name}:</h2>
             <p class="text-gray-600 text-sm">${customer.detailedDesc}</p>
          </div>
        </div>
      `;
  }).join("");

  customerClass.innerHTML = `
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${customerCards}
      </div>
    `;


  scrollToHashElement()
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

  if (pathname === "/" || pathname === "/index.html" || pathname === "/about-us.html" || pathname.endsWith("features-for-consultants.html")) {
    renderFeatureList();
  }


  if (pathname === "/" || pathname === "/index.html" || pathname === "/about-us.html") {
    renderCustomerList();
  }

  if (pathname.endsWith("features-for-customers.html")) {
    renderCustomerDetailedList()

  }


}


// Init
window.addEventListener("load", handleRouting);
window.addEventListener("popstate", handleRouting);



const BenefitsInsuranceSec = [
  {
    name: "Improved lead and customer management",
    id: "Improved-lead-and-customer-management",
    image: "images/Insurance/Increased customer.png",
    description: "Tailored interactions to meet individual client needs.",
    link: "/consultant-detail.html"
  },
  {
    name: "Single version of the truth for ease of access and collaboration",
    id: "Single-version-of-the-truth-for-ease-of-access-and-collaboration",
    image: "images/features/customers/dataSecurity.png",
    description: "Advanced encryption to protect sensitive financial information.",
    link: "/consultant-detail.html"
  },
  {
    name: "Automating mundane tasks",
    id: "Automating-mundane-tasks",
    image: "images/features/customers/coins.png",
    description: "Automated calculations for accurate financial assessments.",
    link: "/consultant-detail.html"
  },
  {
    name: "Increased customer communication",
    id: "Increased-customer-communication",
    image: "images/features/customers/meetGood.png",
    description: "Manage various insurance products within a single platform.",
    link: "/consultant-detail.html"
  },
  {
    name: "Data-driven insight to inform business decisions",
    id: "Data-driven-insight-inform-business-decisions",
    image: "images/features/customers/fileNFolder.png",
    description: "Organize and access documents efficiently.",
    link: "/consultant-detail.html"
  },
  {
    name: "Increased monitoring and reporting of regulatory compliance.",
    id: "Increased-monitoring-reporting-regulator-compliance",
    image: "images/features/customers/customerSupport.png",
    description: "Dedicated support to address client inquiries.",
    link: "/consultant-detail.html"
  },
];

const insuranceData = document.getElementById("insuranceClass");

if (insuranceData) {
  const insuranceCardHTML = BenefitsInsuranceSec.map((insData) => {
    return `
        <div class="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition duration-300">
          <a href="${insData.link}#${insData.id}">
            <img src="${insData.image}" alt="${insData.name}" class="class="w-full h-48 object-cover">
            <h3  class="text-gray-600 text-sm">${insData.name}</h3>
          
          </a>
        </div>
      `;
  }).join("");

  insuranceData.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:px-28">
        ${insuranceCardHTML}
      </div>
    `;
}



// mutual-funds page

const mutualFundsAdvantages = [
  {
    name: "Centralized client and investment data",
    id: "centralized-client-and-investment-data",
    image: "images/Insurance/Increased customer.png",

  },
  {
    name: "Simple onboarding and KYC document management",
    id: "simple-onboarding-and-kyc-document-management",
    image: "images/features/customers/dataSecurity.png",

  },
  {
    name: "SIP/portfolio reminder and alert automations",
    id: "sip-portfolio-reminder-and-alert-automations",
    image: "images/features/customers/coins.png",

  },
  {
    name: "Enhanced lead capture and nurturing",
    id: "enhanced-lead-capture-and-nurturing",
    image: "images/features/customers/meetGood.png",

  },
  {
    name: "Performance and compliance analytics, and reporting",
    id: "performance-and-compliance-analytics-and-reporting",
    image: "images/features/customers/fileNFolder.png",

  },
  {
    name: "Enhanced client servicing and retention",
    id: "enhanced-client-servicing-and-retention",
    image: "images/features/customers/customerSupport.png",

  }
];

const mutualFundsEle = document.getElementById("mutualFundsClass");

if (mutualFundsEle) {
  const mutualFundsCards = mutualFundsAdvantages.map((item) => {
    return `
        <div class="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition duration-300">

            <img src="${item.image}" alt="${item.name}" class="class="w-full h-48 object-cover">
            <h3  class="text-gray-600 text-base font-semibold mt-1">${item.name}</h3>
          
        </div>
      `;
  }).join("");

  mutualFundsEle.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:px-28">
        ${mutualFundsCards}
      </div>
    `;
}



// stock-advisor page

const stockAdvisorAdvantages = [
  {
    name: "Manage real-time client interactions",
    id: "manage-real-time-client-interactions",
    image: "images/Insurance/Increased customer.png",
  },
  {
    name: "Monitor portfolio performance and preferences",
    id: "monitor-portfolio-performance-and-preferences",
    image: "images/features/customers/dataSecurity.png",
  },
  {
    name: "Send customized trade recommendations and notifications",
    id: "send-customized-trade-recommendations-and-notifications",
    image: "images/features/customers/coins.png",
  },
  {
    name: "Automate onboarding, documentation, and compliance",
    id: "automate-onboarding-documentation-and-compliance",
    image: "images/features/customers/meetGood.png",
  },
  {
    name: "Run securely with complete regulatory support",
    id: "run-securely-with-complete-regulatory-support",
    image: "images/features/customers/fileNFolder.png",
  },
];

const stockAdvisorFeaturesEle = document.getElementById("stockAdvisorFeatures");

if (stockAdvisorFeaturesEle) {
  const stockAdvisorCards = stockAdvisorAdvantages.map((item) => {
    return `
        <div class="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition duration-300">

            <img src="${item.image}" alt="${item.name}" class="class="w-full h-48 object-cover">
            <h3  class="text-gray-600 text-base font-semibold mt-1">${item.name}</h3>
          
        </div>
      `;
  }).join("");

  stockAdvisorFeaturesEle.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:px-28">
        ${stockAdvisorCards}
      </div>
    `;
}



function scrollToHashElement() {
  if (window.location.hash) {
    const id = window.location.hash.slice(1);
    const scrollToElement = document.getElementById(id);
    if (scrollToElement) {
      scrollToElement.scrollIntoView({ behavior: "smooth" });
    }
  }
}






