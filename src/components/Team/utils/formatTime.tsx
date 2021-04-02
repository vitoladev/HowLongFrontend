const formatTime = (time: number, unit: string, plural: string) => {
  if (time <= 0) return;
  const formatedTime = time > 1 ? plural : unit;
  return (
    <tr>
      <td>
        {time} {formatedTime}
      </td>
    </tr>
  );
};

export default formatTime;
