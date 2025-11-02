   // HEADER
    const header = document.createElement("div");
    header.style.backgroundColor = "#2c3e50";
    header.style.color = "white";
    header.style.padding = "15px";
    header.style.textAlign = "center";
    header.style.fontSize = "24px";
    header.textContent = "Mawduucyo JavaScript ah";
    document.body.appendChild(header);

    // BUTTONS
    const nav = document.createElement("div");
    nav.style.textAlign = "center";
    nav.style.margin = "20px";

    const aboutBtn = document.createElement("button");
    aboutBtn.textContent = "About";
    aboutBtn.style.margin = "10px";
    aboutBtn.style.padding = "10px 20px";
    aboutBtn.style.fontSize = "16px";
    aboutBtn.style.cursor = "pointer";

    const chaptersBtn = document.createElement("button");
    chaptersBtn.textContent = "Chapters";
    chaptersBtn.style.margin = "10px";
    chaptersBtn.style.padding = "10px 20px";
    chaptersBtn.style.fontSize = "16px";
    chaptersBtn.style.cursor = "pointer";

    nav.appendChild(aboutBtn);
    nav.appendChild(chaptersBtn);
    document.body.appendChild(nav);

    // CONTENT AREA
    const content = document.createElement("div");
    content.style.padding = "20px";
    document.body.appendChild(content);

    // CHAPTERS DATA WITH LINKS AND DETAILS
    const chapters = [
      {
        title: "Chapter 1: Introduction to JavaScript Programming & Creating Interactive Web Pages",
        link: "Chapter01.pptx",
        detail: "kudhufo download saa udagsato chapter 1."
      },
      {
        title: "Chapter 2: Program Structure",
        link: "Chapter 2.pptx",
        detail: "kudhufo download saa udagsato chapter 2."
      },
      {
        title: "Chapter 3: Making Decisions: the Selection Structure",
        link: "chapter 3.pptx",
        detail: "kudhufo download saa udagsato chapter 3."
      },
      {
        title: "Chapter 4: The Repetition Structure",
        link: "Chapter04.pptx",
        detail: "kudhufo download saa udagsato chapter 4."
      },
      {
        title: "Chapter 5: Functions in JavaScript",
        link: "Chapter05.pptx",
        detail: "kudhufo download saa udagsato chapter 5."
      },
      {
        title: "Chapter 6: Arrays in JavaScript",
        link: "Chapter06.pptx",
        detail: "kudhufo download saa udagsato chapter 6."
      }
    ];

    // SHOW ABOUT
    aboutBtn.addEventListener("click", () => {
      content.innerHTML = "";
      const about = document.createElement("div");
      about.style.fontSize = "18px";
      about.style.color = "#34495e";
      about.innerHTML = "<strong>Soo Dhawoow!</strong><br>Magaca: Anas Abdirizak Mohamed<br>ID: CS1500926";
      content.appendChild(about);
    });

    // SHOW CHAPTERS WITH LINKS AND DETAILS
    chaptersBtn.addEventListener("click", () => {
      content.innerHTML = "";
      chapters.forEach((chapter) => {
        const link = document.createElement("a");
        link.href = chapter.link;
        link.textContent = chapter.title;
        link.style.display = "block";
        link.style.margin = "10px 0";
        link.style.padding = "10px";
        link.style.backgroundColor = "#ecf0f1";
        link.style.border = "1px solid #ccc";
        link.style.textDecoration = "none";
        link.style.color = "#2c3e50";
        link.style.borderLeft = "5px solid #2ecc71";
        link.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
        link.style.fontSize = "16px";

        // Faahfaahin marka la gujiyo
        link.addEventListener("click", (e) => {
          e.preventDefault();
          content.innerHTML = "";
          const detail = document.createElement("div");
          detail.style.padding = "15px";
          detail.style.backgroundColor = "#fefefe";
          detail.style.border = "1px solid #ddd";
          detail.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
            detail.innerHTML = `<h2>${chapter.title}</h2><p>${chapter.detail}</p><a href="${chapter.link}" target="_blank">Download Presentation</a>`;
          content.appendChild(detail);
        });

        content.appendChild(link);
      });
    });