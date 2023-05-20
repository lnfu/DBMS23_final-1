import { getLifterBasicById, getLifterRecent5ById } from '../../../utils/queries'

export default async function handler(req, res) {
  const { id } = req.query; // MeetID

  try {
    const [data1] = await getLifterBasicById(id);
    const [data2] = await getLifterRecent5ById(id);

    res.status(200).json({
      success: true,
      message: 'Success',
      data: {
        player_info: data1,
        recent_matches: data2,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Error executing SQL statement',
      error: error,
    });
  }
}
