document.querySelector('mutation-test-report-app').report = {"files":{"/home/ztiagok/Área de Trabalho/Repositórios/Front-end/sd-022-b-project-react-testing-library/src/pages/Pokedex.js":{"language":"javascript","mutants":[{"id":"4","location":{"end":{"column":33,"line":34},"start":{"column":28,"line":34}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed"},{"id":"3","location":{"end":{"column":56,"line":16},"start":{"column":51,"line":16}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed"}],"source":"import React from 'react';\nimport PropTypes from 'prop-types';\n\nimport { isPokemonFavoriteByIdType, pokemonType } from '../types';\nimport {\n  Button,\n  Pokemon,\n  PokemonButtonsPanel,\n} from '../components';\n\nimport './pokedex.css';\n\nclass Pokedex extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { pokemonIndex: 0, filteredType: 'all' };\n  }\n\n  filterPokemons(filteredType) {\n    this.setState({ filteredType, pokemonIndex: 0 });\n  }\n\n  nextPokemon(numberOfPokemons) {\n    this.setState((state) => (\n      { pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons }\n    ));\n  }\n\n  fetchFilteredPokemons() {\n    const { pokemons } = this.props;\n    const { filteredType } = this.state;\n\n    return pokemons.filter((pokemon) => {\n      if (filteredType === 'all') return true;\n      return pokemon.type === filteredType;\n    });\n  }\n\n  fetchPokemonTypes() {\n    const { pokemons } = this.props;\n\n    return [...new Set(pokemons.reduce((types, { type }) => [...types, type], []))];\n  }\n\n  render() {\n    const { isPokemonFavoriteById } = this.props;\n    const filteredPokemons = this.fetchFilteredPokemons();\n    const { pokemonIndex } = this.state;\n    const pokemon = filteredPokemons[pokemonIndex];\n    const pokemonTypes = this.fetchPokemonTypes();\n\n    return (\n      <div className=\"pokedex\">\n        <h2>Encountered pokémons</h2>\n        <Pokemon\n          pokemon={ pokemon }\n          isFavorite={ isPokemonFavoriteById[pokemon.id] }\n        />\n        <PokemonButtonsPanel\n          pokemonTypes={ pokemonTypes }\n          filterPokemons={ (type) => this.filterPokemons(type) }\n        />\n        <Button\n          dataTestId=\"next-pokemon\"\n          className=\"pokedex-button\"\n          onClick={ () => this.nextPokemon(filteredPokemons.length) }\n          disabled={ filteredPokemons.length <= 1 }\n        >\n          Próximo pokémon\n        </Button>\n      </div>\n    );\n  }\n}\n\nPokedex.propTypes = {\n  isPokemonFavoriteById: isPokemonFavoriteByIdType.isRequired,\n  pokemons: PropTypes.arrayOf(pokemonType.isRequired).isRequired,\n};\n\nexport default Pokedex;\n"},"/home/ztiagok/Área de Trabalho/Repositórios/Front-end/sd-022-b-project-react-testing-library/src/components/PokemonButtonsPanel.js":{"language":"javascript","mutants":[{"id":"1","location":{"end":{"column":46,"line":19},"start":{"column":25,"line":19}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed"},{"id":"2","location":{"end":{"column":23,"line":24},"start":{"column":14,"line":24}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed"},{"id":"0","location":{"end":{"column":47,"line":12},"start":{"column":42,"line":12}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed"}],"source":"import PropTypes from 'prop-types';\nimport React, { Component } from 'react';\n\nimport Button from './Button';\n\nclass PokemonButtonsPanel extends Component {\n  render() {\n    const { pokemonTypes, filterPokemons } = this.props;\n    return (\n      <div className=\"pokedex-buttons-panel\">\n        <Button\n          onClick={ () => filterPokemons('all') }\n          className=\"filter-button\"\n        >\n          All\n        </Button>\n        {pokemonTypes.map((type) => (\n          <Button\n            dataTestId={`pokemon-type-button`}\n            key={ type }\n            onClick={ () => filterPokemons(type) }\n            className=\"filter-button\"\n          >\n            {`${type}`}\n          </Button>\n        ))}\n      </div>\n    );\n  }\n}\n\nPokemonButtonsPanel.propTypes = {\n  pokemonTypes: PropTypes.arrayOf(PropTypes.string).isRequired,\n  filterPokemons: PropTypes.func.isRequired,\n};\n\nexport default PokemonButtonsPanel;\n"}},"schemaVersion":"1.0","thresholds":{"high":80,"low":60,"break":null}};