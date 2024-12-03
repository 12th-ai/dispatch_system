export function handleMemoryLeakError(error) {
  return {
    message: 'Possible memory leak detected.',
    stack: error.stack,
  };
}
