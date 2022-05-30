import dayjs from "dayjs";

export const getDateString = (date: string) => {
  const currentDate = dayjs(new Date());
  const postDate = dayjs(new Date(date));
  const day = currentDate.diff(postDate, "day");

  if (day >= 0 && day <= 7) {
    // TODO : 시간 되면 일 포함해서 분, 시간 추가
    if (day === 0) {
      return "방금 전";
    }

    return `${day}일 전`;
  }
  return dayjs(date).format("YYYY년 MM월 DD일");

  return;
};
