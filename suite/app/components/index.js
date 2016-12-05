import ButtonVariants from './Button/ButtonVariants.jsx';
import SimpleBadge from './Badge/SimpleBadge.jsx';
import CustomStyleBadge from './Badge/CustomStyleBadge.jsx';
import Dropdown from './Dropdown/Dropdown.jsx';
import DefaultTabs from './Tabs/DefaultTabs.jsx';
import ScopedTabs from './Tabs/ScopedTabs.jsx';
import DefaultModal from './Modal/DefaultModal.jsx';

export default {
    Button: [
        { name: 'Buttons variants', component: ButtonVariants }
    ],
    Badge: [
        { name: 'Base', component: SimpleBadge },
        { name: 'Custom styles', component: CustomStyleBadge }
    ],
    Dropdown: [
        { name: 'Dropdown', component: Dropdown }
    ],
    Tabs: [
        { name: 'Default', component: DefaultTabs},
        { name: 'Scoped', component: ScopedTabs}
    ],
    Modal: [
        { name: 'Modal', component: DefaultModal}
    ]
}