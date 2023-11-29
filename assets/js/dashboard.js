document.addEventListener('DOMContentLoaded', function () {
    // Dummy data for upcoming meetings
    const upcomingMeetingsData = [
        { title: 'Team Sync', date: '2023-11-25', time: '14:00' },
        { title: 'Project Update', date: '2023-11-28', time: '10:30' },
        { title: 'Client Meeting', date: '2023-12-02', time: '15:45' },
    ];

    // Function to populate the upcoming meetings list
    function populateUpcomingMeetings() {
        const upcomingMeetingsList = document.getElementById('upcoming-meetings-list');

        // Clear existing list items
        upcomingMeetingsList.innerHTML = '';

        // Populate the list with upcoming meetings
        upcomingMeetingsData.forEach(meeting => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = `${meeting.title} - ${meeting.date} at ${meeting.time}`;
            upcomingMeetingsList.appendChild(listItem);
        });
    }

    // Call the function to populate the list when the page loads
    populateUpcomingMeetings();
});

