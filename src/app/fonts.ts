import localFont from 'next/font/local';

export const ibmPlexMono = localFont({
    variable: '--font-ibm-plex-mono',
    display: 'swap',
    src: [
        {
            path: '../../public/fonts/ibm-plex-mono/IBMPlexMono-Thin.ttf',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../public/fonts/ibm-plex-mono/IBMPlexMono-ThinItalic.ttf',
            weight: '100',
            style: 'italic',
        },
        {
            path: '../../public/fonts/ibm-plex-mono/IBMPlexMono-ExtraLight.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../public/fonts/ibm-plex-mono/IBMPlexMono-ExtraLightItalic.ttf',
            weight: '200',
            style: 'italic',
        },
        {
            path: '../../public/fonts/ibm-plex-mono/IBMPlexMono-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/ibm-plex-mono/IBMPlexMono-LightItalic.ttf',
            weight: '300',
            style: 'italic',
        },
        {
            path: '../../public/fonts/ibm-plex-mono/IBMPlexMono-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/ibm-plex-mono/IBMPlexMono-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../public/fonts/ibm-plex-mono/IBMPlexMono-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/ibm-plex-mono/IBMPlexMono-MediumItalic.ttf',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../../public/fonts/ibm-plex-mono/IBMPlexMono-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/ibm-plex-mono/IBMPlexMono-SemiBoldItalic.ttf',
            weight: '600',
            style: 'italic',
        },
        {
            path: '../../public/fonts/ibm-plex-mono/IBMPlexMono-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/ibm-plex-mono/IBMPlexMono-BoldItalic.ttf',
            weight: '700',
            style: 'italic',
        },
    ],
});