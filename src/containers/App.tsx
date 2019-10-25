import React, { Component } from 'react';

import { connect } from 'react-redux';

import './App.css';

import MainPage from '../components/MainPage';

import { setSearchField, setRequestRobots } from '../actions';

export interface IRobot {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface IAppProps {}

interface IAppState {
  robots: Array<IRobot>;
  searchField: string;
}

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>): void =>
    dispatch(setSearchField(event.currentTarget.value)),
  onRequestRobots: () => dispatch(setRequestRobots())
});

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
  }

  render(): JSX.Element {
    return <MainPage {...this.props} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
