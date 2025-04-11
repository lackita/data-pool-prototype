// Modal handling for reports view
document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners to view report buttons
  const viewButtons = document.querySelectorAll('.view-report-btn');
  
  viewButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const reportId = this.getAttribute('data-report-id');
      // This would fetch the report data and show modal in a real implementation
      console.log('Opening report:', reportId);
    });
  });
  
  // Tabs functionality (if needed beyond Jekyll's page routing)
  const tabs = document.querySelectorAll('.tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      if (!this.classList.contains('active')) {
        // This would be for client-side tab switching if needed
        console.log('Tab clicked:', this.textContent.trim());
      }
    });
  });
  
  // Search functionality for reports
  const searchInput = document.querySelector('.report-search');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const searchTerm = this.value.toLowerCase();
      // This would filter the reports in a real implementation
      console.log('Searching for:', searchTerm);
    });
  }
});