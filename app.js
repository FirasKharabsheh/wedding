// ==========================================================================
// 1. DYNAMIC REGISTRY STATE STORAGE & ENDPOINT CONFIGURATIONS
// ==========================================================================
window.globalRegistryDatabase = {}; // Memory cache initialized empty

// 👑 Paste your official unique deployed Google Web App macro execution link target directly here
const googleDatabaseEndpointUrl = "https://script.google.com/macros/s/AKfycbw1P_zT7xP5Rie-iHnJtcECf67jIzx4iiWugo1MmF-HUE-lrBPY1TTrQBwJolYTdygmuw/exec";


// جلب رموز وأسماء المدعوين ديناميكياً وحياً من جدول جوجل فور تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
    console.log("🌐 جاري الاتصال الآمن بجدول بيانات جوجل ومزامنة قائمة المدعوين حياً...");
    
    fetch(googleDatabaseEndpointUrl)
    .then(response => response.json())
    .then(data => {
        window.globalRegistryDatabase = data;
        console.log("✅ تم تحميل قاعدة بيانات الضيوف بنجاح ومزامنتها تلقائياً:", window.globalRegistryDatabase);
    })
    .catch(error => {
        console.error("❌ خطأ أثناء جلب البيانات الديناميكية من سيرفر جوجل:", error);
    });
});

// ==========================================================================
// 2. CORE PORTAL OVERLAY & CINEMATIC AUDIO CONFIGURATIONS
// ==========================================================================
const audioPlayerInstance = document.getElementById('ambient-audio-player');
const audioWidgetIconElement = document.getElementById('audio-widget-icon');

// تمرير الشاشة تلقائياً وانسيابياً لأسفل نحو كرت الدعوة لتوفير جهد النقر لكبار السن
window.addEventListener('load', () => {
    if (audioPlayerInstance) {
        audioPlayerInstance.play().catch(() => {
            console.log("المتصفح يطلب تفاعلاً أولياً لتشغيل الصوت، سيتم تفعيله عند أول حركة للضيف.");
        });
        if (audioWidgetIconElement) audioWidgetIconElement.className = "fa-solid fa-volume-high";
    }

    setTimeout(() => {
        const envelopeSection = document.querySelector('.section-envelope-reveal');
        if (envelopeSection) {
            envelopeSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center'     
            });
        }
    }, 1500); // تأخير ثانية ونصف ليعيش الضيف هيبة الواجهة العلوية ثم يتحرك الموقع لأسفل
});

window.toggleAmbientPlayback = function() {
    if (!audioPlayerInstance) return;
    if (audioPlayerInstance.paused) {
        audioPlayerInstance.play();
        if (audioWidgetIconElement) audioWidgetIconElement.className = "fa-solid fa-volume-high";
    } else {
        audioPlayerInstance.pause();
        if (audioWidgetIconElement) audioWidgetIconElement.className = "fa-solid fa-volume-xmark";
    }
};

// ==========================================================================
// 3. CINEMATIC PEARL RAIN & FROST CANVAS GENERATION ENGINE (تأثير الشتاء الكامل)
// ==========================================================================
const rainCanvas = document.getElementById('luxurious-pearl-rain-canvas');
if (rainCanvas) {
    const ctx = rainCanvas.getContext('2d');
    let width = (rainCanvas.width = window.innerWidth);
    let height = (rainCanvas.height = window.innerHeight);

    // تتبع ديناميكي لإعادة ضبط حجم الشاشة عند تدوير الهاتف
    window.addEventListener('resize', () => {
        width = (rainCanvas.width = window.innerWidth);
        height = (rainCanvas.height = window.innerHeight);
    });

    const particlesArray = [];
    const maxParticles = 75; // كثافة تساقط ملوكية ومريحة للنظر ولا تبطئ الموبايل

    class RainDrop {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * -height - 20;
            this.length = Math.random() * 25 + 15; // طول قطرة الشتاء الانسيابية
            this.speed = Math.random() * 4 + 3;    // سرعة الهبوط الناعمة
            this.opacity = Math.random() * 0.3 + 0.15; // قطرات ثلجية شفافة وخفيفة جداً فوق النصوص
            this.radius = Math.random() * 1.5 + 0.5;
        }
        draw() {
            // رسم خيوط الشتاء المنسابة
            ctx.beginPath();
            ctx.strokeStyle = `rgba(118, 141, 164, ${this.opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x, this.y + this.length);
            ctx.stroke();

            // رسم ذرة اللؤلؤ الثلجية المتوهجة بأسفل كل قطرة
            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity + 0.15})`;
            ctx.arc(this.x, this.y + this.length, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
        update() {
            this.y += this.speed;
            if (this.y > height) {
                this.reset();
            }
        }
    }

    // بناء مصفوفة الجسيمات الشتوية
    for (let i = 0; i < maxParticles; i++) {
        particlesArray.push(new RainDrop());
    }

    // حلقة التحريك المستمرة والآمنة لبطارية الهاتف
    function animateRain() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < maxParticles; i++) {
            particlesArray[i].draw();
            particlesArray[i].update();
        }
        requestAnimationFrame(animateRain);
    }
    animateRain();
}

