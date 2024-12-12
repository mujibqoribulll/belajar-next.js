
export default async function handler(req, res) {
  try {
    const response = await (await fetch("https://dummyjson.com/users")).json();
    res.status(200).json({ ...response });
  } catch (error) {}
}