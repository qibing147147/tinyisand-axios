import { AxiosRequestConfig } from './types'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  if (!config.method) {
    config.method = 'get'
  }
  xhr(config)
}

export default axios
