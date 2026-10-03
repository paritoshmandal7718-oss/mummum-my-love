/* =========================================================
   MUMMUM SURPRISE WEBSITE
   JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. ELEMENTS
       ===================================================== */

    const screens = document.querySelectorAll(".screen");

    const openingScreen = document.getElementById("openingScreen");
    const apologyScreen = document.getElementById("apologyScreen");
    const understandingScreen = document.getElementById("understandingScreen");
    const promiseScreen = document.getElementById("promiseScreen");
    const safePlaceScreen = document.getElementById("safePlaceScreen");
    const appreciationScreen = document.getElementById("appreciationScreen");
    const memoriesScreen = document.getElementById("memoriesScreen");
    const reasonsScreen = document.getElementById("reasonsScreen");
    const secretScreen = document.getElementById("secretScreen");
    const finalScreen = document.getElementById("finalScreen");

    const startButton = document.getElementById("startButton");
    const understandButton = document.getElementById("understandButton");
    const promiseButton = document.getElementById("promiseButton");
    const safePlaceButton = document.getElementById("safePlaceButton");
    const appreciationButton = document.getElementById("appreciationButton");
    const memoriesButton = document.getElementById("memoriesButton");
    const reasonsButton = document.getElementById("reasonsButton");
    const secretButton = document.getElementById("secretButton");
    const openSecretButton = document.getElementById("openSecretButton");
    const finalButton = document.getElementById("finalButton");

    const envelope = document.getElementById("envelope");
    const apologyLetter = document.getElementById("apologyLetter");
    const secretBox = document.getElementById("secretBox");
    const secretLetter = document.getElementById("secretLetter");

    const reasonsGrid = document.getElementById("reasonsGrid");
    const backgroundHearts = document.getElementById("backgroundHearts");


    /* =====================================================
       2. SCREEN NAVIGATION
       ===================================================== */

    function showScreen(screen) {

        if (!screen) return;

        screens.forEach((item) => {
            item.classList.add("hidden");
            item.classList.remove("active");
        });

        screen.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        setTimeout(() => {
            screen.classList.add("active");
        }, 50);
    }


    /* =====================================================
       3. OPENING -> APOLOGY
       ===================================================== */

    if (startButton) {

        startButton.addEventListener("click", () => {

            createHeartBurst(
                window.innerWidth / 2,
                window.innerHeight / 2
            );

            showScreen(apologyScreen);

        });

    }


    /* =====================================================
       4. ENVELOPE
       ===================================================== */

    if (envelope) {

        envelope.addEventListener("click", () => {

            if (envelope.classList.contains("open")) {
                return;
            }

            envelope.classList.add("open");

            createHeartBurst(
                window.innerWidth / 2,
                window.innerHeight / 2
            );

            setTimeout(() => {

                if (apologyLetter) {
                    apologyLetter.classList.remove("hidden");

                    apologyLetter.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                }

            }, 700);

        });

    }


    /* =====================================================
       5. APOLOGY -> UNDERSTANDING
       ===================================================== */

    if (understandButton) {

        understandButton.addEventListener("click", () => {

            showScreen(understandingScreen);

        });

    }


    /* =====================================================
       6. UNDERSTANDING -> PROMISES
       ===================================================== */

    if (promiseButton) {

        promiseButton.addEventListener("click", () => {

            showScreen(promiseScreen);

        });

    }


    /* =====================================================
       7. PROMISES -> SAFE PLACE
       ===================================================== */

    if (safePlaceButton) {

        safePlaceButton.addEventListener("click", () => {

            showScreen(safePlaceScreen);

        });

    }


    /* =====================================================
       8. SAFE PLACE -> APPRECIATION
       ===================================================== */

    if (appreciationButton) {

        appreciationButton.addEventListener("click", () => {

            showScreen(appreciationScreen);

        });

    }


    /* =====================================================
       9. APPRECIATION -> MEMORIES
       ===================================================== */

    if (memoriesButton) {

        memoriesButton.addEventListener("click", () => {

            showScreen(memoriesScreen);

        });

    }


    /* =====================================================
       10. MEMORIES -> 100 REASONS
       ===================================================== */

    if (reasonsButton) {

        reasonsButton.addEventListener("click", () => {

            showScreen(reasonsScreen);

        });

    }


    /* =====================================================
       11. 100 LITTLE REASONS
       ===================================================== */

    const reasons = [

        "Because your feelings matter to me.",

        "Because you are someone I genuinely value.",

        "Because your little way of talking is special.",

        "Because you can make ordinary conversations memorable.",

        "Because you have your own beautiful way of seeing things.",

        "Because your presence can make a normal day feel different.",

        "Because I notice the little things about you.",

        "Because you deserve to be listened to.",

        "Because you deserve patience.",

        "Because you deserve respect.",

        "Because your happiness matters.",

        "Because your comfort matters.",

        "Because your boundaries matter.",

        "Because you should never have to hide how you feel.",

        "Because you can be yourself around me.",

        "Because you don't need to be perfect.",

        "Because being understood matters.",

        "Because your thoughts are worth hearing.",

        "Because your silence can mean something too.",

        "Because I want to understand you better.",

        "Because I want to remember what matters to you.",

        "Because you deserve consistency.",

        "Because apologies should become actions.",

        "Because trust deserves care.",

        "Because respect should never depend on the mood.",

        "Because you are important.",

        "Because your individuality makes you you.",

        "Because your little habits can be memorable.",

        "Because your conversations can stay in my mind.",

        "Because you make some moments feel meaningful.",

        "Because I appreciate your honesty.",

        "Because I appreciate your patience.",

        "Because I appreciate the way you express yourself.",

        "Because I want to learn from my mistakes.",

        "Because I don't want to take you for granted.",

        "Because I want my actions to match my words.",

        "Because you deserve genuine effort.",

        "Because you deserve to feel valued.",

        "Because you deserve reassurance without pressure.",

        "Because you deserve space when you need it.",

        "Because you deserve kindness on difficult days.",

        "Because difficult moments don't make your feelings less important.",

        "Because I want to listen before reacting.",

        "Because I want to think before speaking.",

        "Because remembering matters.",

        "Because learning matters.",

        "Because changing for the better matters.",

        "Because consistency matters.",

        "Because small efforts can mean a lot.",

        "Because thoughtful actions can speak loudly.",

        "Because your trust shouldn't be treated casually.",

        "Because I want to protect the trust you give me.",

        "Because I want you to feel heard.",

        "Because I want you to feel respected.",

        "Because I want you to feel comfortable being honest.",

        "Because you don't have to pretend around me.",

        "Because you can have difficult days.",

        "Because you can disagree with me.",

        "Because your opinions deserve respect.",

        "Because your perspective is your own.",

        "Because you are more than one difficult moment.",

        "Because mistakes don't erase someone's value.",

        "Because I appreciate the person you are.",

        "Because I appreciate the person you are becoming.",

        "Because you inspire me to be more thoughtful.",

        "Because you remind me that words have weight.",

        "Because caring means paying attention.",

        "Because listening is a form of respect.",

        "Because remembering is a form of care.",

        "Because patience is important.",

        "Because honesty is important.",

        "Because kindness is important.",

        "Because respect is important.",

        "Because trust is important.",

        "Because your comfort matters even when things are difficult.",

        "Because I want disagreements to stay respectful.",

        "Because I want communication to become better.",

        "Because I want to understand instead of assuming.",

        "Because I want to become more careful with my words.",

        "Because I want to become more thoughtful with my actions.",

        "Because I want to learn when you tell me something hurts.",

        "Because I want my apology to have meaning.",

        "Because I want my promises to have proof.",

        "Because you deserve actions, not only words.",

        "Because you deserve genuine appreciation.",

        "Because you deserve to feel seen.",

        "Because you deserve to feel heard.",

        "Because you deserve to feel safe expressing yourself.",

        "Because your feelings don't need to be justified to matter.",

        "Because you don't owe anyone a perfect version of yourself.",

        "Because you are allowed to take your time.",

        "Because you are allowed to need space.",

        "Because you are allowed to ask for reassurance.",

        "Because you are allowed to say no.",

        "Because you are allowed to be honest.",

        "Because you are allowed to be yourself.",

        "Because you are someone I don't want to hurt.",

        "Because I want to treat your trust with care.",

        "Because I want my presence to feel comforting.",

        "Because you matter."

    ];


    /* =====================================================
       12. CREATE 100 HEARTS
       ===================================================== */

    let openedReasons = 0;

    function createReasons() {

        if (!reasonsGrid) return;

        reasonsGrid.innerHTML = "";

        reasons.forEach((reason, index) => {

            const heart = document.createElement("button");

            heart.type = "button";

            heart.className = "reason-heart";

            heart.innerHTML = "♥";

            heart.setAttribute(
                "aria-label",
                `Little reason ${index + 1}`
            );

            heart.dataset.index = index;

            heart.addEventListener("click", () => {

                if (!heart.classList.contains("opened")) {

                    heart.classList.add("opened");

                    openedReasons++;

                    createMiniHeartBurst(heart);

                    showReasonPopup(
                        index + 1,
                        reason
                    );

                    if (openedReasons >= reasons.length) {

                        if (secretButton) {

                            setTimeout(() => {

                                secretButton.classList.remove("hidden");

                                secretButton.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center"
                                });

                            }, 500);

                        }

                    }

                } else {

                    showReasonPopup(
                        index + 1,
                        reason
                    );

                }

            });

            reasonsGrid.appendChild(heart);

        });

    }

    createReasons();


    /* =====================================================
       13. REASON POPUP
       ===================================================== */

    function showReasonPopup(number, message) {

        const oldPopup =
            document.querySelector(".reason-popup");

        if (oldPopup) {
            oldPopup.remove();
        }

        const popup =
            document.createElement("div");

        popup.className = "reason-popup";

        popup.innerHTML = `
            <div class="reason-popup-card">

                <div class="popup-heart">♥</div>

                <div class="eyebrow">
                    Little Reason ${number}
                </div>

                <p>${message}</p>

                <button
                    type="button"
                    class="close-popup"
                >
                    close
                </button>

            </div>
        `;

        document.body.appendChild(popup);

        const closeButton =
            popup.querySelector(".close-popup");

        closeButton.addEventListener(
            "click",
            () => {
                popup.remove();
            }
        );

        popup.addEventListener(
            "click",
            (event) => {

                if (event.target === popup) {
                    popup.remove();
                }

            }
        );

    }


    /* =====================================================
       14. MINI HEART BURST
       ===================================================== */

    function createMiniHeartBurst(element) {

        const rect =
            element.getBoundingClientRect();

        const centerX =
            rect.left + rect.width / 2;

        const centerY =
            rect.top + rect.height / 2;

        for (let i = 0; i < 7; i++) {

            const heart =
                document.createElement("span");

            heart.textContent = "♥";

            heart.style.position = "fixed";

            heart.style.left = `${centerX}px`;

            heart.style.top = `${centerY}px`;

            heart.style.zIndex = "200";

            heart.style.pointerEvents = "none";

            heart.style.color = "#ff9fbd";

            heart.style.fontSize =
                `${10 + Math.random() * 10}px`;

            const angle =
                Math.random() * Math.PI * 2;

            const distance =
                30 + Math.random() * 45;

            const x =
                Math.cos(angle) * distance;

            const y =
                Math.sin(angle) * distance;

            heart.animate(
                [
                    {
                        transform:
                            "translate(-50%, -50%) scale(.5)",
                        opacity: 1
                    },
                    {
                        transform:
                            `translate(
                                calc(-50% + ${x}px),
                                calc(-50% + ${y}px)
                            ) scale(1.2)`,
                        opacity: 0
                    }
                ],
                {
                    duration: 700 + Math.random() * 300,
                    easing: "ease-out"
                }
            );

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 1100);

        }

    }


    /* =====================================================
       15. SECRET SECTION
       ===================================================== */

    if (secretButton) {

        secretButton.addEventListener("click", () => {

            showScreen(secretScreen);

        });

    }


    /* =====================================================
       16. OPEN SECRET
       ===================================================== */

    if (openSecretButton) {

        openSecretButton.addEventListener("click", () => {

            if (secretBox) {
                secretBox.classList.add("hidden");
            }

            if (secretLetter) {

                secretLetter.classList.remove("hidden");

                createHeartBurst(
                    window.innerWidth / 2,
                    window.innerHeight / 2
                );

            }

        });

    }


    /* =====================================================
       17. FINAL LETTER
       ===================================================== */

    if (finalButton) {

        finalButton.addEventListener("click", () => {

            createHeartBurst(
                window.innerWidth / 2,
                window.innerHeight / 2
            );

            showScreen(finalScreen);

            startFinalHearts();

        });

    }


    /* =====================================================
       18. BACKGROUND FLOATING HEARTS
       ===================================================== */

    function createBackgroundHeart() {

        if (!backgroundHearts) return;

        const heart =
            document.createElement("span");

        heart.className =
            "floating-heart";

        heart.textContent =
            Math.random() > 0.5
                ? "♥"
                : "♡";

        heart.style.left =
            `${Math.random() * 100}%`;

        heart.style.fontSize =
            `${10 + Math.random() * 20}px`;

        heart.style.animationDuration =
            `${7 + Math.random() * 8}s`;

        heart.style.animationDelay =
            `${Math.random() * 2}s`;

        backgroundHearts.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 17000);

    }

    setInterval(
        createBackgroundHeart,
        700
    );


    /* =====================================================
       19. HEART BURST
       ===================================================== */

    function createHeartBurst(x, y) {

        for (let i = 0; i < 22; i++) {

            const heart =
                document.createElement("span");

            heart.textContent =
                Math.random() > 0.5
                    ? "♥"
                    : "♡";

            heart.style.position =
                "fixed";

            heart.style.left =
                `${x}px`;

            heart.style.top =
                `${y}px`;

            heart.style.zIndex =
                "999";

            heart.style.pointerEvents =
                "none";

            heart.style.color =
                Math.random() > 0.5
                    ? "#ff9fbd"
                    : "#ffd0df";

            heart.style.fontSize =
                `${10 + Math.random() * 16}px`;

            const angle =
                Math.random() *
                Math.PI *
                2;

            const distance =
                60 +
                Math.random() * 180;

            const endX =
                Math.cos(angle) *
                distance;

            const endY =
                Math.sin(angle) *
                distance;

            heart.animate(
                [
                    {
                        transform:
                            "translate(-50%, -50%) scale(.2)",
                        opacity: 0
                    },
                    {
                        transform:
                            "translate(-50%, -50%) scale(1)",
                        opacity: 1,
                        offset: 0.15
                    },
                    {
                        transform:
                            `translate(
                                calc(-50% + ${endX}px),
                                calc(-50% + ${endY}px)
                            )
                            rotate(${Math.random() * 180 - 90}deg)
                            scale(.8)`,
                        opacity: 0
                    }
                ],
                {
                    duration:
                        1000 +
                        Math.random() * 800,

                    easing: "cubic-bezier(.2,.8,.3,1)"
                }
            );

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 2000);

        }

    }


    /* =====================================================
       20. FINAL HEART EFFECT
       ===================================================== */

    function startFinalHearts() {

        const interval =
            setInterval(() => {

                if (
                    finalScreen &&
                    !finalScreen.classList.contains("hidden")
                ) {

                    createHeartBurst(
                        Math.random() *
                            window.innerWidth,

                        window.innerHeight -
                            30
                    );

                } else {

                    clearInterval(interval);

                }

            }, 3500);

    }


    /* =====================================================
       21. ESC KEY
       ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key !== "Escape") {
                return;
            }

            const popup =
                document.querySelector(
                    ".reason-popup"
                );

            if (popup) {
                popup.remove();
            }

        }
    );


    /* =====================================================
       22. INITIAL HEARTS
       ===================================================== */

    for (let i = 0; i < 8; i++) {

        setTimeout(
            createBackgroundHeart,
            i * 400
        );

    }


    /* =====================================================
       23. CONSOLE MESSAGE
       ===================================================== */

    console.log(
        "%cMade with sincerity ♡",
        "color:#ffabc6;font-size:16px;"
    );

});