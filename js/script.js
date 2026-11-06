/* Menu responsivo da demo Gui Damada */
(() => {
    const header = document.querySelector('header');
    const toggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('#site-navigation');

    if (!header || !toggle || !navigation) return;

    const setMenuOpen = (open) => {
        header.classList.toggle('menu-active', open);
        document.body.classList.toggle('menu-open', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    };

    toggle.addEventListener('click', () => {
        setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    navigation.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setMenuOpen(false));
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && header.classList.contains('menu-active')) {
            setMenuOpen(false);
            toggle.focus();
        }
    });

    document.addEventListener('click', (event) => {
        if (header.classList.contains('menu-active') && !header.contains(event.target)) {
            setMenuOpen(false);
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900 && header.classList.contains('menu-active')) {
            setMenuOpen(false);
        }
    });
})();
