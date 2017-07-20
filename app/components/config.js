export const SLANGER_HOSTNAME = '192.168.1.65';
export const SLANGER_API_PORT = 4567;
export const SLANGER_WS_PORT = 8080;
export const SLANGER_WSS_PORT = 8080;
export const API_HOSTNAME = SLANGER_HOSTNAME;
export const API_PORT = 4568;

export const SLANGER_CONFIG = {
  disableStats: true,
  wsHost: SLANGER_HOSTNAME,
  wsPort: SLANGER_WS_PORT,
  wssPort: SLANGER_WSS_PORT,
  enabledTransports: [ 'ws' ]
};
