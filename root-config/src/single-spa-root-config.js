import { registerApplication, start } from 'single-spa';

// Loop through the templates file entries
window.templates.forEach((route) => {
    const { template, renders } = route;

    if (!template) { return; }

    // Renders
    renders.forEach((render) => {
        const { name, container = 'root' } = render;

        if (!name) { return; }

        // Register template with single-spa
        registerApplication(
            name,
            () => System.import(template), /* eslint-disable-line no-undef */
            () => !!document.getElementById(container),
            { domElement: document.getElementById(container) }
        );
    });
});

start();