// ==========================================================================
// 4. PASSWORD ACCESS VALIDATION & CONDITIONAL FIELD MANAGEMENT
// ==========================================================================
window.executePasscodeVerification = function() {
    const passcodeField = document.getElementById('guest-passcode-input');
    if (!passcodeField) return;

    const structuralPasscodeKey = passcodeField.value.trim().toUpperCase();
    const verificationPanelBlock = document.getElementById('rsvp-auth-verification-stage');
    const dataSubmissionFormBlock = document.getElementById('rsvp-dynamic-submission-form');
    const contextualGreetingTarget = document.getElementById('authenticated-guest-welcome');
    const proceduralDropdownTarget = document.getElementById('guest-allocated-companions');
    const noticeBannerTarget = document.getElementById('polite-seats-reminder');

    if (window.globalRegistryDatabase && window.globalRegistryDatabase[structuralPasscodeKey]) {
        const structuralGuestProfile = window.globalRegistryDatabase[structuralPasscodeKey];
        
        if (verificationPanelBlock) verificationPanelBlock.style.display = 'none';
        if (dataSubmissionFormBlock) dataSubmissionFormBlock.style.display = 'block';
        if (contextualGreetingTarget) contextualGreetingTarget.innerText = `أهلاً بك، ${structuralGuestProfile.name}`;
        
        if (noticeBannerTarget) {
            noticeBannerTarget.innerHTML = `
                <i class="fa-solid fa-circle-info" style="color: var(--color-gold); margin-left: 8px;"></i>
                لطفاً ومحبة، نود إحاطتكم علماً بأنه قد تم تخصيص وتثبيت 
                <strong>(الحد الأقصى: ${structuralGuestProfile.maxSeats} ${structuralGuestProfile.maxSeats > 2 ? 'مقاعد' : 'مقعدين'})</strong> 
                لكم في مخطط الطاولات الملكية لضمان راحتكم التامة وتنسيق حضوركم الفاخر بما يليق بكم.
            `;
        }
        
        if (proceduralDropdownTarget) {
            proceduralDropdownTarget.innerHTML = '';
            for (let count = 1; count <= structuralGuestProfile.maxSeats; count++) {
                let textContext = count === 1 ? 'تأكيد المقعد الحصري (شخص واحد)' : `تأكيد حضور عائلي لعدد (${count}) أشخاص`;
                proceduralDropdownTarget.innerHTML += `<option value="${count}">${textContext}</option>`;
            }
        }
    } else {
        alert("رمز الدعوة المدخل غير دقيق. يرجى مراجعة بطاقة الدعوة الخاصة بك والتحقق من الرمز.");
    }
};

window.toggleSeatSelectionVisibility = function() {
    const attendanceStatusElement = document.getElementById('guest-attendance-status');
    const containerWrapperElement = document.getElementById('seat-allocation-dropdown-wrapper');
    if (attendanceStatusElement && containerWrapperElement) {
        containerWrapperElement.style.display = (attendanceStatusElement.value === 'yes') ? 'block' : 'none';
    }
};

