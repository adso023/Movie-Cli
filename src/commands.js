const helper = require('./../misc/helper');
const clui = require('clui');
const inquirer = require('./../misc/inquirer');
const fetch = require('node-fetch');

const Spinner = clui.Spinner;
const movie_details = async () => {

    const name = await inquirer.askMovieName();
    const status = new Spinner(`Fetching details for ${name}`);
    status.start();
    let data = null;
    try{
        let url = `${helper.baseUrl()}?apikey=${helper.apiKey()}&t=${encodeURIComponent(name['moviename'])}&type=movie`;
        let settings = {method: "Get"};
        const response = await fetch(url, settings);
        data = await response.json();
    } catch(err) {
        console.error(err.message);
        console.log("Contact Program Developer");
    } finally {
        status.stop();
    }
    console.log(data);

};

const tv_details = async () => {

    const name = await inquirer.askTvName();
    const status = new Spinner(`Fetching details for ${name}`);
    status.start();
    let data = null;
    try{
        let url = `${helper.baseUrl()}?apikey=${helper.apiKey()}&t=${encodeURIComponent(name['tvname'])}&type=series`
        let settings = {method: "Get"};
        const response = await fetch(url, settings);
        data = await response.json();
    } catch(err) {
        console.error(err.message);
        console.log("Contact Program Developer");
    } finally {
        status.stop();
    }
    console.log(data);
};

const tv_episode_list = async () => {
    const status = new Spinner('Fetching related information');

    const name = await inquirer.askTvName();
    status.start();
    let data = null;
    try{
        let url = `${helper.baseUrl()}?apikey=${helper.apiKey()}&t=${encodeURIComponent(name['tvname'])}&type=series`;
        let settings = {method: "Get"};
        const response = await fetch(url, settings);
        data = await response.json();
    } catch(err) {
        console.error(err.message);
        console.log("Contact Program Developer");
    } finally {
        status.stop();
    }

    let totalSeasons = data['totalSeasons'];
    const seasonNum = await inquirer.askTvEpisodeList(totalSeasons);
    status.message('Fetching Episode list');
    status.start();
    try {
        let url = `${helper.baseUrl()}?apikey=${helper.apiKey()}&t=${encodeURIComponent(name['tvname'])}&Season=${seasonNum['seasonnum']}&type=series`;
        let settings = {method:"Get"};
        const response = await fetch(url, settings);
        data = await response.json();
    } catch(err) {
        console.error(err.message);
        console.log('Contact Program Developer');
    } finally {
        status.stop();
    }
    console.log(data);
};

const tv_episode_info = async () => {
    const status = new Spinner('Fetching related information');

    const name = await inquirer.askTvName();
    status.start();
    let data = null;
    try{
        let url = `${helper.baseUrl()}?apikey=${helper.apiKey()}&t=${encodeURIComponent(name['tvname'])}&type=series`;
        let settings = {method: "Get"};
        const response = await fetch(url, settings);
        data = await response.json();
    } catch(err) {
        console.error(err.message);
        console.log("Contact Program Developer");
    } finally {
        status.stop();
    }

    let totalSeason = data['totalSeasons'];
    const seasonNum = await inquirer.askTvEpisodeList(totalSeason);
    status.message('Fetching Episode List');
    status.start();
    try {
        let url = `${helper.baseUrl()}?apikey=${helper.apiKey()}&t=${encodeURIComponent(name['tvname'])}&Season=${seasonNum['seasonnum']}&type=series`;
        let settings = {method:"Get"};
        const response = await fetch(url, settings);
        data = await response.json();
    } catch(err) {
        console.error(err.message);
        console.log('Contact Program Developer');
    } finally {
        status.stop();
    }

    let episodethrowaway = data['Episodes'].length;
    let totalEpisodes = data['Episodes'][episodethrowaway-1]['Episode'];
    const episodenum = await inquirer.askTvEpisodeNum(totalEpisodes);
    status.message('Fetching Episode Details');
    status.start();
    try {
        let url = `${helper.baseUrl()}?apikey=${helper.apiKey()}&t=${encodeURIComponent(name['tvname'])}&Season=${seasonNum['seasonnum']}&Episode=${episodenum['episodenum']}&type=series`;
        let settings = {method:"Get"};
        const response = await fetch(url, settings);
        data = await response.json();
    } catch(err) {
        console.error(err.message);
        console.log('Contact Program Developer');
    } finally {
        status.stop();
    }
    console.log(data);
};

const search = async () => {

};

module.exports = {
    movie_details,
    tv_details,
    tv_episode_list,
    tv_episode_info,
    search
};