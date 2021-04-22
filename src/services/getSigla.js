import api from './api';

class EstadoService {
  get() {
    return api.get('');
  }
}

export default new EstadoService();
