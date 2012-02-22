Ext.define('LCARS.view.tablet.Main', {
    extend: 'Ext.navigation.View', // Panel has more styling, which is not needed for custom UI
    xtype: 'maintablet',

    requires: [
        'LCARS.view.tablet.NavButtons',
        'LCARS.view.tablet.Header',
        'LCARS.view.tablet.Content',
        'LCARS.view.tablet.SeriesList',
        'LCARS.view.tablet.EpisodeList',
        'LCARS.view.tablet.Episode'
    ],

    config: {
        navigationBar: false,
        layout: 'fit',
        items: [
            {
                xtype: 'navbuttons',
                docked: 'left',
                width: 100 // remove because we'll have CSS later
            },
            {
                xtype: 'header',
                docked: 'top'
            },
            {
                xtype: 'content'
            }
        ]
    }
});