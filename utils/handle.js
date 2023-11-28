export const defaultHandle = (err, req, res, next) => {
  return res.json({ error: err.message });
};
