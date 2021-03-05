import React, { useEffect } from "react";
import { connect } from 'react-redux';

const getUserList = new Promise((resolved, reject) => {
  setTimeout( () => {
    console.log('我被执行了！！');
    // dispatch(changeUserList([{name: 'zaoren'}], [{name: 'ssr'}]));
    resolved([{name: 'zaoren'}, {name: 'ssr'}]);
  }, 300)
})

const Home = ( {dispatchUserList, userList }) => {

  useEffect(() => {
    userList.length === 0 ? getUserList.then((list) => {
      dispatchUserList(list)
    }) : ""
  }, [])

  return (
  <div>
    <span>
      This is a React Component
    </span>
    <button
      onClick={() => {
        alert('click');
      }}
    >
      <span> click </span>
    </button>

    <p> {JSON.stringify(userList)} </p>
  </div>
  );
};

const mapStateToProps = (state)=>({
  userList:state.userList
});

const mapDispatchToProps = (dispatch)=>({
  dispatchUserList: (list) => {
    dispatch({type:'CHANGE_USER_LIST', list})
  }
})

Home.getInitialData = (store) => {
  return getUserList.then((list) => {
    store.dispatch( {type:'CHANGE_USER_LIST', list } )
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
