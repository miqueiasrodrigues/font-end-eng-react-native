export type NotificationType = "warning" | "danger" | "info";

export interface NotificationInterface {
  id?: string;
  userId: string;
  content: string;
  type: NotificationType;
  date: string;
}
