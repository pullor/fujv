/**
 * Created by myimac on 17/9/6.
 */
import config from './config'
import axios from 'axios'

export const userList = () => {
  return axios.post(config.used_lists)
}
