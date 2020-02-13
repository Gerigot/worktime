export const formatDuration = actualDuration => {
  let minutes = Math.abs(actualDuration.minutes());
  if (actualDuration.minutes() < 0) {
    return (
      "-" +
      actualDuration.hours() +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes)
    );
  }
  return (
    actualDuration.hours() +
    ":" +
    (actualDuration.minutes() < 10
      ? "0" + actualDuration.minutes()
      : actualDuration.minutes())
  );
};
