// Javascript for Toggle Menu
<script>
    // Get the div element that contains the menu links
    var navLinks = document.getElementById("navLinks");

    // Function to show the menu (called by clicking the 'fa-bars' icon)
    function showMenu(){
        // Setting the CSS 'right' property to 0 makes the menu slide in from the right
        navLinks.style.right = "0"
    }

    // Function to hide the menu (called by clicking the 'fa-times' icon/close button)
    function hideMenu(){
        // Setting the CSS 'right' property to -200px (the menu width) hides the menu off-screen
        navLinks.style.right = "-200px"
    }
</script>