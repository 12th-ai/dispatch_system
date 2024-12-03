export function handleNetworkError(error) {
  if (error.response) {
    // Server responded with a non-2xx status code
    return {
      message: `Network error: ${error.response.status}`,
      stack: error.stack,
    };
  } else if (error.request) {
    // No response was received from the server
    return {
      message: 'Network error: No response from server.',
      stack: error.stack,
    };
  } else {
    // Other types of network errors
    return {
      message: `Network error: ${error.message}`,
      stack: error.stack,
    };
  }
}
