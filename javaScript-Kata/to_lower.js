function toUnderscore(string) {
  return (string+'').replace(/([^A-Z])([A-Z])/g, "$1_$2").toLowerCase();
}








