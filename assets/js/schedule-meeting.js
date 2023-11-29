// assets/js/schedule-meeting.js

document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the form
    const meetingForm = document.getElementById('meetingForm');
    meetingForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form data
        const meetingTitle = document.getElementById('meetingTitle').value;
        const meetingDescription = document.getElementById('meetingDescription').value;
        const meetingDate = document.getElementById('meetingDate').value;
        const meetingTime = document.getElementById('meetingTime').value;

        // Create an object with the form data
        const meetingData = {
            title: meetingTitle,
            description: meetingDescription,
            date: meetingDate,
            time: meetingTime
        };

        // Convert the data to JSON format
        const jsonData = JSON.stringify(meetingData, null, 2);

        // Save the data to the meeting.json file
        saveMeetingData(jsonData);
    });

    // Function to save meeting data to the meeting.json file
    function saveMeetingData(data) {
        const fs = require('fs'); // Node.js filesystem module (for server-side)

        // Replace this path with the correct path on your server
        const filePath = '/assets/DB/meeting.json';

        // Write the data to the file
        fs.writeFile(filePath, data, 'utf-8', function (err) {
            if (err) {
                console.error('Error saving meeting data:', err);
            } else {
                console.log('Meeting data saved successfully.');
            }
        });
    }
});
