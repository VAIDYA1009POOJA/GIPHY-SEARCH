export default class ApiGifs {
    static getGifsList(query) {
        return fetch('http://api.giphy.com/v1/gifs/search?q='+query+'&api_key=h4PcpGF3NNHmQslJwumQyO0viys9gKs3').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}