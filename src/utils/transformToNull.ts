function transformToNull(value: any, originalValue: any) {
  if (!value) {
    return null;
  }
  return originalValue;
}
export { transformToNull };
