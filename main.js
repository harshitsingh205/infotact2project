 // Sample Job Data
 const jobs = [
    { title: "Software Engineer", company: "Tech Corp", location: "Remote" },
    { title: "Marketing Manager", company: "Creative Agency", location: "New York" },
    { title: "Data Analyst", company: "Data Insights", location: "San Francisco" },
    { title: "Product Manager", company: "Innovate Inc", location: "Chicago" },
    { title: "UI/UX Designer", company: "Design Studio", location: "Los Angeles" },
  ];

  // Toggle Navbar for Mobile
  const toggleBtn = document.querySelector(".toggle-btn");
  const navLinks = document.querySelector(".nav-links");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Login Button Functionality
  const loginBtn = document.querySelector(".login-btn");
  loginBtn.addEventListener("click", () => {
    alert("Login functionality will be added soon!");
  });

  // Search Functionality
  const searchForm = document.querySelector(".search-form");
  const jobsContainer = document.getElementById("jobs-container");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const jobKeyword = document.getElementById("job-keyword").value.toLowerCase();
    const location = document.getElementById("location").value.toLowerCase();

    const filteredJobs = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(jobKeyword) &&
        job.location.toLowerCase().includes(location)
    );

    displayJobs(filteredJobs);
  });

  // Display Jobs
  function displayJobs(jobs) {
    jobsContainer.innerHTML = jobs
      .map(
        (job) => `
        <div class="job-card" data-title="${job.title}" data-company="${job.company}" data-location="${job.location}">
          <h3>${job.title}</h3>
          <p>Company: ${job.company}</p>
          <p>Location: ${job.location}</p>
        </div>
      `
      )
      .join("");

    // Add click event to job cards
    const jobCards = document.querySelectorAll(".job-card");
    jobCards.forEach((card) => {
      card.addEventListener("click", () => {
        const title = card.getAttribute("data-title");
        const company = card.getAttribute("data-company");
        const location = card.getAttribute("data-location");
        openModal(title, company, location);
      });
    });
  }

  // Job Details Modal
  const modal = document.getElementById("job-modal");
  const closeBtn = document.querySelector(".close-btn");

  function openModal(title, company, location) {
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-company").textContent = `Company: ${company}`;
    document.getElementById("modal-location").textContent = `Location: ${location}`;
    modal.style.display = "flex";
  }

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Display all jobs on page load
  displayJobs(jobs);