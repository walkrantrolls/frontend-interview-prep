export default function selectData(sessions, options = {}) {
  const {
    user,
    minDuration,
    equipment,
    merge = false,
  } = options;

  let data;

  if (merge) {
    const map = new Map();

    // Merge sessions
    sessions.forEach((session, index) => {
      if (!map.has(session.user)) {
        map.set(session.user, {
          user: session.user,
          duration: 0,
          equipment: new Set(),
          index,
        });
      }

      const merged = map.get(session.user);

      merged.duration += session.duration;

      session.equipment.forEach(item =>
        merged.equipment.add(item)
      );

      // remember latest occurrence
      merged.index = index;
    });

    data = [...map.values()]
      .sort((a, b) => a.index - b.index)
      .map(item => ({
        user: item.user,
        duration: item.duration,
        equipment: [...item.equipment].sort(),
      }));
  } else {
    // copy objects (don't mutate)
    data = sessions.map(session => ({
      user: session.user,
      duration: session.duration,
      equipment: [...session.equipment],
    }));
  }

  return data.filter(session => {
    if (user !== undefined && session.user !== user)
      return false;

    if (
      minDuration !== undefined &&
      session.duration < minDuration
    )
      return false;

    if (
      equipment &&
      !equipment.some(eq =>
        session.equipment.includes(eq)
      )
    )
      return false;

    return true;
  });
}
