// 1. تفاعل زر الطلب في الصفحة الرئيسية
function orderCoffee(coffeeName) {
    alert("تمت إضافة محصول (" + coffeeName + ") إلى سلة طلباتك بنجاح! ☕");
}

// 2. إظهار نصيحة الباريستا في صفحة من نحن
function showTip() {
    const tipElement = document.getElementById("barista-tip");
    tipElement.textContent = "💡 نصيحة اليوم: استخدم ماء بدرجة حرارة 92 مئوية لاستخلاص مثالي يبرز حلاوة القهوة.";
}

// 3. التحقق من إرسال نموذج التواصل
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const feedback = document.getElementById("formFeedback");
        feedback.textContent = "شكراً لك يا " + name + "، تم استلام رسالتك وسنتواصل معك قريباً!";
        contactForm.reset();
    });
}
