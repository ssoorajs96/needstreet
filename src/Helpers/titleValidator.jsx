export function titleValidator(name) {
  let message =
    !name || name.length <= 0
      ? "Title can't be empty."
      : name.length > 50
      ? "Title cannot exceed 50 characters."
      : "";
  return message;
}
