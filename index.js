function updateCurrentDate() {
    const currentDate = new Date();
    const daysOfWeekEnglish = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsEnglish = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const daysOfWeekGreek = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'];
    const monthsGreek = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου'];

    let daysOfWeek, months;

    if (document.documentElement.lang === 'el') {
        daysOfWeek = daysOfWeekGreek;
        months = monthsGreek;

        const day = daysOfWeek[currentDate.getDay()];
        const numericDay = currentDate.getDate();
        const month = months[currentDate.getMonth()];
        const year = currentDate.getFullYear();

        const formattedDate = `${day} ${numericDay} ${month} ${year}`;

        const currentDateSpan = document.getElementById('currentDateSpan');
        if (currentDateSpan) {
            currentDateSpan.textContent = formattedDate;
        }
    } else {
        const day = daysOfWeekEnglish[currentDate.getDay()];
        const month = monthsEnglish[currentDate.getMonth()];
        const numericDay = currentDate.getDate();
        const year = currentDate.getFullYear();

        const formattedDate = `${day} ${month} ${numericDay} ${year}`;

        const currentDateSpan = document.getElementById('currentDateSpan');
        if (currentDateSpan) {
            currentDateSpan.textContent = formattedDate;
        }
    }
}

updateCurrentDate();
setInterval(updateCurrentDate, 1000);

let isValid;
function checkSubmit(){
    let name;
    let email;
    let text;
    let nameError;
    let emailError;
    let textError;
    if(document.documentElement.lang==='el'){
        name=document.getElementById("nameGR").value;
        email=document.getElementById("emailGR").value;
        text=document.getElementById("textGR").value;
        nameError=document.getElementById("nameErrorGR");
        emailError=document.getElementById("emailErrorGR");
        textError=document.getElementById("textErrorGR");

        isValid=true;
        if(name.length==0){
            nameError.textContent="*Αυτό το πεδίο είναι υποχρεωτικό*";
            isValid=false;
        }else{
            nameError.style.display="none";
        }

        if(email.length==0){
            emailError.textContent="*Αυτό το πεδίο είναι υποχρεωτικό*";
            isValid=false;
        }else if(!email.includes('@')){
            emailError.textContent="*Μη έγκυρο email*";
            isValid=false;
        }else{
            emailError.style.display="none";
        }

        if(text.length==0){
            textError.textContent="*Αυτό το πεδίο είναι υποχρεωτικό*";
            isValid=false;
        }else if(text.length>100){
            textError.textContent="*Το μήνυμα είναι πολύ μεγάλο*";
            isValid=false;
        }else{
            textError.style.display="none";
        }
    }else{
        name=document.getElementById("nameEN").value;
        email=document.getElementById("emailEN").value;
        text=document.getElementById("textEN").value;
        nameError=document.getElementById("nameErrorEN");
        emailError=document.getElementById("emailErrorEN");
        textError=document.getElementById("textErrorEN");

        isValid=true;
        if(name.length==0){
            nameError.textContent="*This field is mandatory*";
            isValid=false;
        }else{
            nameError.style.display="none";
        }

        if(email.length==0){
            emailError.textContent="*This field is mandatory*";
            isValid=false;
        }else if(!email.includes('@')){
            emailError.textContent="*Not a valid email*";
            isValid=false;
        }else{
            emailError.style.display="none";
        }

        if(text.length==0){
            textError.textContent="*This field is mandatory*";
            isValid=false;
        }else if(text.length>100){
            textError.textContent="*Message is too long*";
            isValid=false;
        }else{
            textError.style.display="none";
        }
    }
}

$(document).ready(function() {
    $("input:button").click(function() {
        if (isValid) {
            if (document.documentElement.lang === 'el') {
                $("#mainDivGR").hide();
                $("#formGR").hide();
                $("#secondDivGR").fadeIn("slow");
            } else {
                $("#mainDivEN").hide();
                $("#formEN").hide();
                $("#secondDivEN").fadeIn("slow");
            }
            setTimeout(refresh, 5000);
        }
    });
});

function refresh(){
    location.reload();
}

function resizeNavbar(){
    let navBar = document.getElementById("navBar");
    if (navBar.className === "container") {
        navBar.className += " responsive";
    } else {
        navBar.className = "container";
    }
}