var cc = initCookieConsent();

if (cc) {
    cc.run({
        current_lang: 'en',
        autoclear_cookies: true,
        page_scripts: true,
    
        onFirstAction: function(user_preferences, cookie){
            // This is triggered once when the user makes a choice
        },
    
        onAccept: function (cookie) {
            // Triggered when the user accepts cookies
        },
    
        onChange: function (cookie, changed_preferences) {
            // Triggered when the user changes their preferences
        },
    
        languages: {
            'en': {
                consent_modal: {
                    title: 'Cookie Notice',
                    description: 'This website uses essential cookies for proper functioning, and tracking cookies to understand user interactions. These will only be set after your consent.',
                    primary_btn: {
                        text: 'Accept all',
                        role: 'accept_all'
                    },
                    secondary_btn: {
                        text: 'Reject all',
                        role: 'accept_necessary'
                    }
                },
                settings_modal: {
                    title: 'Cookie preferences',
                    save_settings_btn: 'Save settings',
                    accept_all_btn: 'Accept all',
                    reject_all_btn: 'Reject all',
                    close_btn_label: 'Close',
                    cookie_table_headers: [
                        {col1: 'Name'},
                        {col2: 'Domain'},
                        {col3: 'Expiration'},
                        {col4: 'Description'}
                    ],
                    blocks: [
                        {
                            title: 'Cookie usage',
                            description: 'This website uses cookies to ensure the basic functionalities and enhance your experience. You can opt in or out for each category.'
                        },
                        {
                            title: 'Strictly necessary cookies',
                            description: 'These cookies are required for the site to function.',
                            toggle: {
                                value: 'necessary',
                                enabled: true,
                                readonly: true,
                                id: 'necessary_toggle' // Add an ID here
                            }
                        },
                        {
                            title: 'Performance and Analytics cookies',
                            description: 'These cookies help us analyze traffic and user behavior.',
                            toggle: {
                                value: 'analytics',
                                enabled: false,
                                readonly: false,
                                id: 'analytics_toggle'  // Add an ID here
                            },
                            cookie_table: [
                                {
                                    col1: '^_ga',
                                    col2: 'google.com',
                                    col3: '2 years',
                                    col4: 'Google Analytics cookie',
                                    is_regex: true
                                },
                                {
                                    col1: '_gid',
                                    col2: 'google.com',
                                    col3: '1 day',
                                    col4: 'Google Analytics cookie'
                                }
                            ]
                        }
                    ]
                }
            }
        }
    });
} else {
    console.error('Cookie consent plugin is not initialized.');
}