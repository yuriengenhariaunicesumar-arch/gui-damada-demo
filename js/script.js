/* Menu responsivo da demo Gui Damada; compatível com HTML antigo em cache */
(() => {
    const header = document.querySelector('header');
    const navigation = header?.querySelector('nav');

    if (!header || !navigation) return;

    if (!navigation.id) navigation.id = 'site-navigation';
    if (!navigation.hasAttribute('aria-label')) {
        navigation.setAttribute('aria-label', 'Navegação principal');
    }

    let toggle = header.querySelector('.menu-toggle');

    // O GitHub Pages pode entregar o HTML antigo junto do CSS novo.
    // Nesta situação, criamos o botão sem depender da atualização do HTML.
    if (!toggle) {
        toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'menu-toggle';
        toggle.innerHTML = '<span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>';
        header.insertBefore(toggle, navigation);
    }

    toggle.setAttribute('aria-controls', navigation.id);
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');

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
