const getEnvVar = (key, defaultValue = undefined) => {
  const value = process.env[key];
  if (value === undefined) {
    if (defaultValue !== undefined) return defaultValue;
    throw new Error(`Environment variable "${key}" is required`);
  }
  return value;
};
export default getEnvVar;
