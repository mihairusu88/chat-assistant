/** @type {import('tailwindcss').Config} */

const defaultTheme = require( 'tailwindcss/defaultTheme' );

module.exports = {
    content: [ './src/**/*.{html,js,vue}' ],
    theme: {
        colors: {
            current: 'currentColor',
            transparent: 'transparent',
            primary: 'var(--color--primary)',
            success: 'var(--color--success)',
            info: 'var(--color--info)',
            warning: 'var(--color--warning)',
            danger: 'var(--color--danger)',
            dark: 'var(--color--dark)',
            light: 'var(--color--light)',
            'gray-darker': 'var(--color--gray-darker)',
            'gray-dark': 'var(--color--gray-dark)',
            gray: 'var(--color--gray)',
            'gray-lighter': 'var(--color--gray-lighter)',
            'gray-light': 'var(--color--gray-light)',
        },
        extend: {
            fontFamily: {
                sans: [ 'Poppins', ...defaultTheme.fontFamily.sans ],
            },
        },
    },
    plugins: [],
};