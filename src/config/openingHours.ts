export const openingHours = {
  weekdays: {
    label: "Segunda a sexta-feira",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    open: "06:00",
    close: "22:00",
    type: "weekday" as const,
  },
  saturday: {
    label: "Sábado",
    days: ["Saturday"],
    open: "09:00",
    close: "17:00",
    type: "saturday" as const,
  },
  sunday: {
    label: "Domingos e feriados",
    days: ["Sunday"],
    open: "09:00",
    close: "13:00",
    type: "holiday" as const,
  },
};

export const hoursArray = [
  openingHours.weekdays,
  openingHours.saturday,
  openingHours.sunday,
];

export type HoursType = "weekday" | "saturday" | "holiday";

export function getHoursTypeLabel(type: HoursType): string {
  switch (type) {
    case "weekday":
      return "Dias úteis";
    case "saturday":
      return "Sábado";
    case "holiday":
      return "Domingos e feriados";
    default:
      return "";
  }
}

export function formatTime(time: string): string {
  return time;
}
