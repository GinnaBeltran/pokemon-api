const axios = require('axios');
const { getPokemon, createPokemon } = require('./index');

    
    // Tests that getPokemon function successfully retrieves data from API and calls createPokemon function. 
    it("test_get_pokemon_success", async () => {
        const mockData = {
            sprites: {
                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            },
            name: "bulbasaur",
            id: 1
        }
        const mockAxios = jest.spyOn(axios, 'get').mockResolvedValue({ data: mockData })
        const mockCreatePokemon = jest.fn()
        await getPokemon('bulbasaur', mockCreatePokemon)
        expect(mockAxios).toHaveBeenCalledWith('http://localhost:3000/api/pokemon/bulbasaur')
        expect(mockCreatePokemon).toHaveBeenCalledWith(mockData)
    })

    // Tests that getPokemon function returns data of the requested Pokemon. 
    it("test_get_pokemon_return_data", async () => {
        const mockData = {
            sprites: {
                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            },
            name: "bulbasaur",
            id: 1
        }
        const mockAxios = jest.spyOn(axios, 'get').mockResolvedValue({ data: mockData })
        const result = await getPokemon('bulbasaur')
        expect(result).toEqual(mockData)
    })

    // Tests that getPokemon function logs error if API call fails. 
    it("test_get_pokemon_error", async () => {
        const mockError = new Error('API call failed')
        const mockAxios = jest.spyOn(axios, 'get').mockRejectedValue(mockError)
        console.log = jest.fn()
        await getPokemon('invalidPokemon')
        expect(mockAxios).toHaveBeenCalledWith('http://localhost:3000/api/pokemon/invalidPokemon')
        expect(console.log).toHaveBeenCalledWith(mockError)
    })

    // Tests that getPokemon function handles invalid input for Pokemon name. 
    it("test_get_pokemon_invalid_input", async () => {
        const mockAxios = jest.spyOn(axios, 'get')
        await getPokemon('')
        expect(mockAxios).not.toHaveBeenCalled()
    })