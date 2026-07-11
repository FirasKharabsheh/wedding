// ==========================================================================
// 1. DYNAMIC REGISTRY STATE STORAGE & ENDPOINT CONFIGURATIONS
// ==========================================================================
window.globalRegistryDatabase = {}; // Memory cache initialized empty

// 👑 Paste your official unique deployed Google Web App macro execution link target directly here
const googleDatabaseEndpointUrl = "https://script.google.com/macros/s/AKfycbw1P_zT7xP5Rie-iHnJtcECf67jIzx4iiWugo1MmF-HUE-lrBPY1TTrQBwJolYTdygmuw/exec";

// Dynamically pull verified records array straight from your Google Spreadsheet cells on window initialization
// منظومة الانتقال التلقائي الفوري لقسم الدعوة عند فتح الصفحة
window.addEventListener('DOMContentLoaded', () => {
    console.log("🌐 تم تحميل الهيكل.. بدء الانتقال التلقائي الفاخر...");
    
    // تشغيل الموسيقى تلقائياً إن سمحت سياسة المتصفح
    if (audioPlayerInstance) {
        audioPlayerInstance.play().catch(() => {
            console.log("المتصفح يطلب تفاعلاً أولياً لتشغيل الصوت، سيتم تشغيله عند أول حركة للضيف.");
        });
        if (audioWidgetIconElement) audioWidgetIconElement.className = "fa-solid fa-volume-high";
    }

    // الانتظار لمدة ثانية واحدة ليعيش الضيف هيبة الواجهة الرئيسية ثم الانتقال تلقائياً
    setTimeout(() => {
        const envelopeSection = document.querySelector('.section-envelope-reveal');
        if (envelopeSection) {
            envelopeSection.scrollIntoView({ 
                behavior: 'smooth', // حركة تمرير حريرية ناعمة جداً
                block: 'center'     // وضع قسم الظرف في منتصف شاشة الموبايل تماماً
            });
            console.log("✅ تم التمرير الآلي بنجاح لقسم الظرف.");
        }
    }, 1500); // 1500 تعني ثانية ونصف، يمكنك تقليلها لثانية واحدة (1000) إن أردت سرعة أكبر
});

// ==========================================================================
// 2. CORE PORTAL OVERLAY & CINEMATIC AUDIO CONFIGURATIONS
// ==========================================================================
const portalOverlayElement = document.getElementById('cinematic-portal-overlay');
const audioPlayerInstance = document.getElementById('ambient-audio-player');
const audioWidgetIconElement = document.getElementById('audio-widget-icon');

