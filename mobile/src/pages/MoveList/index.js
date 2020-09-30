import React from 'react';
import { RefreshControl } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler'

import api from '../../services/api';

import { Icon } from 'react-native-elements'

import HomeHeader from '../../components/HomeHeader'
import SearchInput from '../../components/SearchInput'
import MoveItemSearched from '../../components/MoveItemSearched'
import LoadingMoveItemSearched from '../../components/LoadingMoveItemSearched'

import { ContainerDark, PageTitleLight, SimpleTextLight, Row } from '../../components/Global';
import { TwentyEightView, FifityFiveView, NotFoundMessage } from './styles';

class MoveList extends React.Component {

  state = {
    moves: [],
    currentPage: 0,
    totalPages: 0,
    showSearch: true,
    search: '',
    refreshing: false,
    loading: true
  }

  componentDidMount() {
    this.loadMoves();
  }

  loadMoves = async () => {
    await this.setState({ currentPage: this.state.currentPage + 1 });
    
    const response = await api.get('moves?name=' + this.state.search + '&page=' + this.state.currentPage);

    await this.setState({ 
      moves: this.state.moves.concat(response.data.docs),
      totalPages: response.data.pages,
      loading: false
    });
  }

  handleSearch = async () => {
    await this.setState({ currentPage: 1, loading: true });
    
    const response = await api.get('moves?name=' + this.state.search);

    await this.setState({ 
      moves: response.data.docs,
      totalPages: response.data.pages,
      showSearch: false,
      loading: false
    });

  }

  handleDismiss = async () => {
    await this.setState({ 
      moves: [],
      currentPage: 0,
      showSearch: true,
      search: '', 
      loading: true, 
    });

    await this.loadMoves();
  }

  handleRefresh = async () => {
    await this.setState({ 
      currentPage: 1, 
      refreshing: true, 
      showSearch: true, 
      search: '',
      loading: true
    });
    
    const response = await api.get('moves');

    await this.setState({ 
      moves: response.data.docs,
      totalPages: response.data.pages,
      refreshing: false,
      loading: false
    });
  }

  render() {

  const { moves } = this.state;
 
  return (
    <>
      <HomeHeader />
      <ContainerDark
        refreshControl={ <RefreshControl refreshing={this.state.refreshing} onRefresh={this.handleRefresh} />}
      >
        <PageTitleLight>Pesquisa</PageTitleLight>
        <SimpleTextLight>
          Dúvidas na execução de algum golpe, defesa, base ou kata? Procure por ele nesta página.
        </SimpleTextLight>

        <SearchInput 
          dark={true} 
          placeholder="Qual movimento você procura?" 
          value={this.state.search}
          onChangeText={e => this.setState({ search: e })}
          onSearch={this.handleSearch}
          onEndEditing={this.handleSearch}
          showSearch={this.state.showSearch}
          onDismiss={this.handleDismiss}
        />
        <TwentyEightView />

        { !this.state.loading ? 
            moves.length > 0 ? moves.map(move => (
              <TouchableOpacity key={move._id} onPress={() => this.props.navigation.navigate('Move', { move })}>
                <MoveItemSearched 
                  name={move.name}
                  category={move.category}
                  source={{ uri: move.imageUrl }}
                />
              </TouchableOpacity>

            )) : <Row><NotFoundMessage>Nada foi encontrado!</NotFoundMessage></Row>

           : <LoadingMoveItemSearched /> }

        { !this.state.loading ? this.state.currentPage < this.state.totalPages && (
          <TouchableOpacity onPress={this.loadMoves}>
            <Row><Icon name='chevron-down' type='feather' size={38} color="#fff" /></Row>
          </TouchableOpacity>
        ) : <></> }

        <FifityFiveView />
      </ContainerDark>
    </>
  );
  }
}

export default MoveList;