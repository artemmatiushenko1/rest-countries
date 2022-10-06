import { toast, TypeOptions } from 'react-toastify';

class Alert {
  addMessage(message: string, type: TypeOptions) {
    toast(message, { type, position: 'bottom-left' });
  }
}

export default new Alert();
