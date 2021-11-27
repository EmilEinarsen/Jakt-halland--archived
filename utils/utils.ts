/**
 * Workaround for vh value for actual document 100vh
 */
export const setCSSVariableVh = () => document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
