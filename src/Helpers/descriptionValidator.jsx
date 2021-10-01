export function descriptionValidator(name) {
  let message =
    !name || name.length <= 0
      ? "Description can't be empty."
      : name.length > 2000
      ? "Description cannot exceed 2000 characters."
      : "";
  return message;
}
