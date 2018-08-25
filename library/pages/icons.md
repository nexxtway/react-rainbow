    const actionIcons = [
        'add_contact', 'add_file', 'add_photo_video', 'add_relationship', 'announcement', 'apex', 'approval', 'back', 'call', 'canvas', 'change_owner', 'change_record_type', 'check', 'clone', 'close', 'defer', 'delete', 'description', 'dial_in', 'download', 'edit_groups', 'edit_relationship', 'edit', 'email', 'fallback', 'filter', 'flow', 'follow', 'following', 'freeze_user', 'goal', 'google_news', 'info', 'join_group', 'lead_convert', 'leave_group', 'log_a_call', 'log_event', 'manage_perm_sets', 'map', 'more', 'new_account', 'new_campaign', 'new_case', 'new_child_case', 'new_contact', 'new_event', 'new_group', 'new_lead', 'new_note', 'new_notebook', 'new_opportunity', 'new_person_account', 'new_task', 'new', 'password_unlock', 'preview', 'priority', 'question_post_action', 'quote', 'recall', 'record', 'refresh', 'reject', 'remove_relationship', 'remove', 'reset_password', 'script', 'share_file', 'share_link', 'share_poll', 'share_post', 'share_thanks', 'share', 'sort', 'submit_for_approval', 'update_status', 'update', 'upload', 'user_activation', 'user', 'view_relationship', 'web_link',
    ];

    const customIcons = [
        'custom1', 'custom2', 'custom3', 'custom4', 'custom5', 'custom6', 'custom7', 'custom8', 'custom9', 'custom10', 'custom11', 'custom12', 'custom13', 'custom14', 'custom15', 'custom16', 'custom17', 'custom18', 'custom19', 'custom20', 'custom21', 'custom22', 'custom23', 'custom24', 'custom25', 'custom26', 'custom27', 'custom28', 'custom29', 'custom30', 'custom31', 'custom32', 'custom33', 'custom34', 'custom35', 'custom36', 'custom37', 'custom38', 'custom39', 'custom40', 'custom41', 'custom42', 'custom43', 'custom44', 'custom45', 'custom46', 'custom47', 'custom48', 'custom49', 'custom50', 'custom51', 'custom52', 'custom53', 'custom54', 'custom55', 'custom56', 'custom57', 'custom58', 'custom59', 'custom60', 'custom61', 'custom62', 'custom63', 'custom64', 'custom65', 'custom66', 'custom67', 'custom68', 'custom69', 'custom70', 'custom71', 'custom72', 'custom73', 'custom74', 'custom75', 'custom76', 'custom77', 'custom78', 'custom79', 'custom80', 'custom81', 'custom82', 'custom83', 'custom84', 'custom85', 'custom86', 'custom87', 'custom88', 'custom89', 'custom90', 'custom91', 'custom92', 'custom93', 'custom94', 'custom95', 'custom96', 'custom97', 'custom98', 'custom99', 'custom100', 'custom101', 'custom102', 'custom103', 'custom104', 'custom105', 'custom106', 'custom107', 'custom108', 'custom109', 'custom110', 'custom111', 'custom112', 'custom113',
    ];

    const doctypeIcons = [
        'ai', 'attachment', 'audio', 'box_notes', 'csv', 'eps', 'excel', 'exe', 'flash', 'folder', 'gdoc', 'gdocs', 'gform', 'gpres', 'gsheet', 'html', 'image', 'keynote', 'library_folder', 'link', 'mp4', 'overlay', 'pack', 'pages', 'pdf', 'ppt', 'psd', 'quip_doc', 'quip_sheet', 'rtf', 'slide', 'stypi', 'txt', 'unknown', 'video', 'visio', 'webex', 'word', 'xml', 'zip',
    ];

    const standardIcons = [
        'account', 'action_list_component', 'address', 'announcement', 'answer_best', 'answer_private', 'answer_public', 'approval', 'apps_admin', 'apps', 'article', 'asset_relationship', 'assigned_resource', 'avatar_loading', 'avatar', 'bot', 'business_hours', 'calibration', 'call_history', 'call', 'campaign_members', 'campaign', 'canvas', 'carousel', 'case_change_status', 'case_comment', 'case_email', 'case_log_a_call', 'case_milestone', 'case_transcript', 'case', 'channel_program_history', 'channel_program_levels', 'channel_program_members', 'channel_programs', 'client', 'cms', 'coaching', 'connected_apps', 'contact_list', 'contact', 'contract_line_item', 'contract', 'custom_notification', 'custom', 'customers', 'dashboard', 'data_integration_hub', 'datadotcom', 'default', 'document', 'drafts', 'email_chatter', 'email', 'empty', 'endorsement', 'entitlement_process', 'entitlement_template', 'entitlement', 'entity_milestone', 'entity', 'environment_hub', 'event', 'feed', 'feedback', 'file', 'flow', 'folder', 'forecasts', 'generic_loading', 'goals', 'group_loading', 'groups', 'hierarchy', 'home', 'household', 'individual', 'insights', 'investment_account', 'iot_orchestrations', 'knowledge', 'lead_insights', 'lead_list', 'lead', 'link', 'list_email', 'live_chat_visitor', 'live_chat', 'location', 'log_a_call', 'logging', 'macros', 'maintenance_asset', 'maintenance_plan', 'marketing_actions', 'merge', 'messaging_conversation', 'messaging_session', 'messaging_user', 'metrics', 'news', 'note', 'omni_supervisor', 'operating_hours', 'opportunity_splits', 'opportunity', 'orders', 'partner_fund_allocation', 'partner_fund_claim', 'partner_fund_request', 'partner_marketing_budget', 'partners', 'past_chat', 'people', 'performance', 'person_account', 'photo', 'poll', 'portal', 'post', 'pricebook', 'process', 'product_consumed', 'product_item_transaction', 'product_item', 'product_request_line_item', 'product_request', 'product_required', 'product_transfer', 'product', 'question_best', 'question_feed', 'quick_text', 'quip_sheet', 'quip', 'quotes', 'read_receipts', 'recent', 'record', 'related_list', 'relationship', 'report', 'resource_absence', 'resource_capacity', 'resource_preference', 'resource_skill', 'return_order_line_item', 'return_order', 'reward', 'rtc_presence', 'sales_path', 'scan_card', 'search', 'service_appointment', 'service_contract', 'service_crew_member', 'service_crew', 'service_report', 'service_resource', 'service_territory_location', 'service_territory_member', 'service_territory', 'shipment', 'skill_entity', 'skill_requirement', 'skill', 'social', 'solution', 'sossession', 'stage_collection', 'stage', 'survey', 'task', 'task2', 'team_member', 'template', 'thanks_loading', 'thanks', 'timesheet_entry', 'timesheet', 'timeslot', 'today', 'topic', 'topic2', 'unmatched', 'user', 'work_order_item', 'work_order', 'work_type',
    ];

    const utilityIcons = [
        'activity', 'ad_set', 'add', 'adduser', 'anchor', 'animal_and_nature', 'announcement', 'answer', 'answered_twice', 'apex', 'approval', 'apps', 'arrowdown', 'arrowup', 'attach', 'automate', 'back', 'ban', 'block_visitor', 'bold', 'bookmark', 'breadcrumbs', 'broadcast', 'brush', 'bucket', 'builder', 'call', 'campaign', 'cancel_file_request', 'cancel_transfer', 'capslock', 'case', 'cases', 'center_align_text', 'change_owner', 'change_record_type', 'chart', 'chat', 'check', 'checkin', 'chevrondown', 'chevronleft', 'chevronright', 'chevronup', 'classic_interface', 'clear', 'clock', 'close', 'collapse_all', 'color_swatch', 'comments', 'company', 'connected_apps', 'contract_alt', 'contract', 'copy_to_clipboard', 'copy', 'crossfilter', 'custom_apps', 'cut', 'dash', 'database', 'datadotcom', 'dayview', 'delete', 'deprecate', 'description', 'desktop_console', 'desktop', 'dialing', 'dislike', 'dock_panel', 'down', 'download', 'drag', 'edit_form', 'edit', 'einstein', 'email', 'emoji', 'end_call', 'end_chat', 'end_messaging_session', 'erect_window', 'error', 'event', 'expand_all', 'expand_alt', 'expand', 'fallback', 'favorite', 'feed', 'file', 'filter', 'filterList', 'flow', 'food_and_drink', 'forward', 'frozen', 'full_width_view', 'graph', 'groups', 'help', 'hide', 'hierarchy', 'home', 'identity', 'image', 'inbox', 'incoming_call', 'info_alt', 'info', 'insert_tag_field', 'insert_template', 'internal_share', 'italic', 'jump_to_bottom', 'jump_to_top', 'justify_text', 'kanban', 'keyboard_dismiss', 'knowledge_base', 'layers', 'layout', 'left_align_text', 'left', 'level_down', 'level_up', 'light_bulb', 'like', 'link', 'list', 'listen', 'location', 'lock', 'log_a_call', 'logout', 'lower_flag', 'macros', 'magicwand', 'mark_all_as_read', 'matrix', 'merge_field', 'merge', 'metrics', 'minimize_window', 'missed_call', 'moneybag', 'monthlyview', 'move', 'muted', 'new_direct_message', 'new_window', 'new', 'news', 'note', 'notebook', 'notification', 'office365', 'offline_cached', 'offline', 'omni_channel', 'open_folder', 'open', 'opened_folder', 'outbound_call', 'overflow', 'package_org_beta', 'package_org', 'package', 'page', 'palette', 'paste', 'pause', 'people', 'phone_landscape', 'phone_portrait', 'photo', 'picklist', 'pin', 'pinned', 'play', 'power', 'preview', 'priority', 'privately_shared', 'process', 'push', 'puzzle', 'question_mark', 'question', 'questions_and_answers', 'quick_text', 'quotation_marks', 'rating', 'record_create', 'record', 'recurring_exception', 'redo', 'refresh', 'relate', 'reminder', 'remove_formatting', 'remove_link', 'replace', 'reply_all', 'reply', 'reset_password', 'resource_absence', 'resource_capacity', 'resource_territory', 'retweet', 'richtextbulletedlist', 'richtextindent', 'richtextnumberedlist', 'richtextoutdent', 'right_align_text', 'right', 'rotate', 'rows', 'rules', 'salesforce1', 'save', 'search', 'sentiment_negative', 'sentiment_neutral', 'settings', 'setup_assistant_guide', 'setup', 'share_file', 'share_mobile', 'share_post', 'share', 'shield', 'shopping_bag', 'side_list', 'signpost', 'smiley_and_people', 'sms', 'snippet', 'socialshare', 'sort', 'spinner', 'stage_collection', 'stage', 'standard_objects', 'stop', 'strikethrough', 'success', 'summary', 'summarydetail', 'survey', 'switch', 'symbols', 'sync', 'table', 'tablet_landscape', 'tablet_portrait', 'tabset', 'task', 'text_background_color', 'text_color', 'threedots_vertical', 'threedots', 'thunder', 'tile_card_list', 'topic', 'topic2', 'touch_action', 'tracker', 'trail', 'travel_and_places', 'trending', 'turn_off_notifications', 'type_tool', 'type', 'undelete', 'undeprecate', 'underline', 'undo', 'unlock', 'unmuted', 'up', 'upload', 'user_role', 'user', 'video', 'voicemail_drop', 'volume_high', 'volume_low', 'volume_off', 'warning', 'weeklyview', 'wifi', 'work_order_type', 'world', 'yubi_key', 'zoomin', 'zoomout',
    ];

    const styles = {
        input: {
            maxWidth: 330,
        },
        iconSection: {
            color: '#5876a3',
        },
        iconList: {
            textAlign: 'center',
            width: '8rem',
        },
    };

    function SpriteHeader({ children }) {
        return (
            <h2 className="slds-text-heading_medium slds-m-top_large slds-m-bottom_medium slds-react-component-title-text">
                {children}
            </h2>
        );
    }

    function filter(query, data) {
        return data.filter((item) => {
            const regex = new RegExp(query, 'i');
            return regex.test(item);
        });
    }

    const initialState = {
        searchValue: '',
    };

    function Icons({ title, description, sprite, icons, size }) {
        const filteredIcons = filter(state.searchValue, icons);
        const renderIcons = () => {
            return filteredIcons.map((icon, index) => {
                const key = `${sprite}-icon-${index}`;
                return (
                    <li key={key} className="slds-m-bottom_x-large" style={styles.iconList}>
                        <figure>
                            <Icon iconName={`${sprite}:${icon}`} size={size} />
                            <figcaption className="slds-p-top_x-small slds-text-body_small">
                                {icon}
                            </figcaption>
                        </figure>
                    </li>
                )
            });
        }

        if (filteredIcons.length) {
            return (
                <div style={styles.iconSection}>
                    <SpriteHeader>{title}</SpriteHeader>
                    <p>{description}</p>
                    <ul className="slds-m-top_x-large slds-grid slds-wrap">
                        {renderIcons()}
                    </ul>
                </div>
            );
        }
        return null;
    }

    <div className="slds-p-around_large">
        <Input
            style={styles.input}
            iconName="utility:search"
            value={state.searchValue}
            placeholder="Filter by icon name"
            aria-label="Filter by icon name"
            onChange={event => setState({ searchValue: event.target.value })} />

        <Icons
            title="Action Icons"
            description="Actions can be seen throughout the interface and represent actions a user can take on any given screen."
            sprite="action"
            icons={actionIcons}
            size="small" />

        <Icons
            title="Custom Icons"
            description="Custom icons are available for the identity of user created objects."
            sprite="custom"
            icons={customIcons}
            size="large" />

        <Icons
            title="Doctype Icons"
            description="Doctype icons represent a type of file when a preview or image is unavailable."
            sprite="doctype"
            icons={doctypeIcons}
            size="large" />

        <Icons
            title="Standard Icons"
            description="Standard icons represent entities and objects within Salesforce."
            sprite="standard"
            icons={standardIcons}
            size="large" />

        <Icons
            title="Utility Icons"
            description="Utility icons are used throughout the interface and are SVG's for extensibility."
            sprite="utility"
            icons={utilityIcons}
            size="large" />
    </div>
