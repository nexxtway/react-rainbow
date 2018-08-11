ButtonIcon examples:

    const Contact = require('../icons/action/addContact').default;
    const Custom = require('../icons/custom/custom1').default;
    const Ai = require('../icons/doctype/ai').default;
    const Account = require('../icons/standard/account').default;
    const Activity = require('../icons/utility/activity').default;

    <div>
        <div style={{padding: '0.5rem'}}>
            <ButtonIcon icon={<Contact />} />
        </div>
        <div style={{padding: '0.5rem', backgroundColor: 'rgb(244, 246, 249)'}}>
            <ButtonIcon style={{alignItems: 'center'}} icon={<Custom size="small" />} variant="border-filled" />
        </div>
        <div style={{padding: '0.5rem', backgroundColor: 'rgb(22, 50, 92)'}}>
            <ButtonIcon icon={<Ai size="small" />} variant="border-inverse" />
        </div>
        <div style={{padding: '0.5rem', backgroundColor: 'rgb(244, 246, 249)'}}>
            <ButtonIcon icon={<Account size="small" />} variant="border" />
        </div>
        <div style={{padding: '0.5rem'}}>
            <ButtonIcon icon={<Activity size="small" />} variant="brand" />
        </div>
        <div style={{padding: '0.5rem'}}>
            <ButtonIcon icon={<Activity size="small" />} variant="brand" disabled />
        </div>
        <div style={{padding: '0.5rem', backgroundColor: 'rgb(22, 50, 92)'}}>
            <ButtonIcon icon={<Contact />} variant="inverse" />
        </div>
        <div style={{padding: '0.5rem', backgroundColor: 'rgb(244, 246, 249)'}}>
            <ButtonIcon icon={<Custom size="small" />} variant="container" />
        </div>
    </div>
