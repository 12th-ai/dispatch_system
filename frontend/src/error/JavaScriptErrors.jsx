export function handleJavaScriptError(error) {
  // Example: Handle unhandled JS errors
  if (error instanceof SyntaxError) {
    // Custom message or logging for SyntaxError
    return {
      message: 'A syntax error occurred.',
      stack: error.stack,
    };
  }
  
  // Generic JavaScript error handling
  return {
    message: 'A JavaScript error occurred.',
    stack: error.stack,
  };
}
