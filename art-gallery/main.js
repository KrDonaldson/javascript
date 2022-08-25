// const singleIdURL = "https://api.artic.edu/api/v1/artworks/" + id

async function getImages() {
    const url = 'https://api.artic.edu/api/v1/artworks?ids=146701,16815,16823,27992,16779,28096,11371,6198,16834,99793,120081,16821,209942,69533,121909,29728,6201,16818&fields=id,title,image_id'
    let result = await fetch(url);
    let response = await result.json();
    // console.log(response)
    var imagedata = []
    response.data.forEach((x, i) => imagedata.push([x.id, x.title, response.config.iiif_url + '/' + x.image_id + '/full/843,/0/default.jpg']));
    // console.log(imagedata)
    return imagedata
}

imagedata = getImages()
console.log(imagedata[0])