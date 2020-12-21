export function configToDoc(config: {[string: string]: string}) {
    for (const field of Object.keys(config)) {
        const element = window.document.getElementById(field);
        if (element && config[field]) {
            element.innerHTML = config[field];
        }
    }
}
