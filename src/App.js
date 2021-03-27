import React from 'react';

class App extends React.Component{
  constructor(props){
      super(props);
      this.state={
        isLoggedIn: false
      };
    }

    login(){
      this.setState({isLoggedIn: true});
    }

    logout(){
      this.setState({isLoggedIn: false});
    }
    
  render(){
      if(this.state.isLoggedIn){
        return(
          <div>
            <PrivatePage />
            <button onClick={()=> this.logout()}>ログアウト</button>
          </div>
        );
      }
      return(
        <div>
          <PublicPage />
          <button onClick={()=> this.login()}>ログイン</button>
        </div>
      );
    }
}

  export default App;

    const PublicPage=()=>{
      const style={
        backgroundColor: '#ff0'
      };

      return(
        <div style={style}>
          <h2>非ログイン時のページ</h2>
        </div>
      );
    };

    const PrivatePage=()=>{
      const style={
        backgroundColor: '#0f0'
      };

      return(
        <div style={style}>
          <h2>ログイン時のページ</h2>
        </div>
      );
    };