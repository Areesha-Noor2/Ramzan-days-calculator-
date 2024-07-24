// Function to convert Gregorian year to Islamic year and find Ramadan dates
function calculateRamadanDates() {
    const yearInput = document.getElementById('yearInput').value;
    const year = parseInt(yearInput);

    if (!year || year < 1900 || year > 2100) {
        document.getElementById('result').innerText = 'Please enter a valid year between 1900 and 2100';
        return;
    }

    const islamicYear = year - 622 + Math.floor((year - 622) / 33);
    const ramadanStart = new Date(year, 3, 22 + (year - islamicYear) % 33);
    const ramadanEnd = new Date(ramadanStart);
    ramadanEnd.setDate(ramadanStart.getDate() + 29);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('result').innerText = `Ramadan in ${year} starts on: ${ramadanStart.toLocaleDateString('en-US', options)} and ends on: ${ramadanEnd.toLocaleDateString('en-US', options)}`;
}
