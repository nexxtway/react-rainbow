import React from 'react';
import RainbowLibraryImage from './../../../../assets/images/designsImages/rainbow-library.svg';
import AdminImage from './../../../../assets/images/designsImages/admin.svg';
import AuthenticationImage from './../../../../assets/images/designsImages/authentication.svg';
import ChatImage from './../../../../assets/images/designsImages/chat.svg';
import ComingSoonImage from './../../../../assets/images/designsImages/coming-soon.svg';
import CreateProfileImage from './../../../../assets/images/designsImages/create-profile.svg';
import TeamImage from './../../../../assets/images/designsImages/team.svg';
import SocialIconsImage from './../../../../assets/images/designsImages/social.svg';

export const libraryPages = [
    { name: 'Rainbow Components', icon: <img alt="raibow logo" className="react-rainbow-designs_image" src={RainbowLibraryImage} />, href: '/#/Designs/RainbowComponents' },
    { name: 'Rainbow Social Icons', icon: <img alt="Rainbow Social Icons" className="react-rainbow-designs_image-websites" src={SocialIconsImage} />, href: '/#/Designs/SocialIconsSet' },
];

export const websitePages = [
    { name: 'Rainbow Administration', icon: <img alt="administration" className="react-rainbow-designs_image-websites" src={AdminImage} />, href: '/#/Designs/Admin' },
    { name: 'Rainbow Authentication', icon: <img alt="Authentication" className="react-rainbow-designs_image-websites" src={AuthenticationImage} />, href: '/#/Designs/Authentication' },
    { name: 'Rainbow Chat', icon: <img alt="Chat" className="react-rainbow-designs_image-websites" src={ChatImage} />, href: '/#/Designs/Chat' },
    { name: 'Rainbow Coming soon', icon: <img alt="Coming Soon" className="react-rainbow-designs_image-websites" src={ComingSoonImage} />, href: '/#/Designs/ComingSoon' },
    { name: 'Rainbow Create Profile', icon: <img alt="Create Profile" className="react-rainbow-designs_image-websites" src={CreateProfileImage} />, href: '/#/Designs/CreateProfile' },
    { name: 'Rainbow Team', icon: <img alt="Team" className="react-rainbow-designs_image-websites" src={TeamImage} />, href: '/#/Designs/Team' },
];
