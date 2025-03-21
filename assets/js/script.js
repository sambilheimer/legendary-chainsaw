document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      const expanded = this.getAttribute("aria-expanded") === "true" || false;
      this.setAttribute("aria-expanded", !expanded);
    });
  }

  // Add animation classes to posts when they come into view
  const animateOnScroll = function () {
    const posts = document.querySelectorAll(".post-card");

    if (!posts.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    posts.forEach((post) => {
      observer.observe(post);
    });
  };

  animateOnScroll();

  // Handle estimated reading time
  const estimateReadingTime = function () {
    const postContent = document.querySelector(".post-content");
    const readingTimeElement = document.querySelector(".post-reading-time");

    if (postContent && !readingTimeElement) {
      const text = postContent.textContent;
      const wpm = 225; // Average adult reading speed
      const words = text.trim().split(/\s+/).length;
      const time = Math.ceil(words / wpm);

      // Create reading time element if it doesn't exist
      const timeElement = document.createElement("span");
      timeElement.className = "post-reading-time";
      timeElement.textContent = time + " min read";

      const metaElement = document.querySelector(".post-meta");
      if (metaElement) {
        metaElement.appendChild(timeElement);
      }
    }
  };

  estimateReadingTime();

  // Add anchor links to headings
  const addHeadingAnchors = function () {
    const headings = document.querySelectorAll(
      ".post-content h2, .post-content h3, .post-content h4"
    );

    headings.forEach((heading) => {
      const id =
        heading.id ||
        heading.textContent
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "");
      heading.id = id;

      const anchor = document.createElement("a");
      anchor.className = "heading-anchor";
      anchor.href = "#" + id;
      anchor.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>';

      heading.appendChild(anchor);
    });
  };

  addHeadingAnchors();

  // Add syntax highlighting class to code blocks
  const styleCodeBlocks = function () {
    const codeBlocks = document.querySelectorAll("pre code");

    codeBlocks.forEach((block) => {
      const parent = block.parentNode;
      parent.classList.add("code-highlight");
    });
  };

  styleCodeBlocks();

  // Add target="_blank" to external links
  const handleExternalLinks = function () {
    const links = document.querySelectorAll('a[href^="http"]');

    links.forEach((link) => {
      if (!link.getAttribute("href").includes(window.location.hostname)) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    });
  };

  handleExternalLinks();

  console.log("Blog loaded successfully!");
});
