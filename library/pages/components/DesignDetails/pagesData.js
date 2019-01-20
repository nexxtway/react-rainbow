import React from 'react';
import RainbowLibraryImage from './../../../../assets/images/designsImages/rainbow-library.svg';
import AdminImage from './../../../../assets/images/designsImages/admin.svg';
import AuthenticationImage from './../../../../assets/images/designsImages/authentication.svg';
import ChatImage from './../../../../assets/images/designsImages/chat.svg';

export const libraryPages = [
    { name: 'Rainbow Components', icon: <img alt="raibow logo" className="react-rainbow-designs_image" src={RainbowLibraryImage} />, href: '/#/Designs/RainbowComponents' },
];

export const websitePages = [
    { name: 'Rainbow Administration', icon: <img alt="administration" className="react-rainbow-designs_image-websites" src={AdminImage} />, href: '/#/Designs/Admin' },
    { name: 'Rainbow Authentication', icon: <img alt="Authentication" className="react-rainbow-designs_image-websites" src={AuthenticationImage} />, href: '/#/Designs/Authentication' },
    { name: 'Rainbow Chat', icon: <img alt="Chat" className="react-rainbow-designs_image-websites" src={ChatImage} />, href: '/#/Designs/Chat' },
];
