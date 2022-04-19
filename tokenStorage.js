const TOKEN_KEY = 'token_data';
import {AsyncStorage} from "react-native";

exports.storeToken = function (tok) {
  
  try {
    AsyncStorage.setItem(TOKEN_KEY, tok.accessToken);
  } catch(e) {
    console.log(e.message);
  }
}

exports.removeToken = function () {
  
  try {
    AsyncStorage.removeItem(TOKEN_KEY);
  } catch(e) {
    console.log(e.message);
  }
}

exports.isLoggedIn = function() {
  return AsyncStorage.getItem(TOKEN_KEY);
}

exports.retrieveToken = function () {

  var ud;

  try {
    ud = AsyncStorage.getItem(TOKEN_KEY);
  } catch(e) {
    console.log(e.message);
  }
  
  return ud;
}