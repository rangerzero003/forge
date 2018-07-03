const Express = require('express');
const request = require('bluebird').promisify(require('request'));

const app = Express();
const port = process.env.PORT || 80;

async function retrievePokemon(id) {
    console.log(id);
    let pokemon = await request('https://pokeapi.co/api/v2/pokemon/' + id);
    console.log(pokemon.body);
    return pokemon;
}

app.route('/')
.get((request, response, next) => {
    response.send('Forge is up and running on Azure');
});

app.route('/pokemon/:id')
.get(async (request, response, next) => {
    response.send(JSON.stringify(await retrievePokemon(request.params.id)));
})

app.listen(3000);