window.initiateCinematicExperience = function() {
    if (portalOverlayElement) {
        portalOverlayElement.classList.add('curtains-open');
    }
    if (audioPlayerInstance) {
        audioPlayerInstance.play().catch(() => {
            console.log("Ambient context user authorization deferred by local browser policy.");
        });
        if (audioWidgetIconElement) {
            audioWidgetIconElement.className = "fa-solid fa-volume-high";
        }
    }
};

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
// 3. PROCEDURAL AMBIENT SILVER AND LUSTRE PARTICLES CANVAS
// ==========================================================================
const structuralParticleContainer = document.getElementById('particle-canvas-ambient');
if (structuralParticleContainer) {
    for (let i = 0; i < 30; i++) {
        const node = document.createElement('div');
        node.className = 'ambient-dust-element';
        const geometrySize = Math.random() * 4 + 2;
        node.style.width = `${geometrySize}px`;
        node.style.height = `${geometrySize}px`;
        node.style.background = Math.random() > 0.45 ? '#e0e0e0' : 'rgba(255,255,255,0.5)';
        node.style.left = `${Math.random() * 100}vw`;
        node.style.animationDuration = `${Math.random() * 8 + 7}s`;
        node.style.animationDelay = `${Math.random() * 5}s`;
        structuralParticleContainer.appendChild(node);
    }
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

    // Reference the dynamic window matrix memory layout block safely
    if (window.globalRegistryDatabase && window.globalRegistryDatabase[structuralPasscodeKey]) {
        const structuralGuestProfile = window.globalRegistryDatabase[structuralPasscodeKey];
        
        if (verificationPanelBlock) verificationPanelBlock.style.display = 'none';
        if (dataSubmissionFormBlock) dataSubmissionFormBlock.style.display = 'block';
        if (contextualGreetingTarget) contextualGreetingTarget.innerText = `أهلاً بك، ${structuralGuestProfile.name}`;
        
        if (noticeBannerTarget) {
            noticeBannerTarget.innerHTML = `
                <i class="fa-solid fa-circle-info" style="color: var(--color-silver-light); margin-left: 8px;"></i>
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
    
    if (!window.globalRegistryDatabase || !window.globalRegistryDatabase[passcodeRefKey] || !portalFeedbackDisplayElement || !actionSubmitButtonNode) return;

    const structuralGuestNameStr = window.globalRegistryDatabase[passcodeRefKey].name;
    const finalSeatCountChosen = selectedStatusValue === 'yes' ? document.getElementById('guest-allocated-companions').value : "0";

    actionSubmitButtonNode.disabled = true;
    actionSubmitButtonNode.innerText = "... جاري تسجيل حضوركم الملكي الآن";
    portalFeedbackDisplayElement.innerHTML = `<span style="color: #ffffff;">يرجى الانتظار لحين إتمام الاتصال الآمن بالسيرفر...</span>`;

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
        
        if (selectedStatusValue === 'yes') {
            portalFeedbackDisplayElement.innerHTML = `
                <div style="background: rgba(255,255,255,0.04); padding: 2rem; border: 1px solid var(--color-border); text-align: center; animation: fadeIn 0.5s ease;">
                    <i class="fa-solid fa-circle-check" style="color: #ffffff; font-size: 2.5rem; margin-bottom: 1rem; display: block;"></i>
                    <h3 style="font-family: 'Amiri', serif; margin-bottom: 0.5rem; color: #ffffff;">تم تأكيد حجزكم بنجاح</h3>
                    <p style="font-size: 1.05rem; color: #ffffff;">شرفتمونا يا ${structuralGuestNameStr}. تم تثبيت عدد (${finalSeatCountChosen}) مقاعد لسيادتكم في فندق ماريوت عمّان وننتظركم بكل ابتهاج.</p>
                </div>`;
        } else {
            portalFeedbackDisplayElement.innerHTML = `
                <div style="background: rgba(255,255,255,0.02); padding: 2rem; border: 1px solid var(--color-border); text-align: center; animation: fadeIn 0.5s ease;">
                    <p style="font-size: 1.05rem; color: #ffffff;">نشكرك يا ${structuralGuestNameStr} على إبلاغنا باعتذارك الكريم. دامت دياركم مفعمة بالمسرات.</p>
                </div>`;
        }
        
        document.getElementById('rsvp-dynamic-submission-form').reset();
        setTimeout(() => {
            const nestedDataDetailsRef = document.getElementById('rsvp-dynamic-submission-form');
            const nestedAuthStageRef = document.getElementById('rsvp-auth-verification-stage');
            if (nestedDataDetailsRef) nestedDataDetailsRef.style.display = 'none';
            if (nestedAuthStageRef) nestedAuthStageRef.style.display = 'block';
            if (portalFeedbackDisplayElement) portalFeedbackDisplayElement.innerHTML = '';
        }, 6000);
    })
    .catch((error) => {
        console.error("Spreadsheet storage connectivity failure node:", error);
        actionSubmitButtonNode.disabled = false;
        actionSubmitButtonNode.innerText = "تأكيد الحجز الفوري الآن";
        portalFeedbackDisplayElement.innerHTML = `<span style="color: #ff4a4a;">عذراً، حدث خطأ في الاتصال بالسيرفر. يرجى المحاولة مرة أخرى.</span>`;
    });
};

// ==========================================================================
// 6. SCROLL DEPTH TRANSFORM TO REVEAL THE INTERACTIVE ENVELOPE CARD SHEET
// ==========================================================================
window.addEventListener('scroll', () => {
    const globalTargetSection = document.querySelector('.section-envelope-reveal');
    const activeEnvelopeContainerElement = document.getElementById('wedding-interactive-envelope');
    if (!globalTargetSection || !activeEnvelopeContainerElement) return;

    const structuralBoundingTop = globalTargetSection.getBoundingClientRect().top;
    if (structuralBoundingTop < window.innerHeight / 1.6) {
        activeEnvelopeContainerElement.classList.add('is-open');
    } else {
        activeEnvelopeContainerElement.classList.remove('is-open');
    }
});

// ==========================================================================
// 7. TIME-KEEPING RUNTIME ENGINE MODULE (TARGET DATE: Aug 05, 2026)
// ==========================================================================

const countdownTargetEpoch = new Date("Aug 5, 2026 19:30:00").getTime();
const activeClockTimerLoop = setInterval(() => {
    const currentInstantEpoch = new Date().getTime();
    const calculatedChronologicalDelta = countdownTargetEpoch - currentInstantEpoch;

    if (calculatedChronologicalDelta < 0) {
        clearInterval(activeClockTimerLoop);
        const visualGridContainerElement = document.querySelector('.countdown-grid-metrics');
        if (visualGridContainerElement) {
            visualGridContainerElement.innerHTML = "<h3 style='color:#ffffff; font-family: Amiri, serif; width:100%; text-align:center; font-size:1.8rem;'>بدأ الفرح والبهجة، بارك الله لهما وجمع بينهما في خير!</h3>";
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
if (displayTargetSecondsNode) displayTargetSecondsNode.innerText = parsedSecondsValue < 10 ? '0' + parsedSecondsValue : parsedSecondsValue;}, 1000);
