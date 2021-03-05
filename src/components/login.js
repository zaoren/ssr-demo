import React, { useEffect } from "react";
import { connect } from "react-redux";

const getUserInfo = new Promise((resolved, reject) => {
  setTimeout(() => {
    console.log("我也被执行了！！");
    resolved({ name: "ssr", passward: "123456" });
  }, 300);
});

const Login = ({ dispatchUserInfo, userInfo }) => {
  useEffect(() => {
    Object.keys(userInfo).length === 0 ? getUserInfo.then((list) => {
      dispatchUserInfo(list);
    }) : '';
  }, []);

  return (
    <div>
      <div>
        <span>请输入账号</span>
        <input placeholder="请输入密码" />
      </div>
      <div>
        <span>请输入密码</span>
        <input placeholder="请输入密码" />
      </div>
      <div>{JSON.stringify(userInfo)}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchUserInfo: (obj) => {
    dispatch({ type: "CHANGE_USER_INFO", userInfo: obj });
  },
});

Login.getInitialData = (store) => {
  return getUserInfo.then((obj) => {
    store.dispatch({ type: "CHANGE_USER_INFO", userInfo: obj });
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
