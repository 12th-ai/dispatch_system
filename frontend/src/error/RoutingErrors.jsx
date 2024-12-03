export function handleRoutingError(error) {
  return {
    message: `Routing error: ${error.message}`,
    stack: error.stack,
  };
}
