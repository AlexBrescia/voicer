#!/usr/bin/node

const config = require('config');

const SourceFactory = require('./apps/agi/source/sourceFactory');
const Voicer = require('./apps/agi/index');
const VoicerWeb = require('./apps/web/index');

const voicer = new Voicer(config);
voicer.start(config.agi.port);

const source = (new SourceFactory(config['lookup'])).make();
const voicerWeb = VoicerWeb(source, config['web']);
voicerWeb.listen(config.web.port, () => {
    console.log('started', config.web.port)
});