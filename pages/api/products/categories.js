import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['shirts', 'pants', 'shoes'];
  res.send(categories);
});

export default handler;
