import { getLifterBasicById, getLifterRecent5ById } from '../../../utils/queries'

export default async function handler(req, res) {
  const { id } = req.query; // MeetID

  try {
    const player_info = await getLifterBasicById(id);
    const recent_matches = await getLifterRecent5ById(id);

    res.status(200).json({
      success: true,
      message: 'Success',
      data: {
        player_info: player_info,
        recent_matches: recent_matches,
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
