document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuItems = document.querySelectorAll('.menu-desplegable > a');
    
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (window.innerWidth <= 767) {
                e.preventDefault();
                const parent = this.parentElement;
                parent.classList.toggle('active');
                
                // Cerrar otros submenús abiertos
                menuItems.forEach(otherItem => {
                    if (otherItem !== this) {
                        otherItem.parentElement.classList.remove('active');
                    }
                });
            }
        });
    });
    
    document.querySelectorAll('.menu a:not(.menu-desplegable > a)').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 767) {
                menu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });
});