import ButtonVariants from './Button/ButtonVariants.jsx';
import SimpleBadge from './Badge/SimpleBadge.jsx';
import CustomStyleBadge from './Badge/CustomStyleBadge.jsx';

export default {
    Button: [
        { name: 'Buttons variants', component: ButtonVariants }
    ],
    Badge: [
        { name: 'Base', component: SimpleBadge },
        { name: 'Custom styles', component: CustomStyleBadge }
    ]
}