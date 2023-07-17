/*
// After verifying the user's credentials, retrieve their grade from the database
const hadua1Grade = // Retrieve the grade for "חדו"א 1" from the database based on the user's email

// Fill the input field with the retrieved grade
document.getElementById('hadua1-grade').value = hadua1Grade;
*/

function getCookieValue(cookieName) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(cookieName + '=')) {
        return cookie.substring(cookieName.length + 1);
      }
    }
    return null;
  }

addEventListener("DOMContentLoaded", (event) => {
    let d = getCookieValue("h1");
    
    if (d != "j%3Anull" && d !== "0.00")
    {
        document.getElementById("hadua1-grade").placeholder = d;
    }
    let f = getCookieValue("f1");
    
    if (f !== "j%3Anull" && f !== "0.00")
    {
        document.getElementById("fizica-grade").placeholder = f;
    }

    let m = getCookieValue("m1");
    if (m != "j%3Anull" && m !== "0.00")
    {
        document.getElementById("meam-grade").placeholder = m;
    }

    let b1 = getCookieValue("b1");
    
    if (b1 != "j%3Anull" && b1 !== "0.00")
    {
        document.getElementById("meteoro").placeholder = b1;
    }
    let b2 = getCookieValue("b2");
    
    if (b2 !== "j%3Anull" && b2 !== "0.00")
    {
        document.getElementById("platforma").placeholder = b2;
    }

    let b3 = getCookieValue("b3");
    if (b3 != "j%3Anull" && b3 !== "0.00")
    {
        document.getElementById("aviro").placeholder = b3;
    }

    let r = getCookieValue("r");
    if (r != "j%3Anull" && r !== "0.00")
    {
        document.getElementById("rishoni").placeholder = r;
    }

    let MISc11 = getCookieValue("MISc11");
    if (MISc11 !== "j%3Anull" && MISc11 !== "0.00" && document.getElementById("MISc11") != null) {
        document.getElementById("MISc11").placeholder = MISc11;
    }

    // Repeat the above block for each value in the list
    // Replace the cookie name and the element ID with the corresponding values

    let MISc12 = getCookieValue("MISc12");
    if (MISc12 !== "j%3Anull" && MISc12 !== "0.00") {
        document.getElementById("MISc12").placeholder = MISc12;
    }

    let MISc13 = getCookieValue("MISc13");
    if (MISc13 !== "j%3Anull" && MISc13 !== "0.00") {
        document.getElementById("MISc13").placeholder = MISc13;
    }

    let MISc14 = getCookieValue("MISc14");
    if (MISc14 !== "j%3Anull" && MISc14 !== "0.00") {
        document.getElementById("MISc14").placeholder = MISc14;
    }

    let MISc15 = getCookieValue("MISc15");
    if (MISc15 !== "j%3Anull" && MISc15 !== "0.00") {
        document.getElementById("MISc15").placeholder = MISc15;
    }

    let MISc16 = getCookieValue("MISc16");
    if (MISc16 !== "j%3Anull" && MISc16 !== "0.00") {
        document.getElementById("MISc16").placeholder = MISc16;
    }

    let MISc17 = getCookieValue("MISc17");
    if (MISc17 !== "j%3Anull" && MISc17 !== "0.00") {
        document.getElementById("MISc17").placeholder = MISc17;
    }

    let MISc18 = getCookieValue("MISc18");
    if (MISc18 !== "j%3Anull" && MISc18 !== "0.00") {
        document.getElementById("MISc18").placeholder = MISc18;
    }

    let MISc21 = getCookieValue("MISc21");
    if (MISc21 !== "j%3Anull" && MISc21 !== "0.00") {
        document.getElementById("MISc21").placeholder = MISc21;
    }

    let MISc22 = getCookieValue("MISc22");
    if (MISc22 !== "j%3Anull" && MISc22 !== "0.00") {
        document.getElementById("MISc22").placeholder = MISc22;
    }

    let MISc23 = getCookieValue("MISc23");
    if (MISc23 !== "j%3Anull" && MISc23 !== "0.00") {
        document.getElementById("MISc23").placeholder = MISc23;
    }

    let MISc24 = getCookieValue("MISc24");
    if (MISc24 !== "j%3Anull" && MISc24 !== "0.00") {
        document.getElementById("MISc24").placeholder = MISc24;
    }

    let MISc25 = getCookieValue("MISc25");
    if (MISc25 !== "j%3Anull" && MISc25 !== "0.00") {
        document.getElementById("MISc25").placeholder = MISc25;
    }

    let MISc26 = getCookieValue("MISc26");
    if (MISc26 !== "j%3Anull" && MISc26 !== "0.00") {
        document.getElementById("MISc26").placeholder = MISc26;
    }

    let MISc27 = getCookieValue("MISc27");
    if (MISc27 !== "j%3Anull" && MISc27 !== "0.00") {
        document.getElementById("MISc27").placeholder = MISc27;
    }

    let MISc28 = getCookieValue("MISc28");
    if (MISc28 !== "j%3Anull" && MISc28 !== "0.00") {
        document.getElementById("MISc28").placeholder = MISc28;
    }

    let MISc29 = getCookieValue("MISc29");
    if (MISc29 !== "j%3Anull" && MISc29 !== "0.00") {
        document.getElementById("MISc29").placeholder = MISc29;
    }

    let MISc210 = getCookieValue("MISc210");
    if (MISc210 !== "j%3Anull" && MISc210 !== "0.00") {
        document.getElementById("MISc210").placeholder = MISc210;
    }

    let MISc211 = getCookieValue("MISc211");
    if (MISc211 !== "j%3Anull" && MISc211 !== "0.00") {
        document.getElementById("MISc211").placeholder = MISc211;
    }

    let MISc31 = getCookieValue("MISc31");
    if (MISc31 !== "j%3Anull" && MISc31 !== "0.00") {
        document.getElementById("MISc31").placeholder = MISc31;
    }

    let MISc32 = getCookieValue("MISc32");
    if (MISc32 !== "j%3Anull" && MISc32 !== "0.00") {
        document.getElementById("MISc32").placeholder = MISc32;
    }

    let MISc33 = getCookieValue("MISc33");
    if (MISc33 !== "j%3Anull" && MISc33 !== "0.00") {
        document.getElementById("MISc33").placeholder = MISc33;
    }

    let MISc34 = getCookieValue("MISc34");
    if (MISc34 !== "j%3Anull" && MISc34 !== "0.00") {
        document.getElementById("MISc34").placeholder = MISc34;
    }

    let MISc35 = getCookieValue("MISc35");
    if (MISc35 !== "j%3Anull" && MISc35 !== "0.00") {
        document.getElementById("MISc35").placeholder = MISc35;
    }

    let MISc36 = getCookieValue("MISc36");
    if (MISc36 !== "j%3Anull" && MISc36 !== "0.00") {
        document.getElementById("MISc36").placeholder = MISc36;
    }

    let MISc37 = getCookieValue("MISc37");
    if (MISc37 !== "j%3Anull" && MISc37 !== "0.00") {
        document.getElementById("MISc37").placeholder = MISc37;
    }

    let MISc38 = getCookieValue("MISc38");
    if (MISc38 !== "j%3Anull" && MISc38 !== "0.00") {
        document.getElementById("MISc38").placeholder = MISc38;
    }

    let MISc39 = getCookieValue("MISc39");
    if (MISc39 !== "j%3Anull" && MISc39 !== "0.00") {
        document.getElementById("MISc39").placeholder = MISc39;
    }

    let MISc310 = getCookieValue("MISc310");
    if (MISc310 !== "j%3Anull" && MISc310 !== "0.00") {
        document.getElementById("MISc310").placeholder = MISc310;
    }

    let CSc11 = getCookieValue("CSc11");
    if (CSc11 !== "j%3Anull" && CSc11 !== "0.00") {
        document.getElementById("CSc11").placeholder = CSc11;
    }

    let CSc12 = getCookieValue("CSc12");
    if (CSc12 !== "j%3Anull" && CSc12 !== "0.00") {
        document.getElementById("CSc12").placeholder = CSc12;
    }

    let CSc13 = getCookieValue("CSc13");
    if (CSc13 !== "j%3Anull" && CSc13 !== "0.00") {
        document.getElementById("CSc13").placeholder = CSc13;
    }

    let CSc14 = getCookieValue("CSc14");
    if (CSc14 !== "j%3Anull" && CSc14 !== "0.00") {
        document.getElementById("CSc14").placeholder = CSc14;
    }

    let CSc15 = getCookieValue("CSc15");
    if (CSc15 !== "j%3Anull" && CSc15 !== "0.00") {
        document.getElementById("CSc15").placeholder = CSc15;
    }

    let CSc16 = getCookieValue("CSc16");
    if (CSc16 !== "j%3Anull" && CSc16 !== "0.00") {
        document.getElementById("CSc16").placeholder = CSc16;
    }

    let CSc21 = getCookieValue("CSc21");
    if (CSc21 !== "j%3Anull" && CSc21 !== "0.00") {
        document.getElementById("CSc21").placeholder = CSc21;
    }

    let CSc22 = getCookieValue("CSc22");
    if (CSc22 !== "j%3Anull" && CSc22 !== "0.00") {
        document.getElementById("CSc22").placeholder = CSc22;
    }

    let CSc23 = getCookieValue("CSc23");
    if (CSc23 !== "j%3Anull" && CSc23 !== "0.00") {
        document.getElementById("CSc23").placeholder = CSc23;
    }

    let CSc24 = getCookieValue("CSc24");
    if (CSc24 !== "j%3Anull" && CSc24 !== "0.00") {
        document.getElementById("CSc24").placeholder = CSc24;
    }

    let CSc25 = getCookieValue("CSc25");
    if (CSc25 !== "j%3Anull" && CSc25 !== "0.00") {
        document.getElementById("CSc25").placeholder = CSc25;
    }

    let CSc31 = getCookieValue("CSc31");
    if (CSc31 !== "j%3Anull" && CSc31 !== "0.00") {
        document.getElementById("CSc31").placeholder = CSc31;
    }

    let CSc32 = getCookieValue("CSc32");
    if (CSc32 !== "j%3Anull" && CSc32 !== "0.00") {
        document.getElementById("CSc32").placeholder = CSc32;
    }

    let CSc33 = getCookieValue("CSc33");
    if (CSc33 !== "j%3Anull" && CSc33 !== "0.00") {
        document.getElementById("CSc33").placeholder = CSc33;
    }

    let CSc34 = getCookieValue("CSc34");
    if (CSc34 !== "j%3Anull" && CSc34 !== "0.00") {
        document.getElementById("CSc34").placeholder = CSc34;
    }

    let CSc35 = getCookieValue("CSc35");
    if (CSc35 !== "j%3Anull" && CSc35 !== "0.00") {
        document.getElementById("CSc35").placeholder = CSc35;
    }

    // check if haskala is chosen
    let semesters = 6;
    if (document.getElementById("degree").value != "Select a degree")
    {
        semesters = 3;
    }

    for(let x = 1; x <= semesters; x++)
        calculateSemesterAverage('semester' + x.toString());
    
    
});

