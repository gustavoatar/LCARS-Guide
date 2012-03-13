Ext.define('LCARS.view.phone.EpisodeList', {
    extend: 'Ext.List',
    xtype: 'episodelistphone',

    config: {
        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="listItem"><div class="screenshot"><img src="{Screenshot}" alt="" height="55"></div><span class="episodeListTitle">{EpisodeName}</span><br><span class="episodeNumber">S0{SeasonNumber} E0{EpisodeNumber}</span>&nbsp;&nbsp;&nbsp;<span class="airdate">{FirstAired}</span></div>'
        )
    }
});