// ==========================================================================
// 5. ASYNCHRONOUS IN-APP DATABASE REDIRECTION INTERACTION ENGINE
// ==========================================================================
window.transmitRSVPToSpreadsheet = function(event) {
    event.preventDefault();
    
    const passcodeRefKey = document.getElementById('guest-passcode-input').value.trim().toUpperCase();
    const selectedStatusValue = document.getElementById('guest-attendance-status').value;
    const portalFeedbackDisplayElement = document.getElementById('rsvp-portal-status-feedback');
    const actionSubmitButtonNode = document.getElementById('rsvp-submit-action-btn');
    const dynamicPassCardBlock = document.getElementById('digital-entry-pass-card');
    
    if (!window.globalRegistryDatabase || !window.globalRegistryDatabase[passcodeRefKey] || !portalFeedbackDisplayElement || !actionSubmitButtonNode) return;

    const structuralGuestNameStr = window.globalRegistryDatabase[passcodeRefKey].name;
    const finalSeatCountChosen = selectedStatusValue === 'yes' ? document.getElementById('guest-allocated-companions').value : "0";

    actionSubmitButtonNode.disabled = true;
    actionSubmitButtonNode.innerText = "... جاري تسجيل حضوركم الملكي الآن";
    portalFeedbackDisplayElement.innerHTML = `<span style="color: var(--color-gold-light);">يرجى الانتظار لحين إتمام الاتصال الآمن بالسيرفر...</span>`;

    const rsvpSubmissionPayload = {
        passcode: passcodeRefKey,
        name: structuralGuestNameStr,
        attendance: selectedStatusValue,
        seats: finalSeatCountChosen
    };

    fetch(googleDatabaseEndpointUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rsvpSubmissionPayload)
    })
    .then(() => {
        actionSubmitButtonNode.disabled = false;
        actionSubmitButtonNode.innerText = "تأكيد الحجز الفوري الآن";
        
        document.getElementById('rsvp-dynamic-submission-form').style.display = 'none';
        
        if (selectedStatusValue === 'yes') {
            portalFeedbackDisplayElement.innerHTML = `
                <div style="background: rgba(118,141,164,0.04); padding: 2rem; border: 1px solid var(--color-border); text-align: center; animation: fadeIn 0.5s ease; margin-bottom: 2rem;">
                    <i class="fa-solid fa-circle-check" style="color: var(--color-gold-light); font-size: 2.5rem; margin-bottom: 1rem; display: block;"></i>
                    <h3 style="font-family: 'Amiri', serif; margin-bottom: 0.5rem;">تم تأكيد حجزكم بنجاح</h3>
                    <p style="font-size: 1.05rem; color: var(--color-text-light);">شرفتمونا يا عائلتنا الكريمة. تم تثبيت الحجز بنجاح في فندق ماريوت عمّان وننتظركم بكل ابتهاج.</p>
                </div>`;
                
            if (dynamicPassCardBlock) {
                document.getElementById('pass-guest-name').innerText = structuralGuestNameStr;
                document.getElementById('pass-guest-seats').innerText = `${finalSeatCountChosen} مقاعد مخصصة`;
                dynamicPassCardBlock.style.display = 'block';
            }
        } else {
            portalFeedbackDisplayElement.innerHTML = `
                <div style="background: rgba(118,141,164,0.02); padding: 2rem; border: 1px solid var(--color-border); text-align: center; animation: fadeIn 0.5s ease;">
                    <p style="font-size: 1.05rem; color: var(--color-text-light);">نشكرك يا ${structuralGuestNameStr} على إبلاغنا باعتذارك الكريم. دامت دياركم مفعمة بالمسرات العائلية.</p>
                </div>`;
            
            setTimeout(() => {
                const nestedAuthStageRef = document.getElementById('rsvp-auth-verification-stage');
                if (nestedAuthStageRef) nestedAuthStageRef.style.display = 'block';
                if (portalFeedbackDisplayElement) portalFeedbackDisplayElement.innerHTML = '';
                document.getElementById('guest-passcode-input').value = '';
            }, 6000);
        }
    })
    .catch((error) => {
        console.error("Spreadsheet storage connectivity failure node:", error);
        actionSubmitButtonNode.disabled = false;
        actionSubmitButtonNode.innerText = "تأكيد الحجز الفوري الآن";
        portalFeedbackDisplayElement.innerHTML = `<span style="color: #ff4a4a;">عذراً، حدث خطأ في الاتصال بالسيرفر. يرجى المحاولة مرة أخرى.</span>`;
    });
};

// ==========================================================================
// 6. TIME-KEEPING RUNTIME ENGINE MODULE (TARGET DATE: AUGUST 5, 2026)
// ==========================================================================
const countdownTargetEpoch = new Date("Aug 5, 2026 19:30:00").getTime(); 

const activeClockTimerLoop = setInterval(() => {
    const currentInstantEpoch = new Date().getTime();
    const calculatedChronologicalDelta = countdownTargetEpoch - currentInstantEpoch;

    if (calculatedChronologicalDelta < 0) {
        clearInterval(activeClockTimerLoop);
        const visualGridContainerElement = document.querySelector('.countdown-grid-metrics');
        if (visualGridContainerElement) {
            visualGridContainerElement.innerHTML = "<h3 style='color:var(--color-gold-light); font-family: Amiri, serif; width:100%; text-align:center; font-size:1.8rem;'>بدأ الفرح والبهجة، بارك الله لهما وجمع بينهما في خير!</h3>";
        }
        return;
    }

    const parsedDaysValue = Math.floor(calculatedChronologicalDelta / (1000 * 60 * 60 * 24));
    const parsedHoursValue = Math.floor((calculatedChronologicalDelta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const parsedMinutesValue = Math.floor((calculatedChronologicalDelta % (1000 * 60 * 60)) / (1000 * 60));
    const parsedSecondsValue = Math.floor((calculatedChronologicalDelta % (1000 * 60)) / 1000);

    const displayTargetDaysNode = document.getElementById('metric-days');
    const displayTargetHoursNode = document.getElementById('metric-hours');
    const displayTargetMinutesNode = document.getElementById('metric-minutes');
    const displayTargetSecondsNode = document.getElementById('metric-seconds');

    if (displayTargetDaysNode) displayTargetDaysNode.innerText = parsedDaysValue < 10 ? '0' + parsedDaysValue : parsedDaysValue;
    if (displayTargetHoursNode) displayTargetHoursNode.innerText = parsedHoursValue < 10 ? '0' + parsedHoursValue : parsedHoursValue;
    if (displayTargetMinutesNode) displayTargetMinutesNode.innerText = parsedMinutesValue < 10 ? '0' + parsedMinutesValue : parsedMinutesValue;
    if (displayTargetSecondsNode) displayTargetSecondsNode.innerText = parsedSecondsValue < 10 ? '0' + parsedSecondsValue : parsedSecondsValue;
}, 1000);
