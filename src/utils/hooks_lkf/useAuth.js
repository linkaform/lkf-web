import { useSelector, useDispatch } from 'react-redux'
import { setUser, initialState } from 'store/auth/userSlice'
import { apiSignIn, apiSignOut, apiSignUp } from 'services/AuthService'
import { onSignInSuccess, onSignOutSuccess } from 'store/auth/sessionSlice'
import appConfig from 'configs/app.config'
import { REDIRECT_URL_KEY } from 'constants/app.constant'
import { useNavigate } from 'react-router-dom'
import useQuery from './useQuery'


// makeLogin = (data) => {
//     return loginLkf(data).then((res) => {
//       if (res.success) {
//           this.setState({
//             user: res.user
//           })
//           window.user = res.user;
//           window.location.href = '/#/dashboard/'
//           localStorage.setItem('jwt', 'jwt ' + res.jwt);
//           localStorage.setItem('user', JSON.stringify(res.user));
//           localStorage.setItem('ls.parent', JSON.stringify(res.user.parent_info));
//           window.headers['Authorization'] = `jwt ${res.jwt}`;
//           this.changeLogState(true)
//       }
//       return res;
//     })
//   }

//   export const loginLkf = (data) =>
//   fetch('/api/infosync/user_admin/login/', {
//     method: 'POST',
//     body: JSON.stringify(data)
//   })
//   .then((res) => res.json())


//   changeLogState = (state) => {
//     this.setState({
//       isLogged: state
//     });
//   }