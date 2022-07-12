let a = prompt('nhap can nang ')
let b = prompt('nhap chieu cao (m)')
weight = parseFloat(a)
height = parseFloat(b)
c = Math.pow(b,2)
bmi = weight / c
if (bmi < 18.5)
    alert('underweight');
else if ( bmi < 25 )
    alert('Normal');
else if ( bmi < 30 )
    alert('overweight');
else alert('obese');
