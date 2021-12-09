import { registerApplication, start } from 'single-spa';

// Loop through the templates file entries
window.templates.forEach((route) => {
    const { location: { pathname }} = window;
    const { path, templates } = route;

    if (!path.test(pathname)) {
        return;
    }

    // Applications
    templates.forEach((template) => {
        const { template: templatePackage, renders } = template;

        if (!templatePackage) {
            return;
        }

        // Renders
        renders.forEach((render) => {
            const { name, container = 'root' } = render;

            if (!name) {
                return;
            }

            // Register application with single-spa
            registerApplication(
                name,
                () => System.import(templatePackage), /* eslint-disable-line no-undef */
                () => !!document.getElementById(container),
                { domElement: document.getElementById(container) }
            );
        });
    });
});

start();
