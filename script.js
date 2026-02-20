function showresult() {
    let name = document.getElementById('name').value;
    let roll = Number(document.getElementById('rollnumber').value);
    let attendance = Number(document.getElementById('attendance').value);
    // subject marks
    let eng = Number(document.getElementById('english').value);
    let urdu = Number(document.getElementById('urdu').value);
    let maths = Number(document.getElementById('maths').value);
    let cs = Number(document.getElementById('cs').value);

    let result = document.getElementById('result');

    // attendance 
    if (attendance < 80) {
        result.innerHTML = `
<p class ='fail'> Fail Low Attendane </p>
<p>Name:${name}</p>
<p>Roll Number :${roll}</p>
<p>Attendance:${attendance}%</p>
`; return;
    }


    let total = eng + urdu + maths + cs
    let percentage = (total / 400) * 100;
    let grade = "";
    if (percentage >= 80) {
        grade = 'A+';
    } else if (percentage >= 70) {
        grade = 'A';
    } else if (percentage >= 60) {
        grade = 'B';
    } else if (percentage >= 50) {
        grade = 'C';
    } else {
        grade = "Fail";
    }

    let status = percentage >= 50 ? "PASS" : "Fail";
    result.innerHTML = `
<p class =${status === "PASS" ? "pass" : "fail"}"> Status:${status}</p>
<p>Name :${name}</p>
<p>Roll Number:${roll}</p>
<p>Totall Marks :${total}</p>
<p>Percentage :${percentage.toFixed(2)}</p>
<p>Grade:${grade}</p>
`;
}