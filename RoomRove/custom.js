// Select all the room titles
const roomTitles = document.querySelectorAll('.card-title');

// Add a click event listener to each room title
roomTitles.forEach((title) => {
  title.addEventListener('click', () => {
    // Find the corresponding room description
    const description = title.nextElementSibling;

    // Toggle the visibility of the description
    if (description.style.display === 'none' || description.style.display === '') {
      description.style.display = 'block';
      title.setAttribute('aria-expanded', 'true');
    } else {
      description.style.display = 'none';
      title.setAttribute('aria-expanded', 'false');
    }
  });

  // Set the initial ARIA attribute value based on the description's visibility
  if (title.nextElementSibling.style.display === 'none' || title.nextElementSibling.style.display === '') {
    title.setAttribute('aria-expanded', 'false');
  } else {
    title.setAttribute('aria-expanded', 'true');
  }
});