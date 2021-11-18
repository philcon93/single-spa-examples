import { registerApplication, start } from 'single-spa';

// Loop through the route file entries
window.routes.forEach((route) => {
    const { application, renders } = route;

    if (!application) { return; }

    // Renders
    renders.forEach((render) => {
        const { name, container = 'react-container' } = render;

        if (!name) { return; }

        // Register application with single-spa
        registerApplication(
            name,
            () => System.import(application), /* eslint-disable-line no-undef */
            () => !!document.getElementById(container),
            { domElement: document.getElementById(container) }
        );
    });
});

start();
