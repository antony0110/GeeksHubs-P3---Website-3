const urlImagen = 'https://image.tmdb.org/t/p/w200';
const button = document.getElementById("btn");

function buscar(){
    let BuscarPelis= "";
    let search = document.getElementById("query").value;
    console.log(search.length);
    if(search.length === 0)
    document.getElementById('titulo').innerHTML = '';
    axios({
        
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?api_key=07b1475839c3f84751ff2c7770b5e432&language=es-ES&query=${search}`
    }).then(res => {
        let movies = res.data.results;
        for (let i = 0;  i< movies.length; i++) {
            console.log(urlImagen,movies[i].poster_path);
            BuscarPelis += `<img src="${urlImagen}${movies[i].poster_path}">
        <div class="peliculas">
        <p class="title">${movies[i].title}</p>
        <p class="overview">${movies[i].overview}</p>
        </div>`;
        }
        document.getElementById('titulo').innerHTML = BuscarPelis;
   })
}