function generateRecommendation() {
    var tables = document.getElementsByClassName('semester');
    var subjects = [];
  
    // Loop through each table
    for (var i = 0; i < tables.length; i++) {
      var table = tables[i];
      var gradeInputs = table.querySelectorAll('input[type="number"]');
  
      // Loop through each grade input in the table
      for (var j = 0; j < gradeInputs.length; j++) {
        var gradeInput = gradeInputs[j];
        var grade = parseFloat(gradeInput.value);
  
        // If the user's input is empty, use the placeholder value
        if (isNaN(grade) && gradeInput.placeholder !== '') {
          grade = parseFloat(gradeInput.placeholder);
        }
  
        // Only consider subjects with a valid grade
        if (!isNaN(grade)) {
          var subjectRow = gradeInput.closest('tr');
          var subjectName = subjectRow.querySelector('td:first-child').innerText;
          var subjectCredits = parseFloat(subjectRow.querySelector('td:nth-child(2)').innerText);
  
          // Add subject to the subjects array
          subjects.push({
            name: subjectName,
            credits: subjectCredits,
            grade: grade
          });
        }
      }
    }
  
    // Calculate the current average
    var totalCredits = 0;
    var totalGradePoints = 0;
  
    subjects.forEach(function (subject) {
      totalCredits += subject.credits;
      totalGradePoints += subject.grade * subject.credits;
    });
  
    var currentAverage = totalGradePoints / totalCredits;
  
    // Sort subjects by their impact on the average
    subjects.sort(function (a, b) {
      var impactA = (currentAverage - a.grade) * a.credits;
      var impactB = (currentAverage - b.grade) * b.credits;
      return impactB - impactA;
    });
  
    // Get the recommended subject
    var recommendation = subjects[0].name;
  
    // Display the recommendation
    var recommendationElement = document.getElementById('recommendation');
    recommendationElement.innerText = "Recommendation: " + recommendation;
  }
  

