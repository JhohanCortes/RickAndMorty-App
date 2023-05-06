const URL = 'https://rickandmortyapi.com/api/character/'
const axios = require('axios')

const getCharbyId = async (req, res) => {

    try {
        const { id } = req.params;
        const { data } = await axios(`${URL}/${id}`)

        if(!data.name) throw Error(`ID: ${id} Not found`)    

            const character = {
                id:data.id,
                name:data.name,
                species:data.species,
                origin:data.origin,
                image:data.image,
                gender:data.gender,
                status:data.status,
            }
            return res.status(200).json(character) // Para retornar en formato json
        } catch (error) {
            error.message.includes('ID')
            ?res.status(404).send(error.message)
            :res.status(500).send(error.message)
    }
}


module.exports = {
    getCharbyId
}