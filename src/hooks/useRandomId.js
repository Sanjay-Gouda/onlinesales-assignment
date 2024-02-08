export const useRandomID = () => {
  const randomID = Math.floor(Math.random() * 900) + 100;
  return randomID;
};
