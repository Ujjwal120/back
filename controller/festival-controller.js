const api = require('unsplash-js');
const nodeFetch = require('node-fetch');

const unsplash = api.createApi({
  accessKey : 'PVH6O4qOxPgfZbwBSr066IgdC6OFlnR65dtweV2BuDA',
  fetch : nodeFetch
});

const getFestivalPhotos = (req, res, next) => {
    const pageNo = req.params.page;

    unsplash.search.getPhotos({
        query : 'festival',
        contentFilter : 'high',
        page : pageNo,
        perPage : 30,
    })
    .then(result => {
        if (result.errors) {
            // handle error here
            console.log('error occurred: ', result.errors[0]);
        } else {
            // handle success here
            const r = result.response;
            res.send(r);
        }
    });
};

exports.getFestivalPhotos = getFestivalPhotos;