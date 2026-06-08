document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. BURGER MENU NAVIGATION
    // ==========================================
    const burgerToggle = document.getElementById("burger-toggle");
    const navLinks = document.getElementById("nav-links");

    if (burgerToggle && navLinks) {
        burgerToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            burgerToggle.classList.toggle("open");
        });
    }

    // ==========================================
    // 2. TYPEWRITER ANIMATION (FIXED)
    // ==========================================
    setTimeout(function () {
        let text1 = "";
        let text2 = "";
        let targetSpan1 = null;
        let targetSpan2 = null;

        // Match your specific HTML document titles
        if (document.title === "Kicevo") {
            targetSpan1 = document.querySelector("header h1 .en-title");
            targetSpan2 = document.querySelector("header h1 .mk-title");
            text1 = "Let's Explore Kicevo Together!";
            text2 = "Ајде да го истражиме Кичево заедно!";
        } 
        else if (document.title === "Kicevo History") {
            targetSpan1 = document.querySelector("#title1 h1");
            text1 = "Travel Through Kičevo's History!";
        } 
        else if (document.title === "Places/ Места") {
            targetSpan1 = document.querySelector("#title2 h1");
            text1 = "Discover Amazing Places in Kičevo!";
        } 
        else if (document.title === "Culture/ Култура") {
            targetSpan1 = document.querySelector("#titleAng");
            text1 = "Experience the Culture of Kičevo!";
        }

        // Clear initial text safely to prepare for typewriter effect
        if (targetSpan1) targetSpan1.textContent = "";
        if (targetSpan2) targetSpan2.textContent = "";

        let i = 0;
        let j = 0;

        const typing = setInterval(function () {
            if (targetSpan1 && i < text1.length) {
                targetSpan1.textContent += text1.charAt(i);
                i++;
            } else if (targetSpan2 && j < text2.length) {
                targetSpan2.textContent += text2.charAt(j);
                j++;
            } else {
                clearInterval(typing);
            }
        }, 50); // Lower speed value = snappier, smoother animation
    }, 1000);

    // ==========================================
    // 3. HOME PARAGRAPH FADE-IN ANIMATIONS
    // ==========================================
    setTimeout(() => {
        const p1 = document.getElementById("p1");
        if (p1) p1.classList.add("show");
    }, 1000);

    setTimeout(() => {
        const p2 = document.getElementById("p2");
        if (p2) p2.classList.add("show");
    }, 2500);

    // ==========================================
    // 4. MULTI-PAGE ANIMATION HELPER 
    // ==========================================
    // Prevents errors if elements from other HTML pages don't exist
    const safeAnimateList = (elementIds, delayMultiplier) => {
        const validElements = elementIds
            .map(id => document.getElementById(id))
            .filter(el => el !== null);

        validElements.forEach((element, index) => {
            element.style.opacity = "0";
            element.style.transform = "translateY(50px)";

            setTimeout(() => {
                element.style.transition = "1s ease-in-out";
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }, index * delayMultiplier);
        });
    };

    // Safely fire your historical/cultural subpage scroll animations
    safeAnimateList(["paragraph1", "paragraph2", "paragraph3", "paragraph4"], 1000);
    safeAnimateList(["OneP", "SecondP", "ThirdP", "FourthP", "FifthP"], 1500);
    safeAnimateList(["main", "mkd"], 2000);
});