import axios from 'axios';
import * as Sentry from '@sentry/vue';
import LogRocket from 'logrocket';

export default {
  state: {
    errors: [],
  },
  mutations: {
    addError(state, error) {
      state.errors.push(error);
    },
    clearErrors(state) {
      state.errors = [];
    },
  },
  actions: {
    logError({ commit }, { error, errorType }) {
      commit('addError', { error, errorType });

      // Send the error to Sentry and LogRocket
      if (process.env.NODE_ENV === 'production') {
        Sentry.captureException(error);
        LogRocket.captureException(error);
      }

      // Log the error in the backend or a file
      axios.post('/api/log-error', {
        message: error.message,
        stack: error.stack,
        type: errorType,
      }).catch(err => {
        console.error('Error logging to backend:', err);
      });
    },
  },
  getters: {
    getErrors: state => state.errors,
  },
};
