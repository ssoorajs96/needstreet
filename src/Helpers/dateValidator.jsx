export function dateValidator(name) {
  let message =
    !name || name.length <= 0
      ? "Date can't be empty."
      : /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.test(name)
      ? "Invalid Date."
      : "";
  return message;
}