/*function calculateSemesterAverage(semesterId) {
    const table = document.getElementById(semesterId);
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    let totalCredits = 0;
    let totalGrade = 0;
    for (let i = 0; i < rows.length; i++) {
      const credits = parseFloat(rows[i].getElementsByTagName('td')[1].innerText);
      const gradeInput = rows[i].getElementsByTagName('td')[2].getElementsByTagName('input')[0];
      const grade = parseFloat(gradeInput.value);
      
      if (!isNaN(grade)) {
        totalCredits += credits;
        totalGrade += grade * credits;
      }
    }
    const semesterAverage = totalGrade / totalCredits;
    const averageSpan = document.getElementById(semesterId + '-average');
    averageSpan.innerText = semesterAverage.toFixed(2);
  }*/
  /*
  function calculateSemesterAverage(semesterId) {
    const table = document.getElementById(semesterId);
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    let totalCredits = 0;
    let totalGrade = 0;
    for (let i = 0; i < rows.length; i++) {
      const credits = parseFloat(rows[i].getElementsByTagName('td')[1].innerText);
      const gradeInput = rows[i].getElementsByTagName('td')[2].getElementsByTagName('input')[0];
      const grade = parseFloat(gradeInput.value);
      
      if (!isNaN(grade)) {
        totalCredits += credits;
        totalGrade += grade * credits;
      }
    }
    const semesterAverage = totalGrade / totalCredits;
    const averageSpan = document.getElementById(semesterId + '-average');
    averageSpan.innerText = semesterAverage.toFixed(2);
  }
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function calculateSemesterAverage(semesterId) {
    const table = document.getElementById(semesterId);
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    let totalCredits = 0;
    let totalGrade = 0;
    for (let i = 0; i < rows.length - 1; i++) {
      const credits = parseFloat(rows[i].getElementsByTagName('td')[1].innerText);
      const gradeInput = rows[i].getElementsByTagName('td')[2].getElementsByTagName('input')[0];
      const gradePlaceholder = parseFloat(gradeInput.placeholder);
      
      let grade;
      if (gradeInput.value !== '') {
        grade = parseFloat(gradeInput.value);
      } else {
        grade = gradePlaceholder;
      }
  
      if (!isNaN(grade)) {
        totalCredits += credits;
        totalGrade += grade * credits;
      }
    }
    const semesterAverage = totalGrade / totalCredits;
    const averageSpan = document.getElementById(semesterId + '-average');
    averageSpan.innerText = semesterAverage.toFixed(2);
  }










  
  function calculateOverallAverage() {
    var tables = document.getElementsByClassName('semester');
    var subjects = [];
  
    // Loop through each table
    for (var i = 0; i < tables.length; i++) {
      var table = tables[i];
      var gradeInputs = table.querySelectorAll('input[type="number"]');
  
      // Loop through each grade input in the table
      for (var j = 0; j < gradeInputs.length; j++) {
        var gradeInput = gradeInputs[j];
        var grade = parseFloat(gradeInput.value);
  
        // If the user's input is empty, use the placeholder value
        if (isNaN(grade) && gradeInput.placeholder !== '') {
          grade = parseFloat(gradeInput.placeholder);
        }
  
        // Only consider subjects with a valid grade
        if (!isNaN(grade)) {
          var subjectRow = gradeInput.closest('tr');
          var subjectName = subjectRow.querySelector('td:first-child').innerText;
          var subjectCredits = parseFloat(subjectRow.querySelector('td:nth-child(2)').innerText);
  
          // Add subject to the subjects array
          subjects.push({
            name: subjectName,
            credits: subjectCredits,
            grade: grade
          });
        }
      }
    }
  
    // Calculate the overall average
    var totalCredits = 0;
    var totalGradePoints = 0;
  
    subjects.forEach(function (subject) {
      totalCredits += subject.credits;
      totalGradePoints += subject.grade * subject.credits;
    });
  
    var overallAverage = totalGradePoints / totalCredits;
  
    // Display the overall average
    var overallAverageElement = document.getElementById('overall-average');
    overallAverageElement.innerText = overallAverage.toFixed(2);
  }
  

  
  function showSemesterTables() {
    var degree = document.getElementById('degree').value;
    var semesterTables = document.getElementById('semesterTables');

    if (degree === 'mis') {
        semesterTables.innerHTML = `
    <table id="semester4" class="semester">
    <form action="/formMis4" method="post">
    <caption>semester 4</caption>
    <br>
    <thead>
    <tr>
        <th>שם הקורס</th>
        <th>נקודות זכות</th>
        <th>ציון</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>מבוא לסטטיסטיקה לניהול</td>
        <td>4</td>
        <td><input name="MISc11" id="MISc11" type="number" min="0" max="100" step="0.01"></td>
    </tr>
    <tr>
        <td>מבוא לאלגברה ליניארית</td>
        <td>3.5</td>
        <td><input name="MISc12" id="MISc12" type="number" min="0" max="100" step="0.01"></td>
    </tr>
    <tr>
        <td>מבוא לפיתוח תוכנה מונחה עצמים</td>
        <td>4</td>
        <td><input name="MISc13" id="MISc13" type="number" min="0" max="100" step="0.01"></td>
    </tr>
    <tr>
        <td>חקר ביצועים</td>
        <td>3.5</td>
        <td><input name="MISc14" id="MISc14" type="number" min="0" max="100" step="0.01"></td>
    </tr>
    <tr>
        <td>מבוא למערכות מידע</td>
        <td>3</td>
        <td><input name="MISc15" id="MISc15" type="number" min="0" max="100" step="0.01"></td>
    </tr>
    <tr>
        <td>מבוא לחשבונאות</td>
        <td>4</td>
        <td><input name="MISc16" id="MISc16" type="number" min="0" max="100" step="0.01"></td>
    </tr>
    <tr>
        <td>פיזיקה ב׳</td>
        <td>5</td>
        <td><input name="cMIS17" id="MISc17" type="number" min="0" max="100" step="0.01"></td>
    </tr>
    <tr>
        <td>מבוא לכלכלה (מאקרו ומיקרו)</td>
        <td>4</td>
        <td><input name="MISc18" id="MISc18" type="number" min="0" max="100" step="0.01"></td>
    </tr>
    <tr>
    <td></td>
    <td><input class="button" type="submit"  value="Calculate Semester 4 Average"></td>
    </tr>
    </tbody>
    </form>
    </table>
    <p></p>
    <p></p>
    <div>
    Semester 4 Average: <span id="semester 4-average"></span><br>
    </div>

<table id="semester5" class="semester">
<form action="/formMis5" method="post">
<caption>semester 5</caption>
<thead>
<tr>
    <th>שם הקורס</th>
    <th>נקודות זכות</th>
    <th>ציון</th>
</tr>
</thead>
<tbody>
<tr>
    <td>דת האסלאם והמזה"ת המודרני</td>
    <td>2</td>
    <td><input name="MISc21" id="MISc21" name="c21" id="c21"type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבוא לאקונומטריקה</td>
    <td>4</td>
    <td><input name="MISc22" id="MISc22" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>סיפורם של "האחרים" בקולנוע הישראלי</td>
    <td>2</td>
    <td><input name="MISc23" id="MISc23" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>ניתוח ועיצוב מערכות מידע</td>
    <td>3.5</td>
    <td><input name="MISc24" id="MISc24" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>בניית מערכות ממוחשבות - WEB</td>
    <td>3</td>
    <td><input name="MISc25" id="MISc25" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>בסיסי נתונים</td>
    <td>3.5</td>
    <td><input name="MISc26" id="MISc26" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>ניהול ידע</td>
    <td>3</td>
    <td><input name="MISc27" id="MISc27" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>התנהגות ארגונית בניהול</td>
    <td>3</td>
    <td><input name="MISc28" id="MISc28" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבוא לשיווק</td>
    <td>3</td>
    <td><input name="MISc29" id="MISc29" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבוא למימון</td>
    <td>4</td>
    <td><input name="MISc210" id="MISc210" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>אסטרטגיה עסקית</td>
    <td>3</td>
    <td><input name="MISc211" id="MISc211" type="number" min="0" max="100" step="0.01"></td>
</tr>
</tbody>
</form>
</table>
<p></p>
<button onclick="calculateSemesterAverage('semester 5')">Calculate Semester 5 Average</button>
<p></p>
<div>
Semester 5 Average: <span id="semester 5-average"></span><br>
</div>


<table id="semester6" class="semester">
<form action="/formMis6" method="post">
<caption>semester 6</caption>
<thead>
<tr>
    <th>Course Name</th>
    <th>Credits</th>
    <th>Grade</th>
</tr>
</thead>
<tbody>
<tr>
    <td>גיאודזיה</td>
    <td>2</td>
    <td><input name="MISc31" id="MISc31" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>בינה עסקית BI</td>
    <td>3</td>
    <td><input name="MISc32" id="MISc32" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>ניהול פרוייקטים של תוכנה</td>
    <td>3</td>
    <td><input name="MISc33" id="MISc33" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>אסטרטגיה וניהול של מערכות מידע</td>
    <td>3</td>
    <td><input name="MISc34" id="MISc34" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>תשתיות טכנולוגיות</td>
    <td>3</td>
    <td><input name="MISc35" id="MISc35" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>פרויקט גמר</td>
    <td>3</td>
    <td><input name="MISc36" id="MISc36" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>ישומים ארגוניים ERP</td>
    <td>3</td>
    <td><input name="MISc37" id="MISc37" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>יזמות היי-טק</td>
    <td>3</td>
    <td><input name="MISc38" id="MISc38" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>שיפוט וקבלת החלטות</td>
    <td>3</td>
    <td><input name="MISc39" id="MISc39" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>אנגלית</td>
    <td>2</td>
    <td><input name="MISc310" id="MISc310" type="number" min="0" max="100" step="0.01"></td>
</tr>
</tbody>
</form>
</table>
<p></p>
<button onclick="calculateSemesterAverage('semester 6')">Calculate Semester 6 Average</button>
<p></p>
<div>
Semester 6 Average: <span id="semester 6-average"></span><br>
</div>
    `;
    } else if (degree === 'cs') {
        semesterTables.innerHTML = `
        <table id="semester 4" class="semester">
        <form action="/formCs4" method="post">
<caption>semester 4</caption>
<thead>
<tr>
    <th>Course Name</th>
    <th>Credits</th>
    <th>Grade</th>
</tr>
</thead>
<tbody>
<tr>
    <td>מבוא למדעי המחשב</td>
    <td>4</td>
    <td><input name="CSc11" id="CSc11" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבוא לאלגברה ליניארית</td>
    <td>3.5</td>
    <td><input name="CSc12" id="CSc12" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבוא לאלגוריתמים</td>
    <td>4</td>
    <td><input name="CSc13" id="CSc13" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מתמטיקה דיסקרטית</td>
    <td>3.5</td>
    <td><input name="CSc14" id="CSc14" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>חשבון אינפיניטסימלי 1</td>
    <td>3</td>
    <td><input name="CSc15" id="CSc15" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבוא לפיסיקה א'</td>
    <td>5</td>
    <td><input name="CSc16" id="CSc16" type="number" min="0" max="100" step="0.01"></td>
</tr>
</tbody>
</form>
</table>
<p></p>
<button onclick="calculateSemesterAverage('semester 4')">Calculate Semester 4 Average</button>
<p></p>
<div>
Semester 4 Average: <span id="semester 4-average"></span><br>
</div>

<table id="semester 5" class="semester">
<form action="/formCs5" method="post">
<caption>semester 5</caption>
<thead>
<tr>
    <th>Course Name</th>
    <th>Credits</th>
    <th>Grade</th>
</tr>
</thead>
<tbody>
<tr>
    <td>אנגלית למדעי המחשב 1</td>
    <td>2</td>
    <td><input name="CSc21" id="CSc21" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבוא לשפת תכנות C++</td>
    <td>4</td>
    <td><input name="CSc22" id="CSc22" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבני נתונים 1</td>
    <td>4</td>
    <td><input name="CSc23" id="CSc23" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מתמטיקה דיסקרטית מורחב</td>
    <td>4</td>
    <td><input name="CSc24" id="CSc24" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>אלגוריתמים 1</td>
    <td>4</td>
    <td><input name="CSc25" id="CSc25" type="number" min="0" max="100" step="0.01"></td>
</tr>
</tbody>
</form>
</table>
<p></p>
<button onclick="calculateSemesterAverage('semester 5')">Calculate Semester 5 Average</button>
<p></p>
<div>
Semester 5 Average: <span id="semester 5-average"></span><br>
</div>

<table id="semester 6" class="semester">
<form action="/formCs6" method="post">
<caption>semester 6</caption>
<thead>
<tr>
    <th>Course Name</th>
    <th>Credits</th>
    <th>Grade</th>
</tr>
</thead>
<tbody>
<tr>
    <td>אנגלית למדעי המחשב 2</td>
    <td>2</td>
    <td><input name="CSc31" id="CSc31" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבני נתונים 2</td>
    <td>4</td>
    <td><input name="CSc32" id="CSc32" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>שפות תכנות</td>
    <td>4</td>
    <td><input name="CSc33" id="CSc33" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>רשתות מחשבים</td>
    <td>4</td>
    <td><input name="CSc34" id="CSc34" type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מערכות הפעלה</td>
    <td>4</td>
    <td><input name="CSc35" id="CSc35" type="number" min="0" max="100" step="0.01"></td>
</tr>
</tbody>
</form>
</table>
<p></p>
<button onclick="calculateSemesterAverage('semester 6')">Calculate Semester 6 Average</button>
<p></p>
<div>
Semester 6 Average: <span id="semester 6-average"></span><br>
</div>
        `;
    } else if (degree === 'politics') {
        semesterTables.innerHTML = `
        <table id="semester 4" class="semester">
<caption>Semester ד</caption>
<thead>
<tr>
    <th>Course Name</th>
    <th>Credits</th>
    <th>Grade</th>
</tr>
</thead>
<tbody>
<tr>
    <td>כלכלה</td>
    <td>3.5</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>חשבונאות</td>
    <td>3.5</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>סטטיסטיקה</td>
    <td>3.5</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
 <tr>
    <td>ישומי מחשב</td>
    <td>0.5</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
 <tr>
    <td>פיזיקה 2</td>
    <td>5</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
 <tr>
    <td>מבוא היסטורי</td>
    <td>5</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
 <tr>
    <td>יחבל</td>
    <td>5</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
 <tr>
    <td>מבוא לפו"מ</td>
    <td>6</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
</tbody>
</table>
<p></p>
<button onclick="calculateSemesterAverage('semester 4')">Calculate Semester 4 Average</button>
<p></p>
<div>
Semester 4 Average: <span id="semester 4-average"></span><br>
</div>

<table id="semester 5" class="semester">
<caption>Semester ה</caption>
<thead>
<tr>
    <th>Course Name</th>
    <th>Credits</th>
    <th>Grade</th>
</tr>
</thead>
<tbody>
<tr>
    <td>אסטרטגיה עסקית</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
 <tr>
    <td>מימון</td>
    <td>3.5</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
 <tr>
    <td>שיווק</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
 <tr>
    <td>סוגיות בלוחמ"א</td>
    <td>2</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
 <tr>
    <td>איסלאם-ניהול</td>
    <td>2</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
 <tr>
    <td>סלמן-סמינר</td>
    <td>2</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
 <tr>
    <td>גישות ושיטות מחקר</td>
    <td>6</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
 <tr>
    <td>מבוא למחשבה מדינית</td>
    <td>5</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>המשטר הפוליטי ביש'</td>
    <td>5</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
</tbody>
</table>
<p></p>
<button onclick="calculateSemesterAverage('semester 5')">Calculate Semester 5 Average</button>
<p></p>
<div>
Semester 5 Average: <span id="semester 5-average"></span><br>
</div>
<table id="semester 6" class="semester">
<caption>Semester ו</caption>
<thead>
<tr>
    <th>Course Name</th>
    <th>Credits</th>
    <th>Grade</th>
</tr>
</thead>
<tbody>
<tr>
    <td>פוליטיקה השוואתית</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
 <tr>
    <td>שיפוט וקבלת החלטות</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
 <tr>
    <td>מלחמת הכוכבים</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
 <tr>
    <td>צבא חברה</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
 <tr>
    <td>גיאודזיה</td>
    <td>2</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
 <tr>
    <td>מזרח תיכון</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
 <tr>
    <td>יזמות והייטק</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
 <tr>
    <td>מבוא למשפט</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
 <tr>
    <td>סלמן 2</td>
    <td>2</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
 <tr>
    <td>אנגלית semester 6'</td>
    <td>2</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
</tbody>
</table>
<p></p>
<button onclick="calculateSemesterAverage('semester 6')">Calculate Semester 6 Average</button>
<p></p>
<div>
Semester 6 Average: <span id="semester6-average"></span><br>
</div>
        `;
    } else if (degree === 'economics') {
        semesterTables.innerHTML = `
        <table id="semester 4" class="semester">
<caption>Semester ד</caption>
<thead>
<tr>
    <th>Course Name</th>
    <th>Credits</th>
    <th>Grade</th>
</tr>
</thead>
<tbody>
<tr>
    <td>מבוא למיקרו</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבוא למאקרו</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>סטטיסטיקה א'</td>
    <td>3.5</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>סטטיסטיקה ב'</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>אתיקה לניהול</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>התנהגות ארגונית מיקרו</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>יסודות החשבונאות</td>
    <td>3.5</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>פיזיקה 2</td>
    <td>4.5</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
</tbody>
</table>

<p></p>
<button onclick="calculateSemesterAverage('semester 4')">Calculate Semester 4 Average</button>
<p></p>
<div>
Semester 4 Average: <span id="semester 4-average"></span><br>
</div>
<table id="semester 5" class="semester">
<caption>Semester ה</caption>
<thead>
<tr>
    <th>Course Name</th>
    <th>Credits</th>
    <th>Grade</th>
</tr>
</thead>
<tbody>
<tr>
    <td>מענ"ש</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מדינת ישראל</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבוא למידע כלכלי</td>
    <td>1</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מאקרו א'</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>שיווק</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>אקונומטריקה</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מחיריםא'</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>יסודות המימון</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>יסודות התנהגות ארגונית</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
</tbody>
</table>
<p></p>
<button onclick="calculateSemesterAverage('semester 5')">Calculate Semester 5 Average</button>
<p></p>
<div>
Semester 5 Average: <span id="semester 5-average"></span><br>
</div>

<table id="semester 6" class="semester">
<caption>Semester ו</caption>
<thead>
<tr>
    <th>Course Name</th>
    <th>Credits</th>
    <th>Grade</th>
</tr>
</thead>
<tbody>
<tr>
    <td>כלכלה התנהגותית</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>תורת המחירים ב'</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>כלכלת ישראל</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>סדנת תעופה</td>
    <td>1</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מאקרו ב'</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>קבלת החלטות</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>סמינר בארגון תעשייתי</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>ניהול משאבי אנוש</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבוא לתורת המשחקים</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>אנגלית מתקדמים 2</td>
    <td>2</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
</tbody>
</table>
<p></p>
<button onclick="calculateSemesterAverage('semester 6')">Calculate Semester 6 Average</button>
<p></p>
<div>
Semester 6 Average: <span id="semester 6-average"></span><br>
</div>
        `;
    }
}  