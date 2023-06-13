
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

            // Only consider subjects with filled grades
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

    subjects.forEach(function(subject) {
        totalCredits += subject.credits;
        totalGradePoints += subject.grade * subject.credits;
    });

    var currentAverage = totalGradePoints / totalCredits;

    // Sort subjects by their impact on the average
    subjects.sort(function(a, b) {
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

            // Only consider subjects with filled grades
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

    subjects.forEach(function(subject) {
        totalCredits += subject.credits;
        totalGradePoints += subject.grade * subject.credits;
    });

    var overallAverage = totalGradePoints / totalCredits;

    // Display the overall average
    var overallAverageElement = document.getElementById('overall-average');
    overallAverageElement.innerText =  overallAverage.toFixed(2);
}

  
  function showSemesterTables() {
    var degree = document.getElementById('degree').value;
    var semesterTables = document.getElementById('semesterTables');

    if (degree === 'mis') {
        semesterTables.innerHTML = `
        <table id="semester 4" class="semester">
<caption>semester 4</caption>
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
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבוא לאלגברה ליניארית</td>
    <td>3.5</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבוא לפיתוח תוכנה מונחה עצמים</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>חקר ביצועים</td>
    <td>3.5</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבוא למערכות מידע</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבוא לחשבונאות</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>פיזיקה ב׳</td>
    <td>5</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבוא לכלכלה (מאקרו ומיקרו)</td>
    <td>4</td>
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
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבוא לאקונומטריקה</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>סיפורם של "האחרים" בקולנוע הישראלי</td>
    <td>2</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>ניתוח ועיצוב מערכות מידע</td>
    <td>3.5</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>בניית מערכות ממוחשבות - WEB</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>בסיסי נתונים</td>
    <td>3.5</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>ניהול ידע</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>התנהגות ארגונית בניהול</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבוא לשיווק</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבוא למימון</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>אסטרטגיה עסקית</td>
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
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>בינה עסקית BI</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>ניהול פרוייקטים של תוכנה</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>אסטרטגיה וניהול של מערכות מידע</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>תשתיות טכנולוגיות</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>פרויקט גמר</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>ישומים ארגוניים ERP</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>יזמות היי-טק</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>שיפוט וקבלת החלטות</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>אנגלית</td>
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
    } else if (degree === 'cs') {
        semesterTables.innerHTML = `
        <table id="semester 4" class="semester">
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
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבוא לאלגברה ליניארית</td>
    <td>3.5</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבוא לאלגוריתמים</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מתמטיקה דיסקרטית</td>
    <td>3.5</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>חשבון אינפיניטסימלי 1</td>
    <td>3</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבוא לפיסיקה א'</td>
    <td>5</td>
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
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבוא לשפת תכנות C++</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבני נתונים 1</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מתמטיקה דיסקרטית מורחב</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>אלגוריתמים 1</td>
    <td>4</td>
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
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מבני נתונים 2</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>שפות תכנות</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>רשתות מחשבים</td>
    <td>4</td>
    <td><input type="number" min="0" max="100" step="0.01"></td>
</tr>
<tr>
    <td>מערכות הפעלה</td>
    <td>4</td>
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